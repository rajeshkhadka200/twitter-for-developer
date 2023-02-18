import {} from "dotenv/config";
import express from "express";
import { connectDB } from "./db/connection.js";
import cors from "cors";
// import routes
import devitRoutes from "./routes/devit.route.js";
import userRoutes from "./routes/user.route.js";
import apiRoutes from "./routes/api.route.js";

const app = express();

// middleware
app.use(express.json());
//allow cors
app.use(cors());

// connect to db
connectDB();

// define routes
app.use("/api/devit", devitRoutes);
app.use("/api/user", userRoutes);
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
