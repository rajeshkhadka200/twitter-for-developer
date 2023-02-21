import Hackathon from "../models/hackathon.models.js";
import axios from "axios";
import Blog from "../models/blogs.model.js";

export const getHackathons = async (req, res) => {
  try {
    const response = await axios.get(
      `https://devpost.com/api/hackathons?page=1&status[]=open`
    );

    res.status(200).json(response.data.hackathons);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching hackathons");
  }
};

export const getBlogs = async (req, res) => {
  try {
    const response = await axios.get(
      `https://hashnode.com/api/feed/featured?page=1`
    );

    const filteredResponse = response.data.posts.filter(
      (post) => post.coverImage !== ""
    );

    res.status(200).json(filteredResponse);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching hackathons");
  }
};
