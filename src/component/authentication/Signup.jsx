import React, { useRef } from 'react'
import "./login.css";
import {FcGoogle} from 'react-icons/fc'
import {BsGithub} from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';

const Signup = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const nameRef = useRef();
  const navigate = useNavigate();

  //firebase google
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
  
  const [updateProfile, updating, error3] = useUpdateProfile(auth);
  
  let err = '';
  
  if(errorGit){
    err = errorGit.message.split('/')[1].split(')')[0];
  }
  if(error1){
    err = error1.message.split('/')[1].split(')')[0];
  }
  if(error){
    err = error.message.split('/')[1].split(')')[0];
  }

  if(user||user1||userGit){
    navigate('/');
  }

  const handleLogIn = async (event) => {
    event.preventDefault();
    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    await createUserWithEmailAndPassword(email,pass);
    await updateProfile({displayName});
  };


  return (
    <div className="login-container">
      <h2 className="login-title">Please Sign Up</h2>
      <form onSubmit={handleLogIn} className="form-container">
        <label>
          <p>User name</p>
          <input type="text" ref={nameRef} placeholder="User Name" required/>
        </label>
        <label>
          <p>Email</p>
          <input type="email" ref={emailRef} placeholder="Email" required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" ref={passRef} placeholder="Password" required/>
        </label>
        <p className='text-danger'>{err?err:''}</p>
        <input type="submit" className="submit-btn" value="Sign Up" />
      </form>
      <div>
        <h4 className='title'>Already have an account? <Link to={'/login'}>Log in</Link></h4>
      </div>
      <div className="or">
        <div></div>
        <p>or</p>
        <div></div>
      </div>
      {/* <h2 className="login-title fs-5">Contiue with</h2> */}
      <div className="social-login">
        <span onClick={()=>signInWithGoogle()}><FcGoogle></FcGoogle></span>
        <span onClick={()=>signInWithGithub()}><BsGithub></BsGithub></span>

      </div>
    </div>
  )
}

export default Signup