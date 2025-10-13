
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.image || "/placeholder.jpg"}
        className="card-img-top"
        alt={product.name}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted">${product.price}</p>
        </div>
        <Link to={`/product/${product.id}`} className="btn btn-dark mt-2">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
