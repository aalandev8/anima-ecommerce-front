// src/components/admin/routes/PrivateRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { authService } from "../../services/authService";
import jwtDecode from "jwt-decode"; // npm install jwt-decode

const PrivateRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null); // null = loading

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      setIsAuthorized(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // en segundos

      if (decoded.exp < currentTime) {
        // Token expirado
        authService.logout(); // limpia token e info del admin
        setIsAuthorized(false);
      } else {
        setIsAuthorized(true);
      }
    } catch (error) {
      // Token inválido
      authService.logout();
      setIsAuthorized(false);
    }
  }, []);

  // Mientras valida el token, podemos mostrar un loading simple
  if (isAuthorized === null) {
    return <p style={{ padding: "2rem" }}>Validando sesión...</p>;
  }

  return isAuthorized ? children : <Navigate to="/admin/login" replace />;
};

export default PrivateRoute;
