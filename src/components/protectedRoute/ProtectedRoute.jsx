import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user, userData, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  if (!user || userData?.role !== "admin") return <Navigate to="/" />;

  return children;
};