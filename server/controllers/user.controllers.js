import User from "../models/user.models.js";
export const auth = async (req, res) => {
  const { email, firstname, lastname, username, bio, avatar } = req.body;

  const isUser = await User.findOne({ email }).exec();

  if (isUser) {
    return res.status(200).json({
      username: isUser.username,
      message: "Login successfully",
    });
  }
  const isUserName = await User.findOne({ username }).exec();
  if (isUserName) {
    return res.status(400).json({
      message: "Username should be unique",
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
        error: "Error saving user in database. Try signup again",
      });
    }

    res.status(201).json({
      userId: user._id,
      message: "Signup success! Please signin.",
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
      message: "Username should be unique",
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
          error: "Error updating user profile",
        });
      }
      res.status(201).json({
        message: "Update profile success",
      });
    }
  );
};
