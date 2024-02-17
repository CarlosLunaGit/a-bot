const restify = require('restify');
const { BotFrameworkAdapter } = require('botbuilder');
const { EchoBot } = require('./bot/index');

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log(`\n${server.name} listening to ${server.url}`);
});

const adapter = new BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

const myBot = new EchoBot();

server.post('/api/messages', (req, res, next) => {
    adapter.processActivity(req, res, async (context) => {
        await myBot.run(context);
    });
});
