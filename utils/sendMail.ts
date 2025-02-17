import { google } from "googleapis"; 
import * as nodemailer from "nodemailer";


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REDIRECT_URI = process.env.REDIRECT_URI;;
const MY_EMAIL = process.env.MY_EMAIL;;
 

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

//YOU CAN PASS MORE ARGUMENTS TO THIS FUNCTION LIKE CC, TEMPLATES, ATTACHMENTS ETC. IM JUST KEEPING IT SIMPLE
const sendEmail = async (to) => {
    const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: MY_EMAIL,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: ACCESS_TOKEN,
        }
    });

    //EMAIL OPTIONS
    const from = `Accredian-Refrals <${MY_EMAIL}>`;
    const subject = "Refral";
    const html = `
            <p>Hey ${to},</p>
            <p>You are being refered by Someone.</p>
            <p>Thank you</p>
            `;  
    return new Promise((resolve, reject) => {
        transport.sendMail({ from, subject, to, html }, (err, info) => {
            if (err) reject(err);
            resolve(info);
        });
    });
};


export default sendEmail;  