/**
 * Tool definitions for the AI chat agent
 * Tools can either require human confirmation or execute automatically
 */
import { tool, type ToolSet } from "ai";
import { z } from "zod/v3";

import type { Chat } from "./server";
import { getCurrentAgent } from "agents";
import { scheduleSchema } from "agents/schedule";

/**
 * Weather information tool that requires human confirmation
 * When invoked, this will present a confirmation dialog to the user
 */
const getWeatherInformation = tool({
  description: "show the weather in a given city to the user",
  inputSchema: z.object({ city: z.string() })
  // Omitting execute function makes this tool require human confirmation
});

/**
 * Local time tool that executes automatically
 * Since it includes an execute function, it will run without user confirmation
 * This is suitable for low-risk operations that don't need oversight
 */
const getLocalTime = tool({
  description: "get the local time for a specified location",
  inputSchema: z.object({ location: z.string() }),
  execute: async ({ location }) => {
    console.log(`Getting local time for ${location}`);
    return "10am";
  }
});

const scheduleTask = tool({
  description: "A tool to schedule a task to be executed at a later time",
  inputSchema: scheduleSchema,
  execute: async ({ when, description }) => {
    // we can now read the agent context from the ALS store
    const { agent } = getCurrentAgent<Chat>();

    function throwError(msg: string): string {
      throw new Error(msg);
    }
    if (when.type === "no-schedule") {
      return "Not a valid schedule input";
    }
    const input =
      when.type === "scheduled"
        ? when.date // scheduled
        : when.type === "delayed"
          ? when.delayInSeconds // delayed
          : when.type === "cron"
            ? when.cron // cron
            : throwError("not a valid schedule input");
    try {
      agent!.schedule(input!, "executeTask", description);
    } catch (error) {
      console.error("error scheduling task", error);
      return `Error scheduling task: ${error}`;
    }
    return `Task scheduled for type "${when.type}" : ${input}`;
  }
});

/**
 * Tool to list all scheduled tasks
 * This executes automatically without requiring human confirmation
 */
const getScheduledTasks = tool({
  description: "List all tasks that have been scheduled",
  inputSchema: z.object({}),
  execute: async () => {
    const { agent } = getCurrentAgent<Chat>();

    try {
      const tasks = agent!.getSchedules();
      if (!tasks || tasks.length === 0) {
        return "No scheduled tasks found.";
      }
      return tasks;
    } catch (error) {
      console.error("Error listing scheduled tasks", error);
      return `Error listing scheduled tasks: ${error}`;
    }
  }
});

/**
 * Tool to cancel a scheduled task by its ID
 * This executes automatically without requiring human confirmation
 */
const cancelScheduledTask = tool({
  description: "Cancel a scheduled task using its ID",
  inputSchema: z.object({
    taskId: z.string().describe("The ID of the task to cancel")
  }),
  execute: async ({ taskId }) => {
    const { agent } = getCurrentAgent<Chat>();
    try {
      await agent!.cancelSchedule(taskId);
      return `Task ${taskId} has been successfully canceled.`;
    } catch (error) {
      console.error("Error canceling scheduled task", error);
      return `Error canceling task ${taskId}: ${error}`;
    }
  }
});

// ===== AUTO-EXECUTING TOOLS =====

/**
 * Get current server time - executes automatically
 */
const getCurrentTime = tool({
  description: "Get current server time in ISO format",
  inputSchema: z.object({}),
  execute: async () => {
    console.log("Getting current server time");
    return new Date().toISOString();
  }
});

/**
 * Perform mathematical calculations - executes automatically
 */
const calculateMath = tool({
  description: "Perform safe mathematical calculations",
  inputSchema: z.object({
    expression: z
      .string()
      .describe("Mathematical expression to evaluate (e.g., '2 + 2', '10 * 5')")
  }),
  execute: async ({ expression }) => {
    console.log(`Calculating: ${expression}`);
    try {
      // Safe math evaluation - only allow basic operations
      const sanitized = expression.replace(/[^0-9+\-*/().\s]/g, "");
      const result = Function(`"use strict"; return (${sanitized})`)();
      return `Result: ${result}`;
    } catch (error) {
      return `Error calculating "${expression}": ${error}`;
    }
  }
});

// ===== CONFIRMATION-REQUIRED TOOLS =====

