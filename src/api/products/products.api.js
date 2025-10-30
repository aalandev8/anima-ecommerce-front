import apiClient from '../client';

export const productsApi = {
  // Get all products for a specific store
  getProductsByStore: async (storeId) => {
    const response = await apiClient.get(`/products/store/${storeId}`);
    return response.data;
  },

  // Get single product by ID
  getProductById: async (productId) => {
    const response = await apiClient.get(`/products/${productId}`);
    return response.data;
  },

  // Get all products (if needed in the future)
  getAllProducts: async (params = {}) => {
    const response = await apiClient.get('/products', { params });
    return response.data;
  },

  // Search products (future implementation)
  searchProducts: async (query, filters = {}) => {
    const response = await apiClient.get('/products/search', {
      params: { q: query, ...filters },
    });
    return response.data;
  },

  // Get products by category (future implementation)
  getProductsByCategory: async (category) => {
    const response = await apiClient.get(`/products/category/${category}`);
    return response.data;
  },
};

export default productsApi;
