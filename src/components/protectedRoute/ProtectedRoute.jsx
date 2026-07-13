import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { SkeletonHeader, SkeletonTableDesktop } from "../skeleton/Skeleton";

export const ProtectedRoute = ({ children }) => {
  const { user, userData, loading } = useAuth();

  if (loading)
    return (
      <>
        <SkeletonHeader />
        <SkeletonTableDesktop />
      </>
    );

  if (!user || userData?.role !== "admin") return <Navigate to="/" />;

  return children;
};