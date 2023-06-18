import { createBrowserRouter, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export const AuthRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*", // qualquer rota que não foi definida anteriormente
    element: <Navigate to="/dashboard" replace />,
  },
]);
