import mongoose from "mongoose";

const schema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    // ongoing, finished, cancelled or upcoming
    type: String,
    required: true,
  },
  createdAt: {
    required: true,
    type: String,
  },
});

const Hackathon = mongoose.model("Hackathon", schema);
export default Hackathon;