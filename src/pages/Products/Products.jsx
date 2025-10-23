import React from "react";
import DataTable from "../../components/Tables/DataTable";

const Products = () => {
  const data = [
    { id: 1, name: "Producto 1", price: "$25", stock: 10 },
    { id: 2, name: "Producto 2", price: "$40", stock: 5 },
  ];

  const columns = ["ID", "Nombre", "Precio", "Stock"];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default Products;
