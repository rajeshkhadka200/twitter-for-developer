import express from "express";
import { getBlogs, getHackathons } from "../controllers/bots.controllers.js";
const router = express.Router();

router.get("/hacks/all", getHackathons);
router.get("/blogs/all", getBlogs);

export default router;
