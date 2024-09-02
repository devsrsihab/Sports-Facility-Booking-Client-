import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  currentToken,
  logout,
  TUser,
} from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRouteProps = {
  children: ReactNode;
  roles: string[]; // Array of allowed roles
};

const ProtectedRoute = ({ children, roles }: TProtectedRouteProps) => {
  const token = useAppSelector(currentToken);
  let user: TUser | null = null;

  if (token) {
    user = verifyToken(token) as TUser;
  }

  const dispatch = useAppDispatch();

  // If token not found or user role is not allowed
  if (!token || (user && !roles.includes(user.role))) {
    dispatch(logout());
    return <Navigate to="/auth/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
