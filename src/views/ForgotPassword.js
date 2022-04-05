import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CustomTextField from "../components/CustomTextField";
import CustomButton from "../components/CustomButton";
import { setAuthInfo } from "../Action/Auth";
import { createNotification } from "../components/Toast";
import api from "../apiCalls/api";
import { useDispatch, useSelector } from "react-redux";
import DarkMode from "../components/DarkMode";
import logo from "../Assets/Img/logo.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import loginImage from "../Assets/Img/loginImage.png";
import appLogo from "../Assets/Img/appLogo.png";
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function ForgotPassword(props) {
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
        // console.log("res", res);
        if (res.data.status === "error") {
          createNotification("error", res.data.message, "Status");
          console.log("message", res.data.message);
        } else {
          dispatch(setAuthInfo(res.data));
          console.log("response", res.data);
          localStorage.setItem("JWT", res.data.message.token);
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
        <div className="col-md-7 forgotpassword-form-2">
            <div className="login-logo">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
            </div>
            <h3>  <img src={appLogo} alt=""/></h3>
            <h2> Forgot Your Password</h2> 
            <h5 style={{width:'80%' , paddingBottom:"5%"}}>We'll email you details on how to reset your password</h5>
                <div className="form-group">
                  <label className="labelform">Whats the Email on Your Account</label>
                    <input type="text" className="form-control input_field" placeholder="" value="" />
                </div>

             
                <div className="form-group">
                    <input type="submit" className="btnSubmit" value="Send me Instructions" />
                </div>
    
  
                <div className="signupLink" style={{paddingRight:'10%'}}>
                  
                  <a href="#" className="btnForgetPwd" value="Login">Take me Back to Login?</a>
                  </div>
             
            </div>
        </div>
    </div>
  );
}
