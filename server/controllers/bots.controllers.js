import Hackathon from "../models/hackathon.models.js"


export const getHackathons = async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.status(200).json({
      error: false,
      msg: "Hackathons retrieved successfully",
      hackathons,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
