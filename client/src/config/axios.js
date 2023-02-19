// create axios instance
import axios from "axios";
const apiurl = import.meta.env.VITE_API_URL;
const provider = axios.create({
  baseURL: apiurl,
});

export default provider;
