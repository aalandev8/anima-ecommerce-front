// src/pages/admin/Products.jsx
import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/admin/layout/AdminLayout";
import ProductModal from "../../components/admin/products/ProductModal";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/admin/productService";
import "../../services/styles/admin/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  const handleAdd = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleSave = async (productData) => {
    try {
      if (productData.id) {
        await updateProduct(productData.id, productData);
      } else {
        await createProduct(productData);
      }
      setIsModalOpen(false);
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <AdminLayout>
      <div className="products-container">
        <div className="flex-between mb-6">
          <h1 className="page-title">Gestión de Productos</h1>
          <button className="btn btn-primary" onClick={handleAdd}>
            + Nuevo Producto
          </button>
        </div>

        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="flex gap-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-thumb"
                      />
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td className="order-total">${product.price}</td>
                  <td>{product.stock} unidades</td>
                  <td>
                    <div className="flex gap-2">
                      <button
                        className="btn-edit"
                        onClick={() => handleEdit(product)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(product.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          product={selectedProduct}
        />
      </div>
    </AdminLayout>
  );
};

export default Products;
