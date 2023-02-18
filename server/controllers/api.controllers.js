//import user and devit models
import User from "../models/user.models.js";
import Devit from "../models/devit.models.js";
import { uuid } from "uuidv4";

export const createApiKey = async (req, res) => {
  try {
    const { userid } = req.body;
    const apiKey = uuid();
    //find user by id
    const user = await User.findById(userid);
    console.log(user);
    if (!user) {
      return res.status(404).json({ error: true, msg: "User not found" });
    }
    //update the user with the new api key
    user.apiKey = apiKey;
    await user.save();
    res
      .status(200)
      .json({ error: false, msg: "Api key created successfully", apiKey });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};

export const getDevits = async (req, res) => {
  try {
    //get the all devits from the database using username
    const { username } = req.params;
    const devits = await Devit.find({ username: username });
    if (!devits)
      return res.status(404).json({ error: true, msg: "Devits not found" });
    res
      .status(200)
      .json({ error: false, msg: "Devits fetched successfully", devits });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};

export const getDevit = async (req, res) => {
  try {
    const devit = await Devit.findById(req.params.id);
    if (!devit)
      return res.status(404).json({ error: true, msg: "Devit not found" });
    res
      .status(200)
      .json({ error: false, msg: "Devit fetched successfully", devit });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};

export const deleteDevit = async (req, res) => {
  try {
    const devit = await Devit.findById(req.params.id);
    if (!devit)
      return res.status(404).json({ error: true, msg: "Devit not found" });
    await devit.remove();
    res
      .status(200)
      .json({ error: false, msg: "Devit deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
}

export const updateDevit = async (req, res) => {
  try {
    const devit = await Devit.findById(req.params.id);
    if (!devit)
      return res.status(404).json({ error: true, msg: "Devit not found" });
    const { content } = req.body;
    if (content) devit.content = content;
    await devit.save();
    res
      .status(200)
      .json({ error: false, msg: "Devit updated successfully", devit });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
}
