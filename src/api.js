import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:5000",
  // withCredentials: true,
});

export default api;
