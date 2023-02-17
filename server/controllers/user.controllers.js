import User from "../models/user.models.js";
export const auth = async (req, res) => {
  const { email, firstname, lastname, username, bio, avatar } = req.body;

  const isUser = await User.findOne({ email }).exec();

  if (isUser) {
    return res.status(200).json({
      username: isUser.username,
      message: "User Login successfully.",
    });
  }
  const isUserName = await User.findOne({ username }).exec();
  if (isUserName) {
    return res.status(400).json({
      message: "Username already exist.",
    });
  }

  const newUser = new User({
    email,
    firstname,
    lastname,
    avatar,
  });

  // Save user to database
  newUser.save((err, user) => {
    if (err) {
      console.log("SAVE USER IN DATABASE ERROR", err);
      return res.status(400).json({
        error: "Trouble while registering user. Try signup again",
      });
    }

    res.status(201).json({
      userId: user._id,
      message: "User registered successfully",
    });
  });
};

// update user profile
export const updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { firstname, lastname, username, bio } = req.body;

  const isUser = await User.findById(userId).exec();
  if (!isUser) {
    return res.status(400).json({
      message: "User not found, please try again",
    });
  }

  const isUserName = await User.findOne({ username }).exec();
  if (isUserName) {
    return res.status(400).json({
      message: "Username already exist.",
    });
  }

  // update user profile
  User.findByIdAndUpdate(
    userId,
    { firstname, lastname, username, bio },
    { new: true },
    (err, user) => {
      if (err) {
        console.log("UPDATE USER PROFILE ERROR", err);
        return res.status(400).json({
          error: "Trouble while updating your profile. Try again later",
        });
      }
      res.status(201).json({
        message: "Profile updated successfully.",
      });
    }
  );
};

// get user
export const getMyprofile = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId).exec();
  if (user) {
    return res.status(200).json({
      user,
    });
  }
};
