import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://torii-gaate-backend.onrender.com/apigit",
});
