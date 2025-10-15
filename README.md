# 🌩️ Cloudflare AI Chatbot – Internship Project Submission

This repository contains my project submission for the **Cloudflare Software Engineering Intern (AI)** role for **Summer 2026**.  
The project demonstrates a fully functional, **AI-powered chatbot** built entirely on the **Cloudflare Developer Platform**, featuring **Workers AI (Llama 3.3)**, **Durable Objects**, and a **tool-assisted architecture** for intelligent task execution.

---

## 🚀 Live Demo & Deployment

- **Live Application:** [https://proud-pine-5833.saikushalthogaru.workers.dev/](https://proud-pine-5833.saikushalthogaru.workers.dev/)  
- **One-Click Deploy:** *(Add your deployment button or Cloudflare link here)*  

This demo runs entirely on **Cloudflare’s global edge network**, ensuring fast, serverless performance with no external backend.

---

## 🧠 Technical Overview

The chatbot is designed using a **serverless and scalable architecture** powered by Cloudflare.

- **AI Model:** Uses **Llama 3.3** through **Cloudflare Workers AI** for low-latency, serverless inference.  
- **State Management:** Powered by **Cloudflare Durable Objects**, enabling persistent sessions and conversational memory.  
- **Frontend:** A **React-based chat UI** with real-time response streaming, hosted on **Cloudflare Pages**.  
- **Memory & Storage:** A **SQL-based persistent memory layer** allows the bot to recall previous user interactions and preferences.

---

## ✨ Key Features

### 🧩 Tool System  
A robust system of **20+ integrated tools** allows the chatbot to perform both automated and user-confirmed operations:
- **Auto-Executing Tools:** Safe, self-contained tasks like math, time, or scheduling.  
- **Confirmation-Based Tools:** Sensitive operations (e.g., sending emails, managing files) require explicit user approval.  
- **External APIs:** Integrations for live data, including weather, news, and web content.

### 🧠 Persistent Memory  
The chatbot maintains a **persistent memory** to recall conversation context and user preferences across sessions.

### 🔒 Secure Operations  
Critical actions are gated by **human-in-the-loop confirmation**, ensuring user control and security.

### 💬 Real-Time Interaction  
AI responses are **streamed live** to the chat interface for a dynamic, conversational experience.

### 🎨 Modern User Interface  
Built with **React** and **Tailwind CSS**, offering:
- Clean, responsive layout  
- Dark/light theme support  
- Smooth animations and gradient accents  
- Tool confirmation cards for interactive feedback

---

## ⚙️ Getting Started

You can run this chatbot locally or deploy it directly to your own Cloudflare account.

### 📋 Prerequisites
- Cloudflare account with **Workers AI** enabled  
- **Node.js 18+**  
- **Git**

---

### 🧩 1. Clone the Repository

```bash
git clone https://github.com/Saikushal03/cf-ai-chatbot-submission.git
cd cf-ai-chatbot-submission
📦 2. Install Dependencies
bash
Copy code
npm install
💻 3. Run Locally
Start the development server:

bash
Copy code
npm start
Access the app at http://localhost:8787

☁️ 4. Deploy to Cloudflare
Deploy your own instance:

bash
Copy code
npm run deploy
This command builds and deploys the chatbot to your Cloudflare Workers environment.

🧱 Architecture Overview
Backend

Cloudflare Workers for AI orchestration

Llama 3.3 via Workers AI

Durable Objects for state management

SQL storage for persistent memory

Frontend

React UI hosted on Cloudflare Pages

WebSocket & Fetch streaming for real-time updates

Tool-based interaction system for modular operations

💡 Example Use Cases
Scenario	Example
Scheduling	“Remind me to call Mom in 30 minutes.”
Memory Recall	“Remember that I prefer dark mode.”
Code Analysis	“Analyze this JavaScript snippet.”
Weather Lookup	“What’s the weather like in New York?”
Sentiment Analysis	“Analyze the sentiment of this paragraph.”

📂 Project Structure
php
Copy code
cf-ai-chatbot-submission/
├── src/
│   ├── app.tsx              # React chat interface
│   ├── server.ts            # AI logic and model integration
│   ├── tools.ts             # Tool definitions (20+)
│   ├── utils.ts             # Helper utilities
│   ├── components/          # Modular UI components
│   ├── hooks/               # Custom React hooks
│   └── providers/           # Context providers
├── public/                  # Static assets
├── wrangler.jsonc           # Cloudflare Workers configuration
├── package.json             # Scripts and dependencies
└── README.md
🧠 Future Improvements
Integrate voice input and speech synthesis

Add OpenAI model fallback for versatility

Enhance code analysis with visualization tools

Extend tool library with APIs (calendar, translation, etc.)

📄 License
This project is licensed under the MIT License.
You’re welcome to explore, modify, and build upon it.

🙏 Acknowledgments
Built with Cloudflare Workers AI and Durable Objects

Inspired by Cloudflare AI SDK and modern AI tooling

UI components influenced by Radix UI and Phosphor Icons

Created as part of the Cloudflare AI Internship Assignment (2026)
