import axios from "axios";
import { store } from "../redux/store";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    if (error.response?.status === 500) {
      console.error("Error del servidor:", error);
    }

    return Promise.reject(error);
  }
);

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

export const authService = {
  login: async (email, password) => {
    try {
      const { data } = await api.post("/tokens", { email, password });
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Error al iniciar sesión";
    }
  },

  register: async (userData) => {
    try {
      const { data } = await api.post("/users", userData);
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Error al registrarse";
    }
  },

  validateToken: async () => {
    try {
      const { data } = await api.get("/users/me");
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Token inválido";
    }
  },

  requestPasswordReset: async (email) => {
    try {
      const { data } = await api.post("/password-reset/request", { email });
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Error al solicitar reseteo";
    }
  },

  resetPassword: async (token, newPassword) => {
    try {
      const { data } = await api.post("/password-reset/confirm", {
        token,
        password: newPassword,
      });
      return data;
    } catch (error) {
      throw error.response?.data?.message || "Error al resetear contraseña";
    }
  },

  logout: async () => {
    try {
      await api.post("/logout");
    } catch (error) {
      console.error("Error al hacer logout:", error);
    }
  },
};

export default api;
