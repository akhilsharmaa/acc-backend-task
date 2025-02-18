import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';  // Import CORS

const app = express();
dotenv.config();

app.use(cors({
    origin: '*',  
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send({
        "message": "Welcome to Accredian Assignment Backend"
    });
});

import referNew from './routes/refer/new';
app.use('/refer', referNew);  // No need for array notation []

// Start the server
app.listen(PORT, () => {
    console.log(`[🎄] Server is running on http://localhost:${PORT}`);
});
