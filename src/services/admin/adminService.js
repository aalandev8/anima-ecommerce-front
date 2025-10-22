import { getAuthHeaders } from "../authHeader";

const API_URL = `${import.meta.env.VITE_API_URL}/admin/users`;

export const adminService = {
  async getAll() {
    const res = await fetch(API_URL, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error("Error al obtener administradores");
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error("Error al obtener el administrador");
    return res.json();
  },

  async create(adminData) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(adminData),
    });
    if (!res.ok) throw new Error("Error al crear administrador");
    return res.json();
  },

  async update(id, adminData) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(adminData),
    });
    if (!res.ok) throw new Error("Error al actualizar administrador");
    return res.json();
  },

  async remove(id) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    if (!res.ok) throw new Error("Error al eliminar administrador");
    return res.json();
  },
};
