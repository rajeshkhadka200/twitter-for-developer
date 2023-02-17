import express from "express";
const router = express.Router();

// import controlers
import {
  auth,
  updateProfile,
  getMyprofile,
} from "../controllers/user.controllers.js";

router.post("/auth", auth); // auth is the route
router.patch("/:userId", updateProfile); // auth route
router.get("/:userId", getMyprofile); // get user data

export default router;
