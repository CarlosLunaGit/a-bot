const { ActivityHandler } = require('botbuilder');
const { TextAnalysisClient, AzureKeyCredential } = require('@azure/ai-language-text');

// Set up Azure Language Service credentials
const languageEndpoint = process.env.AZURE_LANGUAGE_ENDPOINT;
const languageKey = process.env.AZURE_LANGUAGE_KEY;

const client = new TextAnalysisClient(languageEndpoint, new AzureKeyCredential(languageKey));

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        this.onMessage(async (context, next) => {
            const userText = context.activity.text;
            const prediction = await this.getPrediction(userText);

            // Use CLU prediction to determine how to respond
            // Adapt this example based on your CLU model and needs
            const topIntent = prediction.topIntent; // Adjust this line based on how you process the CLU result
            console.log(topIntent);
            if (topIntent === "YourIntentName") {
                await context.sendActivity(`This is a response based on the intent detected.`);
            } else {
                await context.sendActivity(`I'm not sure how to respond to that.`);
            }

            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            for (let member of membersAdded) {
                if (member.id !== context.activity.recipient.id) {
                    await context.sendActivity('Welcome to the bot!');
                }
            }
            await next();
        });
    }

    async getPrediction(query) {
        // Adjust this method to use CLU's prediction capabilities
        // The following is a placeholder and needs to be replaced with actual CLU logic
        const documents = [{ id: "1", language: "en", text: query }];
        const results = await client.analyze("SentimentAnalysis", documents, {includeOpinionMining: true});
        const topIntent = results[0]; // Simplified, adjust based on actual CLU response structure

        return { topIntent }; // Simplify the return value for this example
    }
}

module.exports.EchoBot = EchoBot;
