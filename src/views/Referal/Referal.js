import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CustomTextField from "../../components/CustomTextField";
import CustomButton from "../../components/CustomButton";
import { setAuthInfo } from "../../Action/Auth";
import { createNotification } from "../../components/Toast";
import api from "../../apiCalls/api";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../Assets/Img/logo.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import RedeemIcon from "@material-ui/icons/Redeem";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import skype from "../../Assets/Img/skype.png";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Referal(props) {
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
    <>
      <div className=" row d-flex justify-content-center align-items-center h-100vh">
        <div className="col-lg-4 col-sm-6 referalBlock p-0">
          <div className="plr-3">
            <div className="d-flex w-100 justify-content-center align-items-center flex-column">
              <h4 className="pt-5">Refer Friends , Get Rewards</h4>
              <RedeemIcon style={{ height: "100px", width: "100px" }} />
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </Typography>
            </div>
            <form
              autoComplete={false}
              //  onSubmit={authenticate}
            >
              <fieldset>
                <div className="d-flex flex-row justify-content-center pt-3">
                  <CustomTextField
                    className="mb-16 w-full pt-2 p-1"
                    type="text"
                    name="phoneNumber2"
                    label="Phone Number 2"
                    // value={state.phoneNumber2}
                    // error={error}
                    // message={emailError}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(false);
                    }}
                    variant="outlined"
                  />
                  <CustomButton
                    title={"Refer"}
                    className={"form-group w-35 text-10 pxyz-4"}
                    type="submit"
                    loading={loading}
                    disabled={loading}
                  />
                </div>
                <div className="d-flex flex-row justify-content-center pt-3"></div>
              </fieldset>
            </form>
            <div className="d-flex w-100 justify-content-center align-items-center flex-column">
              <h5 className="pt-1">Share to your friend by using these:</h5>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center flex-row">
              <IconButton>
                {" "}
                <FacebookIcon
                  style={{ height: "50px", width: "50px", color: "black" }}
                />
              </IconButton>
              <IconButton>
                {" "}
                <WhatsAppIcon
                  style={{ height: "50px", width: "50px", color: "black" }}
                />
              </IconButton>
              <IconButton>
                <LinkedInIcon
                  style={{ height: "50px", width: "50px", color: "black" }}
                />
              </IconButton>
              <IconButton>
                <img
                  src={skype}
                  alt="Italian Trulli"
                  style={{ height: "50px", width: "50px" }}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
