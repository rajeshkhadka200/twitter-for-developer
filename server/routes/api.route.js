import express from "express";
import { ApiCheck } from "../middlewares/ApiCheck.js";
const router = express.Router();

// import controlers
import {
  createApiKey,
  getDevits,
  getDevit,
  deleteDevit,
  updateDevit,
} from "../controllers/api.controllers.js";

router.post("/create", createApiKey);
router.get("/:apiKey/:username/getall", ApiCheck, getDevits);
router.get("/:apiKey/:username/get/:id", ApiCheck, getDevit);
router.delete("/:apiKey/:username/delete/:id", ApiCheck, deleteDevit);
router.patch("/:apiKey/:username/update/:id", ApiCheck, updateDevit);

export default router;
