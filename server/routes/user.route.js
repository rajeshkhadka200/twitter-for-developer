import express from "express";
const router = express.Router();

// import controlers
import { login, register } from "../controllers/user.controllers";

router.post("/register", register); // to post a devit
router.post("/login", login); // to post a devit

export default router;
