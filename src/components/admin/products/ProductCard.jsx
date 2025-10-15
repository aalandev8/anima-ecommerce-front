import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="product-card">
      <img src={product.image || '/placeholder.jpg'} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <div className="flex gap-2 mt-2">
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductCard;
