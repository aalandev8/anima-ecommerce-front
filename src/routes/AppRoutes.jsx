// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import Products from "../pages/Products/Products";
// import Orders from "../pages/Orders/Orders";
// import Admins from "../pages/Admins/Admins";
// import Login from "../pages/Login/Login";
// import Layout from "../components/Layout/Layout";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Ruta de login */}
//       <Route path="/login" element={<Login />} />

//       {/* Rutas protegidas con Layout anidado */}
//       <Route
//         path="/*"
//         element={
//           <PrivateRoute>
//             <Layout />
//           </PrivateRoute>
//         }
//       >
//         <Route index element={<Dashboard />} />
//         <Route path="products" element={<Products />} />
//         <Route path="orders" element={<Orders />} />
//         <Route path="admins" element={<Admins />} />
//       </Route>

//       {/* Redirección por defecto */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
