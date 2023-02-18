// create axios instance
import axios from "axios";
const provider = axios.create({
  baseURL: "http://localhost:8000/api",
});

export default provider;
