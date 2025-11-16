import apiClient from "../client";

export const productsApi = {
  getProductsByStore: async (storeId) => {
    const response = await apiClient.get(`/stores/${storeId}/products`);
    return response.data;
  },

  getProductById: async (productId) => {
    const response = await apiClient.get(`/products/${productId}`);
    return response.data;
  },

  getAllProducts: async (params = {}) => {
    const response = await apiClient.get("/products", { params });
    return response.data;
  },

  searchProducts: async (query, filters = {}) => {
    const response = await apiClient.get("/products/search", {
      params: { q: query, ...filters },
    });
    return response.data;
  },

  getProductsByCategory: async (category) => {
    const response = await apiClient.get(`/products/category/${category}`);
    return response.data;
  },
};

export default productsApi;
