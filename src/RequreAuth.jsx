import { async } from "@firebase/util";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "./Firebase.init";

function RequireAuth({ children }) {
  const [user] = useAuthState(auth);
  let location = useLocation();
  const [sendEmailVerification, sending, error] = useSendEmailVerification(
    auth
  );



  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user?.emailVerified) {
    return (
      <div className="login-container">
        <h1 className="login-title">Please varify your email</h1>
        <button className="submit-btn px-3" onClick={async()=>{
          await sendEmailVerification();
          toast('Email send')
        }}>Send varify email</button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
  else{
    return children;
  }
}

export default RequireAuth;
