import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./Firebase.init";

function RequireAuth({ children }) {
  const [user] = useAuthState(auth);
  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user?.emailVerified) {
    return (
      <div className="login-container">
        <h1 className="login-title">Please varify your email</h1>
        <button className="submit-btn px-3">Send varify email</button>
      </div>
    );
  }
  else{
    return children;
  }
}

export default RequireAuth;
