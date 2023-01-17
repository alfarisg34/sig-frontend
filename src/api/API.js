import axios from "axios";

const baseURL = "seni-tradisional-be.up.railway.app";

const API = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

export default API;
