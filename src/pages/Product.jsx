import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productService } from "../services/api";
import { addToCart } from "../redux/slices/cartSlice";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productService.getById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error al cargar producto:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>No se encontró el producto.</p>;

  const productInCart = cartItems.find(item => item.id === product.id)?.quantity || 0;

  return (
    <div className="container py-4">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={product.image || "/placeholder.jpg"}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">${product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-dark mt-3" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
          {productInCart > 0 && <p>En el carrito: {productInCart}</p>}
        </div>
      </div>
    </div>
  );
};

export default Product;
