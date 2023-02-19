import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  time_left: {
    type: String,
  },
  date: {
    type: String,
  },
  status: {
    type: String,
  },
  source: {
    type: String,
  },
  prize: {
    type: String,
  },
  url: {
    type: String,
  },
  participants: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Hackathon = mongoose.model("Hackathon", schema);
export default Hackathon;