/**
 * Send email - requires human confirmation
 */
const sendEmail = tool({
  description: "Send an email to a recipient",
  inputSchema: z.object({
    to: z.string().email().describe("Recipient email address"),
    subject: z.string().describe("Email subject"),
    body: z.string().describe("Email body content")
  })
  // No execute function = requires confirmation
});

/**
 * Delete file - requires human confirmation
 */
const deleteFile = tool({
  description: "Delete a file from the system",
  inputSchema: z.object({
    filePath: z.string().describe("Path to the file to delete")
  })
  // No execute function = requires confirmation
});

// ===== SCHEDULING TOOLS =====

/**
 * Schedule reminder - leverages existing scheduling system
 */
const scheduleReminder = tool({
  description: "Schedule a reminder for later execution",
  inputSchema: z.object({
    message: z.string().describe("Reminder message"),
    delayMinutes: z.number().describe("Delay in minutes")
  }),
  execute: async ({ message, delayMinutes }) => {
    console.log(`Scheduling reminder: ${message} in ${delayMinutes} minutes`);
    const { agent } = getCurrentAgent<Chat>();
    const delaySeconds = delayMinutes * 60;
    agent!.schedule(delaySeconds, "executeTask", message);
    return `Reminder scheduled for ${delayMinutes} minutes: "${message}"`;
  }
});

// ===== DATABASE/STORAGE TOOLS =====

/**
 * Save user data to persistent storage
 */
const saveUserData = tool({
  description: "Save user data to persistent storage",
  inputSchema: z.object({
    key: z.string().describe("Unique key for the data"),
    data: z.record(z.any()).describe("Data object to store")
  }),
  execute: async ({ key, data }) => {
    console.log(`Saving user data with key: ${key}`);
    const { agent } = getCurrentAgent<Chat>();
    try {
      // Use SQL API for storage in Cloudflare Workers
      await agent!
        .sql`INSERT OR REPLACE INTO user_data (key, data, timestamp) VALUES (${key}, ${JSON.stringify(data)}, ${Date.now()})`;
      return `Data saved successfully with key: ${key}`;
    } catch (error) {
      return `Error saving data: ${error}`;
    }
  }
});

/**
 * Read user data from persistent storage
 */
const readUserData = tool({
  description: "Read user data from persistent storage",
  inputSchema: z.object({
    key: z.string().describe("Key of the data to retrieve")
  }),
  execute: async ({ key }) => {
    console.log(`Reading user data with key: ${key}`);
    const { agent } = getCurrentAgent<Chat>();
    try {
      const result = await agent!
        .sql`SELECT data FROM user_data WHERE key = ${key} ORDER BY timestamp DESC LIMIT 1`;
      const row = result[0];
      return row ? `Data found: ${row.data}` : `No data found for key: ${key}`;
    } catch (error) {
      return `Error reading data: ${error}`;
    }
  }
});

// ===== EXTERNAL API TOOLS =====

/**
 * Fetch news from external API
 */
const fetchNews = tool({
  description: "Fetch latest news from external API",
  inputSchema: z.object({
    category: z
      .string()
      .optional()
      .describe("News category (e.g., 'technology', 'business')"),
    limit: z.number().optional().describe("Number of articles to fetch")
  }),
  execute: async ({ category = "general", limit = 5 }) => {
    console.log(`Fetching ${limit} news articles in category: ${category}`);
    try {
      // Using a free news API
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=${limit}&apiKey=demo`
      );
      if (!response.ok) {
        return `News API unavailable. This is a demo - in production, you'd need a real API key.`;
      }
      const data = (await response.json()) as { articles?: unknown[] };
      return `Found ${data.articles?.length || 0} articles in ${category} category.`;
    } catch (error) {
      return `Error fetching news: ${error}`;
    }
  }
});

/**
 * Get weather information - now with real API call
 */
const getWeatherReal = tool({
  description: "Get real weather information for a city",
  inputSchema: z.object({
    city: z.string().describe("City name to get weather for"),
    country: z.string().optional().describe("Country code (e.g., 'US', 'UK')")
  }),
  execute: async ({ city, country = "US" }) => {
    console.log(`Getting weather for ${city}, ${country}`);
    try {
      // Using OpenWeatherMap API (demo key)
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=demo&units=metric`
      );
      if (!response.ok) {
        return `Weather API unavailable. This is a demo - in production, you'd need a real API key.`;
      }
      const data = (await response.json()) as {
        weather?: Array<{ description?: string }>;
        main?: { temp?: number };
      };
      return `Weather in ${city}: ${data.weather?.[0]?.description || "Unknown"} with temperature around ${data.main?.temp || "N/A"}°C`;
    } catch (error) {
      return `Error fetching weather: ${error}`;
    }
  }
});

