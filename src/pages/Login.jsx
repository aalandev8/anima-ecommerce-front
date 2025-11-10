import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "@/redux/slices/authSlice";
import { authAPI } from "@/api/auth";
import { Navbar } from "@/components/ui/Navbar";

const Login = (store) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const backUrl = store?.type ? `/stores/${store.type}` : "/";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginStart());

    try {
      const data = await authAPI.login(formData);
      dispatch(
        loginSuccess({
          user: data.data.user,
          token: data.data.token,
        })
      );
      navigate("/");
    } catch (err) {
      dispatch(
        loginFailure(err.response?.data?.message || "Error al iniciar sesión")
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF4E8] flex items-center justify-center px-4">
      <div className=""></div>
      <div
        className="max-w-md w-full p-8
       bg-[#FAF7F0] border-1 border-[#F0F0B6] shadow rounded-lg "
      >
        <Link
          to={backUrl}
          className=" text-gray-600 hover:text-gray-900 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#556030"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Iniciar Sesión</h2>
          <p className="text-neutral-dark mt-2">Bienvenido de vuelta</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-dark mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral-dark mb-2"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#556030] hover:bg-[#454d2d] text-white py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-neutral-dark">
            ¿No tenés cuenta?{" "}
            <Link
              to="/register"
              className="text-[#556030] font-semibold hover:underline"
            >
              Registrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
