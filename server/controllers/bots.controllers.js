import Hackathon from "../models/hackathon.models.js";
import axios from "axios";
import Blog from "../models/blogs.model.js";

export const getHackathons = async (req, res) => {
  const page = 1 - 6; // default to page 1
  try {
    const response = await axios.get(
      `https://devpost.com/api/hackathons?page=1-6&status[]=open`
    );
    console.log(response.data.hackathons);
    res.status(200).json(response.data.hackathons);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching hackathons");
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      error: false,
      msg: "Blogs retrieved successfully",
      blogs,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
