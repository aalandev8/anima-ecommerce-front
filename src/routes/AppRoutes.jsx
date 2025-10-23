import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../components/Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Orders from "../pages/Orders/Orders";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/Products/ProductDetail";

const AppRoutes = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
      />

      <Route
        path="/dashboard"
        element={
          isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />
        }
      >
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;
