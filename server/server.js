import {} from "dotenv/config";
import express from "express";
import { connectDB } from "./db/connection.js";

// import routes
import devitRoutes from "./routes/devit.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();

// middleware
app.use(express.json());

// connect to db
connectDB();

// define routes
app.use("/api/devit", devitRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
