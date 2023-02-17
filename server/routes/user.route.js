import express from "express";
const router = express.Router();

// import controlers
import { auth, updateProfile,getMyprofile } from "../controllers/user.controllers.js";

router.post("/auth", auth); // auth is the route
router.patch("/:userId", updateProfile); // auth is the route
router.get("/:userId", getMyprofile); // auth is the route

export default router;
