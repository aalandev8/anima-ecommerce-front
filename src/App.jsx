import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./lib/queryClient";
import AuthProvider from "./components/auth/AuthProvider";

import Home from "./pages/home/Home";
import StoreList from "./pages/StoreList";
import StorePage from "./pages/StorePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            {/* Contenido principal */}
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/stores/:category" element={<StoreList />} />
                <Route path="/store/:storeId" element={<StorePage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>

            {/* Footer visible en todas las páginas */}
            <Footer />
          </div>
        </Router>
      </AuthProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
