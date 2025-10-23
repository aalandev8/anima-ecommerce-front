import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Package, ShoppingCart, Users } from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const linkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      pathname === path ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Admin Panel</h1>
      <nav className="flex flex-col gap-2">
        <Link to="/" className={linkClass("/")}>
          <Home size={18} /> Dashboard
        </Link>
        <Link to="/products" className={linkClass("/products")}>
          <Package size={18} /> Productos
        </Link>
        <Link to="/orders" className={linkClass("/orders")}>
          <ShoppingCart size={18} /> Pedidos
        </Link>
        <Link to="/admins" className={linkClass("/admins")}>
          <Users size={18} /> Administradores
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
