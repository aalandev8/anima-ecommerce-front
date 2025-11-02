import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./lib/queryClient";
import AuthProvider from "./components/auth/AuthProvider";
import Home from "./pages/home/Home";
import StoreList from "./pages/StoreList";
import StorePage from "./pages/StorePage";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stores/:category" element={<StoreList />} />
            <Route path="/store/:storeId" element={<StorePage />} />
            <Route path="/store/:storeId/product/:id" element={<ProductDetail />} />
          </Routes>
        </Router>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
