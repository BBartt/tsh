import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL ?? "";
const token = process.env.REACT_APP_API_KEY ?? "";

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
