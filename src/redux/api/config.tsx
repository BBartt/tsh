import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_API_URL ?? "https://join-tsh-api-staging.herokuapp.com";

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
