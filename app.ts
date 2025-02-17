import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv'; 
import listEndpoints from 'express-list-endpoints';
import bodyParser from 'body-parser'

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: "100mb"}))
app.use(bodyParser.urlencoded({limit:"50mb", extended: true}))

const PORT = process.env.PORT || 3000; 

app.get('/', (req, res) => {
    res.send({
        "message": "welcome to accredian assignment backend"
    })
})

import referNew from './routes/refer/new';
app.use('/refer', [referNew]);

// Start the server
app.listen(PORT, () => {
    console.log(`[🎄] Server is running on http://localhost:${PORT}`);
});