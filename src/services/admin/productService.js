// src/services/admin/productService.js
import { getAuthHeaders } from "../authHeader";

const API_URL = `${import.meta.env.VITE_API_URL}/admin/products`;

export const getProducts = async () => {
  const res = await fetch(API_URL, { headers: getAuthHeaders() });
  return res.json();
};

export const createProduct = async (product) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { ...getAuthHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const updateProduct = async (id, product) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { ...getAuthHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return res.json();
};
