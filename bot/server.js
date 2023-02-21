import {} from "dotenv/config";
import connectDB from "./config/db.js";
import scrapper from "./utils/scrapper.js";

//Establishing connection to MongoDB
connectDB();

//Scrapper onload
scrapper();
