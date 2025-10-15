import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products = [], onEdit, onDelete }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={() => onEdit(product)}
          onDelete={() => onDelete(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
