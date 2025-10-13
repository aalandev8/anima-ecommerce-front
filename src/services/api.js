
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api"; 


const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const productService = {
  getAll: async () => {
    const { data } = await api.get("/products");
    return data;
  },
  getById: async (id) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
  },
  getFeatured: async () => {
    const { data } = await api.get("/products/featured");
    return data;
  },
};

export default api;
