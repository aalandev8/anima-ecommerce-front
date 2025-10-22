// src/components/admin/products/ProductModal.jsx
import React, { useState, useEffect } from "react";

const ProductModal = ({ isOpen, onClose, onSave, product }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        category: product.category || "",
        stock: product.stock || "",
        image: product.image || "",
        description: product.description || "",
      });
    } else {
      setFormData({
        name: "",
        price: "",
        category: "",
        stock: "",
        image: "",
        description: "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>{product ? "Editar Producto" : "Nuevo Producto"}</h2>
        <form onSubmit={handleSubmit} className="product-form">
          <input
            type="text"
            name="name"
            placeholder="Nombre del producto"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Categoría"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="URL de imagen"
            value={formData.image}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Descripción"
            value={formData.description}
            onChange={handleChange}
          />

          <div className="modal-actions">
            <button type="submit">{product ? "Actualizar" : "Crear"}</button>
            <button
              type="button"
              className="btn-cancel"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
