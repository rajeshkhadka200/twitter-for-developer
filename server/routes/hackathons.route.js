import express from "express";
import { getHackathons } from "../controllers/bots.controllers.js";
const router = express.Router();

router.get("/getall", getHackathons);

export default router;
