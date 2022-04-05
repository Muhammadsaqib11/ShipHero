import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { setAuthInfo } from "../Action/Auth";
import { createNotification } from "../components/Toast";
import api from "../apiCalls/api";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import signupImg from "../Assets/Img/signupImg.png";
import appLogo from "../Assets/Img/appLogo.png";
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Register(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
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
    console.log("auth");

    // props.history.push("/");
    if (email.length <= 3 || password.length <= 3 || error || loading) {
      setError(true);
    } else {
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
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log("err", err);
          setLoading(false);
          // createNotification(
          //   "error",
          //   err.data?.message ?? "Something went wrong please try again later"
          // );
        });
    }
  };
  return (
    <div className="login-container">
    <div className="row">
        <div className="col-md-5 login-form-1">
            <img src={signupImg} alt=""/>
        </div>
        <div className="col-md-7 login-form-2">
            <div className="login-logo">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
            </div>
            <h3>  <img src={appLogo} alt=""/></h3>
            <h4> Create Your Account</h4> 
            <h5> No upfront fees. No minimums. Get started for free.</h5> 
                <div className="form-group">
                  <label className="labelform">Name</label>
                    <input type="text" className="form-control input_field" placeholder="Enter Your Name" value="" />
                </div>
                <div className="form-group">
                <label>Email</label>
                    <input type="email" className="form-control input_field" placeholder="Your Email *" value="" />
                </div>
                <div className="form-group">
                <label>Password</label>
                    <input type="password" className="form-control input_field" placeholder="Your Password *" value="" />
                </div>
                <div className="form-group">
                    <a href="#" className="btnForgetPwd" value="Login">Forget Password?</a>
                </div>
                <div className="form-group">
                    <input type="submit" className="btnSubmit" value="Signup" />
                </div>     <div className="loginLink1">
                  <p>By signing up, you are agreeing to</p>
                  <a href="#" className="RedirectionLink" value="Login">ShipHero Terms & Conditions</a>
                </div>
                <div className="loginLink">
                  <p>Dont have an account</p>
                  <a href="#" className="RedirectionLink" value="Login">Forget Password?</a>
                </div>
 
           
            </div>
        </div>
    </div>
  );
}
