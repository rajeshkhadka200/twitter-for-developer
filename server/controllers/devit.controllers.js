import Devit from "../models/devit.models.js";
export const postDevit = async (req, res) => {
  try {
    const {
      user_id,
      user_name,
      name,
      content,
      image,
      code,
      status,
      createdAt,
    } = req.body;
    const newDevit = new Devit({
      user_id,
      user_name,
      name,
      content,
      image,
      code,
      status,
      createdAt,
    });
    const devit = await newDevit.save();
    res
      .status(201)
      .json({ error: false, msg: "Devit posted successfully", devit });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: false, msg: "Internal Server Error" });
  }
};

export const getDevits = async (req, res) => {
  try {
    const devits = await Devit.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ error: false, msg: "Devits fetched successfully", devits });
    if (!devits)
      return res.status(404).json({ error: true, msg: "Devits not found" });
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
};
export const deleteDevit = async (req, res) => {
  try {
    const devit = await Devit.findById(req.params.id);
    if (!devit)
      return res.status(404).json({ error: true, msg: "Devit not found" });
    await devit.delete();
    res.status(200).json({ error: false, msg: "Devit deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};
export const getMyDevits = async (req, res) => {
  try {
    //get all devits of a specific user by user_id and redevit's user_id
    const devits = await Devit.find({
      $or: [
        { user_id: req.params.user_id },
        { "redevit.user_id": req.params.user_id },
      ],
    }).sort({ createdAt: -1 });
    res
      .status(200)
      .json({ error: false, msg: "Devits fetched successfully", devits });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};

export const likeDevit = async (req, res) => {
  try {
    const devit = await Devit.findById(req.params.id);
    if (!devit)
      return res.status(404).json({ error: true, msg: "Devit not found" });
    //check if the user already liked the devit
    if (
      devit.likes.filter((like) => like.user_id === req.body.user_id).length > 0
    ) {
      //remove the like
      const removeIndex = devit.likes
        .map((like) => like.user_id)
        .indexOf(req.body.user_id);
      devit.likes.splice(removeIndex, 1);
      await devit.save();
      return res
        .status(200)
        .json({ error: false, msg: "Devit unliked successfully" });
    }
    devit.likes.unshift({ user_id: req.body.user_id });
    await devit.save();
    res.status(200).json({ error: false, msg: "Devit liked successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};

export const redevitDevit = async (req, res) => {
  try {
    const devit = await Devit.findById(req.params.id);
    if (!devit)
      return res.status(404).json({ error: true, msg: "Devit not found" });
    //check if the user already redevited the devit
    if (
      devit.redevits.filter((redevit) => redevit.user_id === req.body.user_id)
        .length > 0
    ) {
      //remove the redevit
      const removeIndex = devit.redevits
        .map((redevit) => redevit.user_id)
        .indexOf(req.body.user_id);
      devit.redevits.splice(removeIndex, 1);
      await devit.save();
      return res
        .status(400)
        .json({ error: true, msg: "Devit unredevited successfully" });
    }
    devit.redevits.unshift({ user_id: req.body.user_id });
    await devit.save();
    res.status(200).json({ error: false, msg: "Devit redevited successfully" });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};

export const commentDevit = async (req, res) => {
  try {
    const devit = await Devit.findById(req.params.id);
    if (!devit)
      return res.status(404).json({ error: true, msg: "Devit not found" });
    const { user_id, user_name, name, content, createdAt } = req.body;
    const newComment = {
      user_id,
      user_name,
      name,
      content,
      createdAt,
    };
    devit.comments.unshift(newComment);
    await devit.save();
    res.status(200).json({ error: false, msg: "Devit commented successfully" });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};
