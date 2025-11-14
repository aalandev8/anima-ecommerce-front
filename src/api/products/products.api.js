import apiClient from '../client';

export const productsApi = {

  // ✅ Obtener productos por tienda (RUTA NUEVA: /stores/:storeId/products)
  getProductsByStore: async (storeId) => {
    const response = await apiClient.get(`/stores/${storeId}/products`);
    return response.data;
  },

  // Obtener producto por ID
  getProductById: async (productId) => {
    const response = await apiClient.get(`/products/${productId}`);
    return response.data;
  },

  // Obtener todos los productos (si algún día se usa)
  getAllProducts: async (params = {}) => {
    const response = await apiClient.get('/products', { params });
    return response.data;
  },

  // Buscar productos (futuro)
  searchProducts: async (query, filters = {}) => {
    const response = await apiClient.get('/products/search', {
      params: { q: query, ...filters },
    });
    return response.data;
  },

  // Obtener productos por categoría (futuro)
  getProductsByCategory: async (category) => {
    const response = await apiClient.get(`/products/category/${category}`);
    return response.data;
  },
};

export default productsApi;
