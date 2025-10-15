AI Chatbot for Cloudflare Internship
This repository contains my project submission for the Cloudflare AI Software Engineering Intern role. It is a fully functional chatbot built with Cloudflare's developer platform to meet the requirements of the assignment.

Live Demo
Try the Live Chatbot Here: https://proud-pine-5833.saikushalthogaru.workers.dev/

Deploy Your Own Version: Deploy with Cloudflare

How It's Built
The project is built entirely on the Cloudflare stack, using a few key services to make it work:

Cloudflare Workers AI: The brain of the chatbot is the Llama 3.3 model, running serverlessly on Workers AI.

Cloudflare Durable Objects: To remember conversation history and manage tasks, the application uses Durable Objects for state management.

Cloudflare Pages: The user interface is a simple chat application built with React and hosted on Cloudflare Pages.

Main Features
The chatbot can do more than just talk. It can use several tools to perform tasks, such as:

Get the current time or weather for any city.

Schedule reminders for you.

Save notes and remember key information from the conversation.

Analyze code snippets for quality and complexity.

Send emails or manage files (with user confirmation for safety).

How to Run This Project
To run this project locally, you'll need Git and Node.js installed on your machine, as well as a Cloudflare account.

1. Clone the Repository
First, clone the repository to your computer.

git clone [https://github.com/Saikushal03/cf-ai-chatbot-submission.git](https://github.com/Saikushal03/cf-ai-chatbot-submission.git)
cd cf-ai-chatbot-submission

2. Install Dependencies
Next, install the necessary packages using npm.

npm install

3. Run Locally
To start the local development server, run the following command. The application will be available at http://localhost:8787.

npm start

4. Deploy to Cloudflare
To deploy the project to your own Cloudflare account, just run:

npm run deploy
