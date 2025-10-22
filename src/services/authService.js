// src/services/authService.js

const API_URL = `${import.meta.env.VITE_API_URL}/admin/auth`;

export const authService = {
  /**
   * Inicia sesión de administrador
   * @param {string} email
   * @param {string} password
   */
  async login(email, password) {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.message || "Error al iniciar sesión");
    }

    const data = await res.json();
    if (data.token) {
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminUser", JSON.stringify(data.admin)); // guarda info del usuario
    }
    return data;
  },

  /**
   * Cierra sesión del administrador
   */
  logout() {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
  },

  /**
   * Obtiene los datos del admin actualmente autenticado
   */
  getCurrentAdmin() {
    const admin = localStorage.getItem("adminUser");
    return admin ? JSON.parse(admin) : null;
  },

  /**
   * Verifica si hay un token activo (sesión iniciada)
   */
  isAuthenticated() {
    return !!localStorage.getItem("adminToken");
  },
};
