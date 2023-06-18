import { createBrowserRouter, Navigate } from "react-router-dom";
import { SignIn } from "../pages/SignIn";

export const GuestRoutes = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "*", // qualquer rota que não foi definida anteriormente
    element: <Navigate to="/" replace />,
  },
]);
