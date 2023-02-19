import express from "express";
const router = express.Router();

// imports controlers
import {
  getDevits,
  postDevit,
  getDevit,
  updateDevit,
  deleteDevit,
  getMyDevits,
  likeDevit,
  redevitDevit,
  commentDevit,
  deleteComment,
  getTrends,
  searchDevits,
} from "../controllers/devit.controllers.js";

router.post("/post", postDevit); // to post a devit
router.get("/getall", getDevits); // to get all devits
router.get("/get/:id", getDevit); // to get a devit
router.patch("/update/:id", updateDevit); // to update a devit
router.delete("/delete/:id", deleteDevit); // to delete a devit
router.get("/getmydevits/:user_id", getMyDevits); // to get all devits of a specific user
router.patch("/like/:id", likeDevit); // to like a devit
router.patch("/redevit/:id", redevitDevit); // to redevit a devit
router.post("/comment/:id", commentDevit); // to comment on a devit
router.delete("/comment/:id/:comment_id", deleteComment); // to delete a comment on a devit
router.get("/trends",getTrends);
router.get("/search/:search",searchDevits);
export default router;
