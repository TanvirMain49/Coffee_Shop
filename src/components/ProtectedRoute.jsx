import { Navigate } from "react-router-dom";
import useAuth from "@/hook/useAuth";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  // If not logged in → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If a role is required and user doesn't match → redirect (e.g., to home)
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  // Otherwise → show the protected page
  return children;
};

export default ProtectedRoute;
