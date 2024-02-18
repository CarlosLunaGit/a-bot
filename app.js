require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { BotFrameworkAdapter } = require('botbuilder');
const { EchoBot } = require('./bot/index');
const { uploadFileToBlobStorage } = require('./bot/fileStorageHandler'); // Ensure this is correctly implemented
const upload = multer({ dest: 'uploads/' });



const app = express();
const port = process.env.PORT || 3978;

const adapter = new BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

const myBot = new EchoBot();

// Middleware to parse JSON bodies
app.use(express.json());

// Bot endpoint
app.post('/api/messages', (req, res) => {
    adapter.processActivity(req, res, async (context) => {
        await myBot.run(context);
    });
});

// File upload endpoint
app.post('/api/upload', upload.array('files'), async (req, res) => {
    //console.log(req.body); // Check if there's any useful info in the body
    //console.log(req.files); // Check what this logs

    if (!req.files || req.files.length === 0) {
        return res.status(400).send({ message: 'No files uploaded.' });
    }

    try {
        for (const file of req.files) {
            console.log(file.originalname);
            await uploadFileToBlobStorage(file.path, file.originalname);
        }

        res.status(200).send({ message: 'Files uploaded successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to upload files.' });
    }
});

app.listen(port, () => {
    console.log(`Express server listening to http://localhost:${port}`);
});
