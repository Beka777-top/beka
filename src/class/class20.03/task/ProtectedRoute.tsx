import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute;