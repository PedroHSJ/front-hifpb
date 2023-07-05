import { createBrowserRouter, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Estabelecimento } from "../pages/Estabelecimento";

export const AuthRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/estabelecimento" replace />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/estabelecimento",
    element: <Estabelecimento />,
  },
  {
    path: "*", // qualquer rota que não foi definida anteriormente
    element: <Navigate to="/estabelecimento" replace />,
  },
]);
