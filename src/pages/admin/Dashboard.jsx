import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/layout/AdminLayout';
import { Package, ShoppingBag, Users, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalSales: 45231,
    products: 234,
    todayOrders: 48,
    admins: 8
  });

  return (
    <AdminLayout>
      <div className="dashboard-container">
        <h1 className="page-title">Dashboard</h1>

        {/* Tarjetas de estadísticas */}
        <div className="grid-4">
          <div className="stat-card">
            <div className="stat-header">
              <DollarSign className="stat-icon" />
              <span className="stat-change">+12%</span>
            </div>
            <h3 className="stat-value">${stats.totalSales}</h3>
            <p className="stat-label">Total Ventas</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <Package className="stat-icon" />
              <span className="stat-change">+5%</span>
            </div>
            <h3 className="stat-value">{stats.products}</h3>
            <p className="stat-label">Productos</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <ShoppingBag className="stat-icon" />
              <span className="stat-change">+23%</span>
            </div>
            <h3 className="stat-value">{stats.todayOrders}</h3>
            <p className="stat-label">Pedidos Hoy</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <Users className="stat-icon" />
              <span className="stat-change">0%</span>
            </div>
            <h3 className="stat-value">{stats.admins}</h3>
            <p className="stat-label">Administradores</p>
          </div>
        </div>

        {/* Gráficos y tablas adicionales */}
      </div>
    </AdminLayout>
  );
};

export default Dashboard;