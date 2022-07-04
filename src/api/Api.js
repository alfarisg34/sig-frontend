import axios from "axios";

const baseURL = "https://seni-tradisional-be.herokuapp.com/api/";

const API = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

export default API;
