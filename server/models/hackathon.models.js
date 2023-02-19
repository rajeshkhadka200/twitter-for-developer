import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
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
  prize:{
    type:String
  },
  createdAt: {
    type: String,
  },
});

const Hackathon = mongoose.model("Hackathon", schema);
export default Hackathon;
