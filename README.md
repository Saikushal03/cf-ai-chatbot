# 🤖 cf-ai-chatbot-submission

A comprehensive AI-powered chatbot built on Cloudflare's platform, featuring Llama 3.3 integration, advanced tool system, and persistent memory management. This is my submission for the Cloudflare AI Intern assignment.

## 🚀 Live Demo

[Try the Live Chatbot](https://your-worker-name.saikushal03.workers.dev/) [Deploy to Your Own Cloudflare Workers](https://deploy.workers.cloudflare.com/?url=https://github.com/Saikushal03/cf-ai-chatbot-submission)

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
git clone [https://github.com/Saikushal03/cf-ai-chatbot-submission.git](https://github.com/Saikushal03/cf-ai-chatbot-submission.git)
cd cf-ai-chatbot-submission
