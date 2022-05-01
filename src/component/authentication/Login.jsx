import React, { useRef } from "react";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { async } from "@firebase/util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [user1, loading1, error1] = useAuthState(auth);
  const [signInWithGithub, userGit, loadingGit, errorGit] =
    useSignInWithGithub(auth);
  const [signInWithEmailAndPassword, userSign, loadingSign, errorSign] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, errorPass] =
    useSendPasswordResetEmail(auth);

  //return to the page
  const navigate = useNavigate();
  let location = useLocation();

  // let auth = useAuth();

  let from = location.state?.from?.pathname || "/";
  let err = "";

  if (errorSign) {
    err = errorSign.message.split("/")[1].split(")")[0];
  }

  if (error1) {
    err = error1.message.split("/")[1].split(")")[0];
  }
  if (error) {
    err = error.message.split("/")[1].split(")")[0];
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }

  const handleLogIn = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    await signInWithEmailAndPassword(email, pass);
  };

  const forgatePassword = async () => {
    const email = emailRef.current.value;

    if (email != "") {
      await sendPasswordResetEmail(email);
      toast("Password reset email send");
    } else {
      toast("Enter your email");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Please Log in</h2>
      <form onSubmit={handleLogIn} className="form-container">
        <label>
          <p>Email</p>
          <input type="email" ref={emailRef} placeholder="Email" required />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            ref={passRef}
            placeholder="Password"
            required
          />
        </label>
        <p>{err}</p>
        <input type="submit" className="submit-btn" value="Log In" />
      </form>
      <div>
        <h4 className="title">
          Don't have an account? <Link to={"/signup"}>Sign Up</Link>
        </h4>
        <h4 className="title cursor" onClick={forgatePassword}>
          Forgate password
        </h4>
      </div>
      <div className="or">
        <div></div>
        <p>or</p>
        <div></div>
      </div>
      <h2 className="login-title fs-5">Contiue with</h2>
      <div className="social-login">
        <span onClick={() => signInWithGoogle()}>
          <FcGoogle></FcGoogle>
        </span>
        <span onClick={() => signInWithGithub()}>
          <BsGithub></BsGithub>
        </span>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
