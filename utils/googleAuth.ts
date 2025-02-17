import { google } from "googleapis";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];
const TOKEN_PATH = path.join(__dirname, "token.json");

// Load client secrets
const credentialsPath = path.join(__dirname, "credentials.json");
const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf-8"));

const { client_secret, client_id, redirect_uris } = credentials.installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// Generate Auth URL
export function getAuthURL(): string {
    return oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
    });
}

// Exchange authorization code for tokens
export async function getAccessToken(code: string) {
    const { tokens } = await oAuth2Client.getToken(code);
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
    console.log("Token stored to", TOKEN_PATH);
}

// Load token from file
export function authorize(): any {
    if (fs.existsSync(TOKEN_PATH)) {
        const token = JSON.parse(fs.readFileSync(TOKEN_PATH, "utf-8"));
        oAuth2Client.setCredentials(token);
    } else {
        console.log("Authorize this app by visiting:", getAuthURL());
    }
    return oAuth2Client;
}
