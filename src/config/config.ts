import dotenv from "dotenv";

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || "3000";

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

const SECRETS = {
  token: TOKEN_SECRET,
};

const config = {
  server: SERVER,
  secrets: SECRETS,
};

export default config;
