import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import Dashboard from "../pages/Dashboard";
import { useIdToken } from "react-firebase-hooks/auth";

const ProtectedRoute = () => {
  const [user, loading, error] = useIdToken(auth);
  if (loading)
    return (
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  if (error)
    return (
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
        }}
      >
        Error: {error.message}
      </div>
    );
  if (user?.email === "itsmesubid@gmail.com") return <Dashboard />;
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
