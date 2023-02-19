import {} from "dotenv/config";
import express from "express";
import { connectDB } from "./db/connection.js";
import cors from "cors";
import fileupload from "express-fileupload";
// import routes
import devitRoutes from "./routes/devit.route.js";
import userRoutes from "./routes/user.route.js";
import apiRoutes from "./routes/api.route.js";
import imageRoutes from "./routes/image.route.js";

const app = express();

app.use(express.json()); // handle json data
app.use(cors()); //allow cors
connectDB(); // connect to db
app.use(fileupload()); // file upload
app.use("/uploads", express.static("uploads")); // for serving static files

// define routes
app.use("/api/devit", devitRoutes);
app.use("/api/user", userRoutes);
app.use("/api", apiRoutes);
app.use("/api/image", imageRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
