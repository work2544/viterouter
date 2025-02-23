import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/usercontext";
import { useState, useEffect } from "react";

const ProtectedRoute = () => {
  const userContext = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
console.log(userContext?.user);
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return userContext?.user ? <Outlet /> : <Navigate to="/log-in" />;
};

export default ProtectedRoute;
