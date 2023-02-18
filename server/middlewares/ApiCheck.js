import User from "../models/user.models.js";
export const ApiCheck = async (req, res, next) => {
  const { apiKey, username } = req.params;
  //find the user by username

  const user = await User.findOne({ username: username });
  if (!user)
    return res.status(400).json({ error: true, msg: "User not found" });
  if (user.apiKey === apiKey) {
    return next();
  }
  res.status(400).json({ error: true, msg: "Invalid Api Key" });
};
