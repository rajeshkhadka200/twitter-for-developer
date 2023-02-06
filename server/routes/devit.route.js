import express from "express";
const router = express.Router();

// imports controlers
import { postDevit } from "../controllers/devit.controllers";

router.post("/post", postDevit); // to post a devit
