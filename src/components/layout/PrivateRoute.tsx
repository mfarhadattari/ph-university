import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector((state) => state.auth.token);
  const { pathname } = useLocation();
  if (!token) {
    return <Navigate to="/login" replace={true} state={{ from: pathname }} />;
  }
  return children;
};

export default PrivateRoute;
