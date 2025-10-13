import CardProduct from "../components/products/CardProduct";

const Home = () => {
  const products = [];

  if (products.length === 0) return <p>No hay productos disponibles.</p>;

  return (
    <main className="container py-4">
      <h1 className="text-center mb-4">Productos Destacados</h1>
      <div className="row g-3">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
