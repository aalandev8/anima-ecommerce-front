import { useState } from "react";
import { productService } from "../services/api";

export default function TestAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadProducts = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await productService.getAll();
      setProducts(data);
      console.log("Productos:", data);
    } catch (err) {
      setError("No se pudo conectar al servidor.");
      console.error(err);
      setProducts([]); // Reset solo si falla
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Times New Roman",
        textAlign: "center",
      }}
    >
      <h2>Prueba de Conexión</h2>

      <button
        onClick={loadProducts}
        disabled={loading}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          fontFamily: "Times New Roman",
          backgroundColor: "#F2F2F2",
          color: "black",
          borderColor: "black",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Conectando..." : "Probar Conexión"}
      </button>

      {error && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: "#F2EDE4",
            border: "1px solid red",
            borderRadius: "5px",
          }}
        >
          <strong>Error:</strong> {error}
        </div>
      )}

      {products && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: "#96ac60",
            border: "1px solid green",
            borderRadius: "5px",
          }}
        >
          <strong>¡Conexión Exitosa!</strong>
          <p>Productos encontrados: {products.length}</p>
        </div>
      )}
    </div>
  );
}
