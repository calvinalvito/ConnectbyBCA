import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

interface PrivateRouteProps {
  children: React.ReactElement; // Mengganti 'element' dengan 'children'
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { accessToken } = useAuth();
  const location = useLocation();

  return accessToken ? (
    children // Menggunakan 'children' untuk menampilkan konten
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