// ===== FILE SYSTEM TOOLS =====

/**
 * Read file contents
 */
const readFile = tool({
  description: "Read contents of a file",
  inputSchema: z.object({
    filePath: z.string().describe("Path to the file to read")
  }),
  execute: async ({ filePath }) => {
    console.log(`Reading file: ${filePath}`);
    try {
      // In a real implementation, you'd read from your storage system
      return `File contents for ${filePath} would be read here. In production, implement actual file reading.`;
    } catch (error) {
      return `Error reading file: ${error}`;
    }
  }
});

/**
 * Write file contents
 */
const writeFile = tool({
  description: "Write content to a file",
  inputSchema: z.object({
    filePath: z.string().describe("Path where to write the file"),
    content: z.string().describe("Content to write to the file")
  }),
  execute: async ({ filePath, content }) => {
    console.log(`Writing to file: ${filePath}`);
    try {
      // In a real implementation, you'd write to your storage system
      return `Content written to ${filePath}. In production, implement actual file writing.`;
    } catch (error) {
      return `Error writing file: ${error}`;
    }
  }
});

// ===== AI/ML TOOLS =====

/**
 * Generate image using AI
 */
const generateImage = tool({
  description: "Generate an image using AI",
  inputSchema: z.object({
    prompt: z.string().describe("Description of the image to generate"),
    style: z
      .string()
      .optional()
      .describe("Art style (e.g., 'realistic', 'cartoon', 'abstract')")
  }),
  execute: async ({ prompt, style = "realistic" }) => {
    console.log(`Generating image: ${prompt} in ${style} style`);
    try {
      // Using Cloudflare AI binding
      // const result = await env.AI.run("@cf/stabilityai/stable-diffusion-xl-base-1.0", {
      //   prompt: `${prompt}, ${style} style`,
      //   num_steps: 20
      // });
      return `Image generation requested: "${prompt}" in ${style} style. In production, this would use Cloudflare AI bindings.`;
    } catch (error) {
      return `Error generating image: ${error}`;
    }
  }
});

/**
 * Analyze text sentiment
 */
const analyzeTextSentiment = tool({
  description: "Analyze the sentiment of text",
  inputSchema: z.object({
    text: z.string().describe("Text to analyze for sentiment")
  }),
  execute: async ({ text }) => {
    console.log(`Analyzing sentiment of text: ${text.substring(0, 50)}...`);
    try {
      // Simple sentiment analysis (in production, use proper AI model)
      const positiveWords = [
        "good",
        "great",
        "excellent",
        "amazing",
        "wonderful",
        "fantastic"
      ];
      const negativeWords = [
        "bad",
        "terrible",
        "awful",
        "horrible",
        "disappointing"
      ];

      const words = text.toLowerCase().split(" ");
      const positiveCount = words.filter((word) =>
        positiveWords.includes(word)
      ).length;
      const negativeCount = words.filter((word) =>
        negativeWords.includes(word)
      ).length;

      if (positiveCount > negativeCount) return "Sentiment: Positive";
      if (negativeCount > positiveCount) return "Sentiment: Negative";
      return "Sentiment: Neutral";
    } catch (error) {
      return `Error analyzing sentiment: ${error}`;
    }
  }
});

// ===== INNOVATIVE TOOLS =====

/**
 * Web scraper tool
 */
const scrapeWebPage = tool({
  description: "Scrape content from a web page",
  inputSchema: z.object({
    url: z.string().url().describe("URL of the webpage to scrape"),
    selector: z
      .string()
      .optional()
      .describe("CSS selector to extract specific content")
  }),
  execute: async ({ url, selector }) => {
    console.log(`Scraping webpage: ${url}`);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return `Failed to fetch webpage: ${response.status}`;
      }
      const html = await response.text();
      return `Webpage scraped successfully. Content length: ${html.length} characters. Selector "${selector || "none"}" would be applied in production.`;
    } catch (error) {
      return `Error scraping webpage: ${error}`;
    }
  }
});

