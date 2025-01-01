import axios from "axios";

export const api = axios.create({
  //membuat instance axios
  baseURL: "http://localhost:2000",
});

// api.get("/products");
