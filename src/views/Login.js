import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CustomTextField from "../components/CustomTextField";
import CustomButton from "../components/CustomButton";
import { setAuthInfo } from "../Action/Auth";
import { createNotification } from "../components/Toast";
import api from "../apiCalls/api";
import { useDispatch, useSelector } from "react-redux";
import DarkMode from "../components/DarkMode";
import loginImage from "../Assets/Img/loginImage.png";
import appLogo from "../Assets/Img/appLogo.png";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Login(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { userToken, isAuthenticated } = useSelector((state) => state.Auth);

  // const userAuth = useSelector((state) => state.auth);
  console.log("auth", isAuthenticated);
  useEffect(() => {
    document.getElementById("content").style.width = "100%";
    // if (userToken && isAuthenticated) {
    //   history.push("/");
    // }
    // return () => {
    //   console.log('USER IS ALREADY LOGGED IN');
    // };
    // eslint-disable-next-line
  }, [isAuthenticated]);

  const authenticate = (e) => {
    e.preventDefault();
    // console.log("auth");

    // props.history.push("/");
    // if (email.length <= 3 || password.length <= 3 || error || loading) {
    //   setError(true);
    // } else {
    setLoading(true);
    api
      .login({ email, password })
      .then((res) => {
        console.log("res", res);
        if (res.data.status === 422) {
          createNotification("error", res.data.message, "Status");
          console.log("message", res.data.message);
        } else {
          dispatch(setAuthInfo(res.data));
          console.log("response", res.data);
          localStorage.setItem("JWT", res.data.message.token);
          localStorage.setItem("UserId", res.data.message.id);
          createNotification("success", "Login Successfully");
          props.history.push("/");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        if (err.data.errors.email) {
          setError(true);
          setEmailError(err.data.errors.email[0]);
        }
        if (err.data.errors.password) {
          setError(true);
          setPasswordError(err.data.errors.password[0]);
        }
        setLoading(false);

        // createNotification(
        //   "error",
        //   err.data?.message ?? "Something went wrong please try again later"
        // );
      });
    // }
  };
  return (
    <div className="login-container">
    <div className="row">
        <div className="col-md-5 login-form-1">
            <img src={loginImage} alt=""/>
        </div>
        <div className="col-md-7 login-form-2">
            <div className="login-logo">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
            </div>
            <h3>  <img src={appLogo} alt=""/></h3>
            <h2>  Welcome Back</h2> 
                <div className="form-group">
                  <label className="labelform">Email</label>
                    <input type="text" className="form-control input_field" placeholder="Your Email *" value="" />
                </div>
                <div className="form-group">
                <label>Password</label>

                    <input type="password" className="form-control input_field" placeholder="Your Password *" value="" />
                </div>
                <div className="form-group">
                    <a href="#" className="btnForgetPwd" value="Login">Forget Password?</a>
                </div>
                <div className="form-group">
                    <input type="submit" className="btnSubmit" value="Login" />
                </div>
                <div className="deviderMain">
                  <hr style={{width:'40%' , height:'1px'}}/>
                <span > OR </span>
                <hr style={{width:'40%' , height:'1px'}}/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btnSubmit" value="Login with another provider" />
                </div>
                <div className="signupLink">
                  <p>Dont have an account ?</p>
                  <a href="#" className="RedirectionLink" value="Login">Forget Password?</a>


                  </div>
             
            </div>
        </div>
    </div>

  );
}
