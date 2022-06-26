import axios from "axios";

const baseURL = "http://localhost:8000/api/";

const API = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

export default API;
