import { RouterProvider } from "react-router-dom";
import { GuestRoutes } from "./guest.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export const AppRoutes = (): JSX.Element => {
  const { isAuthorized } = useAuth();
  return <RouterProvider router={isAuthorized ? AuthRoutes : GuestRoutes} />;
};
