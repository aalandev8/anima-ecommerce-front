import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Rutas públicas (tuyas)
import Home from './pages/home/Home';
import StoreList from './pages/StoreList';
import StorePage from './pages/StorePage';

// // Rutas del dashboard (de tu compañera)
// import PrivateRoute from './routes/PrivateRoute';
// import Layout from './components/Layout/Layout';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Products from './pages/Products/Products';
// import Orders from './pages/Orders/Orders';
// import Admins from './pages/Admins/Admins';
// import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* ===== RUTAS PÚBLICAS (Cliente/Tienda) ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/stores/:category" element={<StoreList />} />
        <Route path="/store/:storeId" element={<StorePage />} />

        {/* ===== RUTAS DEL DASHBOARD (Admin) ===== */}
        {/* <Route path="/login" element={<Login />} />
        
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="admins" element={<Admins />} />
        </Route> */}

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;