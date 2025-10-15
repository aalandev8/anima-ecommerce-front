import React, { useState, useEffect } from 'react';
import './ProductForm.css';

const ProductForm = ({ product, onSave, onCancel }) => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (product) setForm(product);
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Precio" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Categoría" required />
      <input name="stock" type="number" value={form.stock} onChange={handleChange} placeholder="Stock" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Descripción" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="URL de imagen" />

      <div className="flex gap-2">
        <button type="submit">Guardar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
};

export default ProductForm;
