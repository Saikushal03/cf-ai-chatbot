# AI Prompts Used in Development

I went through a few misc prompts and sessions and cannot remember all the prompts I gave. Therefore, I compiled the below document to show the phases through which I got to with my prompts. In general, this document contains the AI prompts that were used during the development of the Cloudflare AI Agent project, documenting the journey from initial setup to final customization.

## Phase 1: Initial Agent Setup

### Prompt 1: Building Agents on Cloudflare
```
Build Agents on Cloudflare
The Agents SDK enables you to build and deploy AI-powered agents that can autonomously perform tasks, communicate with clients in real time, call AI models, persist state, schedule tasks, run asynchronous workflows, browse the web, query data from your database, support human-in-the-loop interactions, and a lot more.

Ship your first Agent
To use the Agent starter template and create your first Agent with the Agents SDK:

Terminal window
# install it
npm create cloudflare@latest agents-starter -- --template=cloudflare/agents-starter
# and deploy it
npx wrangler@latest deploy

Head to the guide on building a chat agent to learn how the starter project is built and how to use it as a foundation for your own agents.

If you're already building on Workers, you can install the agents package directly into an existing project:

Terminal window
npm i agents

And then define your first Agent by creating a class that extends the Agent class:

JavaScript
TypeScript
JavaScript
import { Agent, AgentNamespace } from "agents";

export class MyAgent extends Agent {
  // Define methods on the Agent:
  // https://developers.cloudflare.com/agents/api-reference/agents-api/
  //
  // Every Agent has built in state via this.setState and this.sql
  // Built-in scheduling via this.schedule
  // Agents support WebSockets, HTTP requests, state synchronization and
  // can run for seconds, minutes or hours: as long as the tasks need.
}

Lastly, add the Durable Objects binding to your wrangler file:

wrangler.jsonc
wrangler.toml
{
  "durable_objects": {
    "bindings": [
      {
        "name": "MyAgent",
        "class_name": "MyAgent"
      }
    ]
  },
  "migrations": [
    {
      "tag": "v1",
      "new_sqlite_classes": [
        "MyAgent"
      ]
    }
  ]
}

Dive into the Agent SDK reference to learn more about how to use the Agents SDK package and defining an Agent.

Why build agents on Cloudflare?
We built the Agents SDK with a few things in mind:

Batteries (state) included: Agents come with built-in state management, with the ability to automatically sync state between an Agent and clients, trigger events on state changes, and read+write to each Agent's SQL database.
Communicative: You can connect to an Agent via WebSockets and stream updates back to client in real-time. Handle a long-running response from a reasoning model, the results of an asynchronous workflow, or build a chat app that builds on the useAgent hook included in the Agents SDK.
Extensible: Agents are code. Use the AI models you want, bring-your-own headless browser service, pull data from your database hosted in another cloud, add your own methods to your Agent and call them.
Agents built with Agents SDK can be deployed directly to Cloudflare and run on top of Durable Objects — which you can think of as stateful micro-servers that can scale to tens of millions — and are able to run wherever they need to. Run your Agents close to a user for low-latency interactivity, close to your data for throughput, and/or anywhere in between.

Build on the Cloudflare Platform
Workers
Build serverless applications and deploy instantly across the globe for exceptional performance, reliability, and scale.

AI Gateway
Observe and control your AI applications with caching, rate limiting, request retries, model fallback, and more.

Vectorize
Build full-stack AI applications with Vectorize, Cloudflare's vector database. Adding Vectorize enables you to perform tasks such as semantic search, recommendations, anomaly detection or can be used to provide context and memory to an LLM.

Workers AI
Run machine learning models, powered by serverless GPUs, on Cloudflare's global network.

Workflows
Build stateful agents that guarantee executions, including automatic retries, persistent state that runs for minutes, hours, days, or weeks.
```

## Phase 2: UI/UX Customization

### Prompt 2: Cloudflare-themed Design
```
I want to change the looks to something that feels more like Cloudflare. Please help me:
- Update the color scheme to match Cloudflare's brand colors (orange/amber theme)
- Add Cloudflare-style gradients and visual elements
- Implement modern UI components that feel like Cloudflare's design system
- Add proper branding elements
- Create a more professional and polished appearance
- Ensure the design is consistent with Cloudflare's visual identity
```

## Phase 3: Model Migration and Testing

### Prompt 3: Switching to DeepSeek Model
```
I want to change the model from OpenAI to DeepSeek. Please help me:
- Replace the OpenAI integration with DeepSeek model
- Update the model configuration in the server
- Ensure proper API key handling for DeepSeek
- Test the integration to make sure it works correctly
- Handle any differences in response format between models
```

### Prompt 4: DeepSeek Thinking Process Issue
```
The DeepSeek model keeps showing the thinking part of the prompt as well in the chat interface. This is not desired behavior. Please help me:
- Identify why the thinking process is being displayed
- Fix the response parsing to hide internal reasoning
- Ensure only the final response is shown to users
- Maintain the model's reasoning capabilities while hiding the process
```

### Prompt 5: Testing Other Models
```
Since DeepSeek is showing the thinking process, let's try other models. Please help me:
- Test different available models
- Compare their performance and response quality
- Find a model that works well without showing internal reasoning
- Ensure proper integration with the existing tool system
- Maintain good response times and quality
```

### Prompt 6: Settling on Meta Model
```
After testing various models, I've decided to settle on the Meta model. Please help me:
- Finalize the Meta model integration
- Optimize the configuration for best performance
- Ensure all tools work correctly with this model
- Test the complete functionality
- Document any specific considerations for this model choice
```

## Phase 4: Testing and Validation

### Prompt 7: Application Testing
```
Test my application and do nothing else
```

### Prompt 8: Code Synchronization
```
I want the code to be same as the github repository
```

## Development Journey Summary

### Key Milestones:
1. **Initial Setup**: Used Cloudflare's official agents-starter template
2. **UI Enhancement**: Transformed the interface to match Cloudflare's design language
3. **Model Migration**: Tested multiple AI models (OpenAI → DeepSeek → Meta)
4. **Issue Resolution**: Fixed DeepSeek's thinking process display issue
5. **Final Selection**: Settled on Meta model for optimal performance
6. **Testing**: Comprehensive testing of all functionality
7. **Synchronization**: Ensured code matches GitHub repository

### Technical Decisions Made:
- **Framework**: Cloudflare Workers with Durable Objects
- **Frontend**: React with TypeScript and Tailwind CSS
- **AI Model**: Meta model (after testing OpenAI and DeepSeek)
- **State Management**: Built-in Cloudflare Agents state management
- **Deployment**: Cloudflare Workers platform
- **Styling**: Cloudflare-inspired orange/amber theme

### Challenges Overcome:
1. **Model Integration**: Successfully migrated between different AI providers
2. **UI/UX**: Created a cohesive Cloudflare-branded interface
3. **Response Parsing**: Fixed issues with model output formatting
4. **Testing**: Ensured all functionality works correctly
5. **Code Management**: Maintained synchronization with repository

## Final Architecture

The final application includes:
- **AI Agent**: Cloudflare Workers-based agent with Meta model integration
- **Chat Interface**: Modern React UI with Cloudflare branding
- **Tool System**: Comprehensive set of tools for various tasks
- **State Management**: Persistent state using Cloudflare's built-in capabilities
- **Real-time Communication**: WebSocket-based streaming responses
- **Scheduling**: Built-in task scheduling capabilities
- **Human-in-the-loop**: Confirmation system for sensitive operations

This project demonstrates the full capabilities of Cloudflare's Agents SDK and provides a solid foundation for building production-ready AI agents.
