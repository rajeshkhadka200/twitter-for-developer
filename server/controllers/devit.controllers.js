import Devit from "../models/devit.models.js";
export const postDevit = async (req, res) => {
  try {
    const {
      userid,
      username,
      name,
      content,
      image,
      status,
      createdAt,
      avatar,
      code,
      verified,
    } = req.body;
    const newDevit = new Devit({
      userid,
      username,
      name,
      content,
      image,
      status,
      createdAt,
      avatar,
      code,
      verified,
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
    const devits = await Devit.find().sort({ _id: -1 });
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
  const { user_id } = req.params;
  const devits = await Devit.find({ userid: user_id });
  //Now fetch the redevits of the user by userid
  const redevits = await Devit.find({
    redevits: { $elemMatch: { userid: user_id } },
  });
  const myDevits = [...devits, ...redevits];
  const allMyDevits = myDevits.filter(
    (devit, index, self) =>
      index ===
      self.findIndex(
        (t) =>
          t._id.toString() === devit._id.toString() &&
          t.userid.toString() === devit.userid.toString()
      )
  );
  if (!devits)
    return res.status(404).json({ msg: "You don't have any devits." });
  res
    .status(200)
    .json({ error: false, msg: "Devits fetched successfully", allMyDevits });
};

export const likeDevit = async (req, res) => {
  try {
    const devit = await Devit.findById(req.params.id);
    if (!devit)
      return res.status(404).json({ error: true, msg: "Devit not found" });
    //check if the user already liked the devit
    if (
      devit.likes.filter((like) => like.userid === req.body.userid).length > 0
    ) {
      //remove the like
      const removeIndex = devit.likes
        .map((like) => like.userid)
        .indexOf(req.body.userid);
      devit.likes.splice(removeIndex, 1);
      await devit.save();
      const count = devit?.likes?.length;
      return res
        .status(200)
        .json({ error: false, msg: "Devit unliked successfully", count });
    }
    devit.likes.unshift({ userid: req.body.userid });
    await devit.save();
    const count = devit?.likes?.length;
    res
      .status(201)
      .json({ error: false, msg: "Devit liked successfully", count });
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
      devit.redevits.filter((redevit) => redevit.userid === req.body.userid)
        .length > 0
    ) {
      //remove the redevit
      const removeIndex = devit.redevits
        .map((redevit) => redevit.userid)
        .indexOf(req.body.userid);
      devit.redevits.splice(removeIndex, 1);
      await devit.save();
      const count = devit?.redevits?.length;

      return res
        .status(200)
        .json({ error: true, msg: "Devit unredevited successfully", count });
    }
    devit.redevits.unshift({
      userid: req.body.userid,
      username: req.body.username,
    });
    await devit.save();
    const count = devit?.redevits?.length;
    res
      .status(201)
      .json({ error: false, msg: "Devit redevited successfully", count });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};

export const commentDevit = async (req, res) => {
  try {
    const devit = await Devit.findById(req.params.id);
    if (!devit)
      return res.status(404).json({ error: true, msg: "Devit not found" });

    const { userid, username, name, content, timestamp, avatar, actual_date } =
      req.body;
    const newComment = {
      userid,
      username,
      name,
      content,
      timestamp,
      avatar,
      actual_date,
    };
    devit.comments.unshift(newComment);
    await devit.save();
    res
      .status(200)
      .json({ error: false, msg: `${name} replied to this devit.` });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const devit = await Devit.findById(req.params.id);
    if (!devit)
      return res.status(404).json({ error: true, msg: "Devit not found" });
    const comment = devit.comments.find(
      (comment) => comment._id.toString() === req.params.comment_id
    );
    console.log(comment);
    if (!comment)
      return res.status(404).json({ error: true, msg: "Comment not found" });
    const removeIndex = devit.comments
      .map((comment) => comment._id.toString())
      .indexOf(req.params.comment_id);
    devit.comments.splice(removeIndex, 1);
    await devit.save();
    res.status(200).json({ error: false, msg: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};

export const getTrends = async (req, res) => {
  try {
    const devits = await Devit.find();
    // const trends = [
    //   "#dev",
    //   "#dev",
    //   "#dev",
    //   "#opensource",
    //   "#opensource",
    //   "#pro",
    //   "#devhub",
    //   "#pro",
    //   "#devhub",
    //   "#hello",
    //   "#hello",
    //   "#hi",
    // ];
    const trends = [];
    devits.forEach((devit) => {
      const { content } = devit;
      const words = content.split(" ");
      words.forEach((word) => {
        if (word.startsWith("#")) {
          const trend = word.toLowerCase();
          if (trends.includes(trend)) return;
          trends.push(trend);
        }
      });
    });
    const topTrends = [];
    //get the top 5 different trends with their count in array of objects and remove the repeated trends
    trends.forEach((trend) => {
      const index = topTrends.findIndex((t) => t.trend === trend);
      if (index === -1) {
        topTrends.push({ trend, count: 1 });
      } else {
        topTrends[index].count++;
      }
    });
    //sort the array of objects by count
    topTrends.sort((a, b) => b.count - a.count);
    //get the top 5 trends
    topTrends.splice(5);

    if (topTrends.length === 0)
      return res
        .status(200)
        .json({ error: false, msg: "No trends found", topTrends });
    res
      .status(200)
      .json({ error: false, msg: "Trends fetched successfully", topTrends });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};

export const searchDevits = async (req, res) => {
  try {
    const devits = await Devit.find({
      $or: [
        { content: { $regex: req.params.search, $options: "i" } },
        { username: { $regex: req.params.search, $options: "i" } },
        { name: { $regex: req.params.search, $options: "i" } },
        { createdAt: { $regex: req.params.search, $options: "i" } },
      ],
    });
    if (devits.length === 0)
      return res
        .status(200)
        .json({ error: false, msg: "No devits found", devits });
    res
      .status(200)
      .json({ error: false, msg: "Devits fetched successfully", devits });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};