/**
 * Code analyzer tool
 */
const analyzeCode = tool({
  description: "Analyze code for quality, complexity, and potential issues",
  inputSchema: z.object({
    code: z.string().describe("Code to analyze"),
    language: z
      .string()
      .optional()
      .describe("Programming language (e.g., 'javascript', 'python')")
  }),
  execute: async ({ code, language = "javascript" }) => {
    console.log(`Analyzing ${language} code`);
    try {
      const lines = code.split("\n").length;
      const characters = code.length;
      const functions = (code.match(/function\s+\w+/g) || []).length;
      const comments = (code.match(/\/\/|\/\*|\*/g) || []).length;

      return `Code Analysis:
- Lines of code: ${lines}
- Characters: ${characters}
- Functions found: ${functions}
- Comments: ${comments}
- Language: ${language}
- Complexity: ${lines > 100 ? "High" : lines > 50 ? "Medium" : "Low"}`;
    } catch (error) {
      return `Error analyzing code: ${error}`;
    }
  }
});

/**
 * Memory manager tool
 */
const manageMemory = tool({
  description: "Manage conversation memory and context",
  inputSchema: z.object({
    action: z
      .enum(["save", "recall", "clear"])
      .describe("Action to perform on memory"),
    key: z
      .string()
      .optional()
      .describe("Memory key for save/recall operations"),
    content: z.string().optional().describe("Content to save (for save action)")
  }),
  execute: async ({ action, key, content }) => {
    console.log(`Managing memory: ${action} ${key || ""}`);
    const { agent } = getCurrentAgent<Chat>();

    try {
      switch (action) {
        case "save":
          if (!key || !content)
            return "Error: key and content required for save action";
          await agent!
            .sql`INSERT OR REPLACE INTO memory (key, content, timestamp) VALUES (${`memory_${key}`}, ${content}, ${Date.now()})`;
          return `Memory saved with key: ${key}`;

        case "recall":
          if (!key) return "Error: key required for recall action";
          const result = await agent!
            .sql`SELECT content FROM memory WHERE key = ${`memory_${key}`} ORDER BY timestamp DESC LIMIT 1`;
          const memory = result[0];
          return memory
            ? `Recalled: ${memory.content}`
            : `No memory found for key: ${key}`;

        case "clear":
          // In production, you'd implement proper memory clearing
          return "Memory cleared (demo implementation)";

        default:
          return "Invalid action";
      }
    } catch (error) {
      return `Error managing memory: ${error}`;
    }
  }
});

/**
 * Export all available tools
 * These will be provided to the AI model to describe available capabilities
 */
export const tools = {
  // Original tools
  getWeatherInformation,
  getLocalTime,
  scheduleTask,
  getScheduledTasks,
  cancelScheduledTask,

  // Auto-executing tools
  getCurrentTime,
  calculateMath,

  // Confirmation-required tools
  sendEmail,
  deleteFile,

  // Scheduling tools
  scheduleReminder,

  // Database/storage tools
  saveUserData,
  readUserData,

  // External API tools
  fetchNews,
  getWeatherReal,

  // File system tools
  readFile,
  writeFile,

  // AI/ML tools
  generateImage,
  analyzeTextSentiment,

  // Innovative tools
  scrapeWebPage,
  analyzeCode,
  manageMemory
} satisfies ToolSet;

/**
 * Implementation of confirmation-required tools
 * This object contains the actual logic for tools that need human approval
 * Each function here corresponds to a tool above that doesn't have an execute function
 */
export const executions = {
  getWeatherInformation: async ({ city }: { city: string }) => {
    console.log(`Getting weather information for ${city}`);
    return `The weather in ${city} is sunny`;
  },

  sendEmail: async ({
    to,
    subject,
    body
  }: {
    to: string;
    subject: string;
    body: string;
  }) => {
    console.log(`Sending email to ${to}: ${subject}`);
    // In production, integrate with email service (SendGrid, AWS SES, etc.)
    return `Email sent successfully to ${to} with subject: "${subject}"`;
  },

  deleteFile: async ({ filePath }: { filePath: string }) => {
    console.log(`Deleting file: ${filePath}`);
    // In production, implement actual file deletion with proper error handling
    return `File ${filePath} has been deleted successfully`;
  }
};
