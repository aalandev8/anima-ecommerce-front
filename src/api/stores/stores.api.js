import apiClient from '../client';

export const storesApi = {
  // Get all stores with optional category filter
  getAllStores: async (category = null) => {
    const params = category ? { category } : {};
    const response = await apiClient.get('/stores', { params });
    return response.data;
  },

  // Get single store by ID
  getStoreById: async (storeId) => {
    const response = await apiClient.get(`/stores/${storeId}`);
    return response.data;
  },

  // Get featured stores
  getFeaturedStores: async () => {
    const response = await apiClient.get('/stores/featured');
    return response.data;
  },

  // Get stores by dietary category
  getStoresByDietaryCategory: async (dietaryCategory) => {
    const response = await apiClient.get('/stores', {
      params: { category: dietaryCategory },
    });
    return response.data;
  },

  // Search stores (future implementation)
  searchStores: async (query) => {
    const response = await apiClient.get('/stores/search', {
      params: { q: query },
    });
    return response.data;
  },
};

export default storesApi;
