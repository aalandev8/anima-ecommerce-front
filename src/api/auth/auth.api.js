import apiClient from "../client";

export const authAPI = {
  login: async (credentials) => {
    const response = await apiClient.post(`/auth/login`, credentials);
    return response.data.data;
  },

  register: async (userData) => {
    const response = await apiClient.post(`/auth/register`, userData);
    return response.data.data;
  },

  getCurrentUser: async (token) => {
    const response = await apiClient.get(`/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  },
};
