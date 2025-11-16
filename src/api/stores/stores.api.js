import apiClient from "../client";

export const storesApi = {
  getAllStores: async (category = null) => {
    const params = category ? { category } : {};
    const response = await apiClient.get("/stores", { params });
    return response.data;
  },

  getStoreById: async (storeId) => {
    const response = await apiClient.get(`/stores/${storeId}`);
    return response.data;
  },

  getFeaturedStores: async () => {
    const response = await apiClient.get("/stores/featured");
    return response.data;
  },

  getStoresByDietaryCategory: async (dietaryCategory) => {
    const response = await apiClient.get("/stores", {
      params: { category: dietaryCategory },
    });
    return response.data;
  },

  searchStores: async (query) => {
    const response = await apiClient.get("/stores/search", {
      params: { q: query },
    });
    return response.data;
  },
};

export default storesApi;
