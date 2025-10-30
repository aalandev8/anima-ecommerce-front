import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import StoreList from "./pages/StoreList";
import StorePage from "./pages/StorePage";
import ProductDetail from "./pages/ProductDetail";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stores/:category" element={<StoreList />} />
        <Route path="/store/:storeId" element={<StorePage />} />
        <Route path="/store/:storeId/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
