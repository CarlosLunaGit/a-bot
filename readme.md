# Customer Support Chatbot

## Introduction
This repository contains the source code for our Customer Support Chatbot, a powerful tool designed to enhance customer support experiences through AI-driven interactions. Leveraging Azure services, this chatbot offers a Training API for personalized chatbot training and an Integration API for seamless embedding into various web platforms.

## Features
- **Training API**: Customize the chatbot with your own FAQs, support documents, and conversational data.
- **Integration API**: Easily integrate the chatbot into your website or customer service platform.
- **Azure Cognitive Services**: Enhanced AI capabilities for natural language processing and understanding, now utilizing Azure Conversational Language Understanding (CLU) for advanced interaction capabilities.
- **Scalable Architecture**: Built to handle varying loads with high performance, now using Express for the web server framework.

## Getting Started
### Prerequisites
- Node.js (v12.0 or higher)
- An Azure account and Azure Cognitive Services for CLU
- Environment variables for Azure services (see below)

### Installation
1. Clone the repository:
    ```
    git clone https://github.com/CarlosLunaGit/a-bot.git
    ```

2. Navigate to the project directory:
    ```
    cd customer-support-chatbot
    ```

3. Install dependencies:
    ```
    npm install
    ```

4. Set up your Azure services and update the `.env` file with your credentials (AZURE_LANGUAGE_ENDPOINT and AZURE_LANGUAGE_KEY).

### Running the Chatbot

To start the server, run:
    ```
    npm start
    ```

### Usage
The chatbot is now equipped with Azure CLU for understanding and processing user queries. Ensure you have trained your CLU model with relevant data using the `/api/upload` endpoint for submitting training documents.

### Environment Variables
Ensure the following environment variables are set in your `.env` file for local development and in your production environment settings:
- `AZURE_LANGUAGE_ENDPOINT`: Your Azure Language Service endpoint URL.
- `AZURE_LANGUAGE_KEY`: Your Azure Language Service key.

### Contributing
We welcome contributions to this project. Please read our CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

### License
This project is licensed under the MIT License - see the LICENSE.md file for details.

### Acknowledgments
Special thanks to the team members and contributors who have invested their time and expertise into this project.

Powered by Azure Cognitive Services for advanced AI capabilities.

### Contact
For any inquiries or issues, please open an issue on this repository or contact us at support@email.com.

### Project Status
This project is currently in the development phase and actively seeking contributors and feedback.
