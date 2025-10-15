import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Panel Admin</h2>
      <nav>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/products">Productos</NavLink>
        <NavLink to="/admin/admins">Administradores</NavLink>
        <NavLink to="/admin/orders">Pedidos</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
