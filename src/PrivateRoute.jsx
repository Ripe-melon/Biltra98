import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./context/authContext";
import { useEffect } from "react";

function PrivateRoute({ children }) {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (auth.user === false) {
      navigate("/signin", {
        state: { from: location },
      });
    }
  }, [auth.user, navigate, location]);
  return auth.user ? children : <p>Checking if authorized...</p>;
}

export default PrivateRoute;
