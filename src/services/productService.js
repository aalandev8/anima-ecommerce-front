import { getAuthHeaders } from "../authHeader";

const API_URL = `${import.meta.env.VITE_API_URL}/admin/products`;

export const productService = {
  async getAll() {
    const res = await fetch(API_URL, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error("Error al obtener productos");
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error("Error al obtener el producto");
    return res.json();
  },

  async create(productData) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(productData),
    });
    if (!res.ok) throw new Error("Error al crear producto");
    return res.json();
  },

  async update(id, productData) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(productData),
    });
    if (!res.ok) throw new Error("Error al actualizar producto");
    return res.json();
  },

  async remove(id) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    if (!res.ok) throw new Error("Error al eliminar producto");
    return res.json();
  },
};
