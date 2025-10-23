import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
/* import Product from './pages/Product'; */
import StoreList from './pages/StoreList';
import Product from "./pages/Products/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/stores/:category" element={<StoreList />} />
 {/*        <Route path="/store/:id" element={<StoreDetails />} />  */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
