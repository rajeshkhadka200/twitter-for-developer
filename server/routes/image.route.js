import express from "express";
const router = express.Router();

// import controllers
import { postImage } from "../controllers/image.controller.js";

router.post("/postimage", postImage);

export default router;
