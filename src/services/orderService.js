import { getAuthHeaders } from "../authHeader";

const API_URL = `${import.meta.env.VITE_API_URL}/admin/orders`;

export const orderService = {
  async getAll() {
    const res = await fetch(API_URL, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error("Error al obtener órdenes");
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error("Error al obtener la orden");
    return res.json();
  },

  async updateStatus(id, status) {
    const res = await fetch(`${API_URL}/${id}/status`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error("Error al actualizar estado de la orden");
    return res.json();
  },

  async remove(id) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    if (!res.ok) throw new Error("Error al eliminar la orden");
    return res.json();
  },
};
