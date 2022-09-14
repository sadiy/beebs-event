import axios from "axios";

const api = axios.create({
  baseURL: "https://opendata.paris.fr/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;