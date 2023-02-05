import {} from "dotenv/config";
import express from "express";
import { connectDB } from "./db/connection.js";
const app = express();

// middleware
app.use(express.json());

// connect to db
connectDB();

// define routes

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
