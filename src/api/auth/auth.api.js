import apiClient from "../client";

export const authAPI = {
  login: async (credentials) => {
    const response = await apiClient.post(`/auth/login`, credentials);
    return response.data;
  },

  register: async (userData) => {
    console.log("API recibe:", userData);
    const response = await apiClient.post(`/auth/register`, userData);
    return response.data;
  },

  getCurrentUser: async (token) => {
    const response = await apiClient.get(`/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};
