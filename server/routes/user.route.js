import express from "express";
const router = express.Router();

// import controlers
import {
  auth,
  updateProfile,
  getMyprofile,
  getAllUsers,
} from "../controllers/user.controllers.js";

router.post("/auth", auth); // auth is the route
router.patch("/:userId", updateProfile); // auth route
router.get("/profile/:userId", getMyprofile); // get user data
router.get("/getall", getAllUsers); //get all users

export default router;
