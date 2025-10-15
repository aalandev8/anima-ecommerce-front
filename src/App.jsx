// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Páginas públicas del e-commerce
import Home from './pages/Home';
import Product from './pages/Product';

// Páginas del admin
import AdminLogin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import Admins from './pages/admin/Admins';
import Orders from './pages/admin/Orders';

// Layout y guard
import AdminLayout from './components/admin/layout/AdminLayout';
import PrivateRoute from './components/admin/routes/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas de la tienda */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />

        {/* Login del admin */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Rutas privadas del admin, todas envueltas en AdminLayout */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Products />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/admins"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Admins />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Orders />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        {/* Redirección por defecto si la ruta no existe */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
