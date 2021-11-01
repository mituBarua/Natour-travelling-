import React from "react";
import useAuth from "../../../Hooks/useAuth";
import './Login.css';
import { BsGoogle } from "react-icons/bs";
const Login = () => {
  const {  signInUsingGoogle } = useAuth();
  return (
    <div className="google-login">
      <div className="gogle-login">
      <h5>Please Login</h5>
      <BsGoogle className="icon"/>
        <button className="signInBtn" onClick={signInUsingGoogle}>Google sign in</button>
      </div>
    </div>
  );
};

export default Login;
