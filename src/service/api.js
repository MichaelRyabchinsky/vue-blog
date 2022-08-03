import axios from "axios";

const baseUrl = process.env.VUE_APP_API;

const api = axios.create({
  baseUrl,
  headers: {
    accept: "application/json",
  },
});

export default api;
