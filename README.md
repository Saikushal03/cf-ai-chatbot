# 🤖 cf_ai_nvChatbot

A comprehensive AI-powered chatbot built on Cloudflare's platform, featuring Llama 3.3 integration, advanced tool system, and persistent memory management.

## 🚀 Live Demo

[Try the Live Chatbot](https://proud-pine-5833.nishanthvaidya1998.workers.dev/)

[Deploy to Your Own Cloudflare Workers](https://deploy.workers.cloudflare.com/?url=https://github.com/NishanthVaidya/cf_ai_nvChatbot)

## ✨ Features

- **🧠 AI-Powered**: Uses Llama 3.3 via Cloudflare Workers AI
- **💬 Interactive Chat**: Real-time streaming responses with modern UI
- **🛠️ Advanced Tools**: 20+ tools including scheduling, memory management, and external APIs
- **🔄 State Management**: Persistent conversation history and user data
- **⚡ Real-time**: Live chat with streaming responses
- **🎨 Modern UI**: Beautiful gradient design with dark/light themes
- **🔒 Secure**: Human-in-the-loop confirmation for sensitive operations
- **📅 Scheduling**: One-time, delayed, and recurring task management
- **🧠 Memory**: Persistent memory system for conversation context

## 🏗️ Architecture

This project demonstrates a complete AI-powered application using Cloudflare's platform:

- **LLM**: Llama 3.3 via Cloudflare Workers AI
- **Workflow**: Durable Objects for state management and coordination
- **User Interface**: React-based chat interface with real-time streaming
- **Memory**: SQL-based persistent storage for conversation history and user data
- **Tools**: Comprehensive tool system with 20+ capabilities

## 🛠️ Available Tools

### Auto-Executing Tools
- **Time & Date**: Get current time, local time for any location
- **Math**: Safe mathematical calculations
- **Scheduling**: One-time, delayed, and recurring task management
- **Memory**: Save/recall conversation context and user data
- **Code Analysis**: Analyze code quality and complexity
- **Sentiment Analysis**: Analyze text sentiment

### Human-Confirmed Tools
- **Email**: Send emails (requires confirmation)
- **File Operations**: Read, write, delete files (requires confirmation)
- **Weather**: Get weather information (requires confirmation)

### External API Tools
- **News**: Fetch latest news from external APIs
- **Web Scraping**: Extract content from web pages
- **Weather API**: Real-time weather data

## 📋 Prerequisites

- Cloudflare account with Workers AI enabled
- Node.js 18+ and npm
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/NishanthVaidya/cf_ai_nvChatbot.git
cd cf_ai_nvChatbot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.dev.vars` file in the project root:

```env
# Optional: OpenAI API key (if you want to use OpenAI instead of Workers AI)
OPENAI_API_KEY=your_openai_api_key_here
```

**Note**: This project primarily uses Cloudflare Workers AI (Llama 3.3), so the OpenAI key is optional.

### 4. Run Locally

```bash
npm start
```

This will start the development server at `http://localhost:8787`

### 5. Deploy to Cloudflare

```bash
npm run deploy
```

This will build and deploy your application to Cloudflare Workers.

## 🎯 Usage Examples

### Basic Chat
```
User: "What's the weather like in New York?"
AI: [Uses weather tool to fetch real-time data]
```

### Task Scheduling
```
User: "Remind me to call mom in 30 minutes"
AI: [Schedules a delayed task using the scheduling system]
```

### Memory Management
```
User: "Remember that I prefer dark mode"
AI: [Saves preference to persistent memory]
```

### Code Analysis
```
User: "Analyze this JavaScript code: [code snippet]"
AI: [Provides detailed code analysis including complexity metrics]
```

## 📁 Project Structure

```
cf_ai_nvChatbot/
├── src/
│   ├── app.tsx              # Main chat UI component
│   ├── server.ts            # Chat agent logic with Llama 3.3 integration
│   ├── tools.ts             # 20+ tool definitions and implementations
│   ├── utils.ts             # Helper functions and utilities
│   ├── styles.css           # Custom styling and themes
│   ├── components/          # Reusable UI components
│   │   ├── avatar/          # User avatar component
│   │   ├── button/          # Custom button components
│   │   ├── card/            # Card layout components
│   │   ├── modal/           # Modal dialog components
│   │   └── tool-invocation-card/ # Tool execution UI
│   ├── hooks/               # Custom React hooks
│   ├── providers/           # Context providers
│   └── lib/                 # Utility libraries
├── public/                  # Static assets
├── tests/                   # Test files
├── wrangler.jsonc          # Cloudflare Workers configuration
├── package.json            # Dependencies and scripts
├── PROMPTS.md              # AI prompts used in development
└── README.md               # This file
```

## 🔧 Configuration

### Cloudflare Workers Configuration

The project uses `wrangler.jsonc` for configuration:

```jsonc
{
  "name": "cf_ai_nvChatbot",
  "main": "src/server.ts",
  "ai": {
    "binding": "AI"  // Enables Workers AI
  },
  "durable_objects": {
    "bindings": [
      {
        "name": "Chat",
        "class_name": "Chat"  // State management
      }
    ]
  }
}
```

### Environment Variables

- `OPENAI_API_KEY` (optional): For OpenAI integration
- Workers AI is automatically available via the `AI` binding

## 🛠️ Development Guide

### Adding New Tools

Tools are defined in `src/tools.ts` and can be either auto-executing or require human confirmation:

```typescript
// Auto-executing tool
const myTool = tool({
  description: "Description of what the tool does",
  inputSchema: z.object({
    param: z.string().describe("Parameter description")
  }),
  execute: async ({ param }) => {
    // Implementation here
    return "Result";
  }
});

// Human-confirmation required tool
const sensitiveTool = tool({
  description: "Tool that requires user confirmation",
  inputSchema: z.object({
    action: z.string()
  })
  // No execute function = requires confirmation
});
```

### Tool Categories

1. **Auto-executing**: Safe operations like math, time, scheduling
2. **Confirmation-required**: Sensitive operations like email, file deletion
3. **External APIs**: Weather, news, web scraping
4. **Memory**: Save/recall conversation context

### Customizing the UI

The chat interface is built with React and can be customized in `src/app.tsx`:

- Modify theme colors in `src/styles.css`
- Add new UI components in the `components/` directory
- Customize message rendering and tool confirmation dialogs
- Add new controls to the header

### Switching AI Models

This project uses Llama 3.3 via Cloudflare Workers AI by default. To switch models:

```typescript
// In src/server.ts, change the model:
const model = workersai("@cf/meta/llama-2-7b-chat-fp16");  // Current
const model = workersai("@cf/meta/llama-3.3-70b-instruct"); // Alternative
const model = workersai("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b"); // Another option
```

Available models can be found in the [Cloudflare Workers AI documentation](https://developers.cloudflare.com/workers-ai/models/).

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run type checking:

```bash
npm run check
```

## 📊 Performance

The application includes performance logging and monitoring:

- Console logging for all tool executions
- Performance metrics for AI responses
- Memory usage tracking
- Error handling and recovery

## 🎯 Use Cases

This chatbot can be adapted for various applications:

### 1. **Customer Support Agent**
- Ticket creation and lookup
- Order status checking
- Product recommendations
- FAQ database search

### 2. **Development Assistant**
- Code analysis and quality assessment
- Documentation search
- Dependency checking
- Git operations

### 3. **Personal Productivity Assistant**
- Task scheduling (one-time, delayed, recurring)
- Email management
- Note taking and memory management
- Calendar integration

### 4. **Data Analysis Assistant**
- Database querying
- Statistical analysis
- Report generation
- Data visualization

### 5. **Content Creation Assistant**
- Web scraping for research
- Sentiment analysis
- Code generation and analysis
- Image generation

## 🚀 Deployment

### Cloudflare Workers

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare**:
   ```bash
   npm run deploy
   ```

3. **Configure environment variables** in the Cloudflare dashboard:
   - Go to Workers & Pages → Your Worker → Settings → Variables
   - Add any required environment variables

### Local Development

```bash
npm start
```

The application will be available at `http://localhost:8787`

## 🔧 Troubleshooting

### Common Issues

1. **AI Model Not Responding**
   - Ensure Workers AI is enabled in your Cloudflare account
   - Check that the AI binding is properly configured in `wrangler.jsonc`

2. **Tools Not Working**
   - Verify tool definitions in `src/tools.ts`
   - Check console logs for error messages
   - Ensure proper error handling in tool implementations

3. **Memory Not Persisting**
   - Verify Durable Objects configuration
   - Check SQL database setup
   - Review memory management tool implementations

4. **Deployment Issues**
   - Ensure all dependencies are installed
   - Check `wrangler.jsonc` configuration
   - Verify Cloudflare account permissions

## 📚 Learn More

- [Cloudflare Workers AI Documentation](https://developers.cloudflare.com/workers-ai/)
- [Cloudflare Durable Objects](https://developers.cloudflare.com/durable-objects/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [AI SDK Documentation](https://sdk.vercel.ai/docs/introduction)
- [Workers AI Provider](https://sdk.vercel.ai/providers/community-providers/cloudflare-workers-ai)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/)
- UI components inspired by [Radix UI](https://www.radix-ui.com/)
- Icons provided by [Phosphor Icons](https://phosphoricons.com/)
- Powered by the [AI SDK](https://sdk.vercel.ai/)

---

**Built for the Cloudflare AI Assignment** - Demonstrating a complete AI-powered application with Llama 3.3, Durable Objects, and advanced tool integration.
