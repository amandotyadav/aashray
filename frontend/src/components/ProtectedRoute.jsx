import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../configs/axios";
import { Loader } from "lucide-react";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axiosInstance.get("/api/auth/is-auth");
        if (res.data.success) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader className="w-20 h-20 animate-spin" />
      </div>
    );
  }

  return isAuth ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
