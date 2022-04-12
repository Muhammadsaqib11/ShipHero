import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from "react";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import CustomTextField from "../../components/CustomTextField";
import { createNotification } from "../../components/Toast";
import Icon from "@material-ui/core/Icon";
import { useRef } from "react";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import api from "../../apiCalls/api";
import axios from "axios";

import Velazquez from "../../Assets/Img/avatars/Velazquez.jpg";
const useStyles = makeStyles((theme) => ({
  layoutHeader: {
    height: 320,
    minHeight: 320,
    [theme.breakpoints.down("md")]: {
      height: 240,
      minHeight: 240,
    },
  },
}));
const token = localStorage.getItem("JWT");
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

function AgentProfile() {
  const id = localStorage.getItem("UserId");
  const [user_id, setUserID] = useState(id);
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    agent_Id: "",
    phone1: "",
    phoneNumber2: "",
    imo_name: "",
    agency_name: "",
    ssn: "",
    occupation: "",
    password: "",
    confirmPassword: "",
    smoker: false,
    picture: [],
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    addressError: "",
    cityError: "",
    stateError: "",
    zipcodeErrir: "",
    phone2: "",
    phoneNumber2Error: "",
    ageError: "",
    dobError: "",
    ssnError: "",
    occupationError: "",
    passwordError: "",
    confirmPasswordError: "",
    smokerError: "",
    imageError: "",
    agent_type: "",
  });
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const formRef = useRef(null);
  function handleTabChange(event, value) {
    setSelectedTab(value);
  }
  const handleChangeCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  useEffect(() => {
    document.getElementById("content").style.overflow = "scroll";
    api
      .ProfileView()
      .then((res) => {
        // console.log("response", res);

        if (res.data.status === 422) {
          createNotification("error", res.data.message);
          // console.log("message", res.data.message);
        } else {
          console.log("res", res);
          setState({
            ...state,
            first_name: res.data.agent.first_name,
            last_name: res.data.agent.last_name,
            email: res.data.email,
            address: res.data.agent.address,
            city: res.data.agent.city,
            state: res.data.agent.state,
            agent_Id: res.data.agent.agent_Id,
            phone1: res.data.agent.phone1,
            phone2: res.data.agent.phone2,
            imo_name: res.data.agent.imo_name,
            agency_name: res.data.agent.agency_name,
            agent_type: res.data.agent.agent_type,
            password: res.data.password,
            confirmPassword: res.data.confirmPassword,
          });
        }

        // setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const EditProfileForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", state.first_name);
    formData.append("last_name", state.last_name);
    formData.append("email", state.email);
    formData.append("address", state.address);
    formData.append("state", state.state);
    formData.append("agent_Id", state.agent_Id);
    formData.append("phone1", state.phone1);
    formData.append("phone2", state.phone2);
    formData.append("imo_name", state.imo_name);
    formData.append("agency_name", state.agency_name);
    formData.append("smoker", state.smoker);
    formData.append("agent_type", state.agent_type);
    formData.append("password", state.password);
    formData.append("confirm_password", state.confirmPassword);
    // formData.append("user_id", user_id);

    // setLoading(true); axios
    api
      .editProfile(formData)
      .then((res) => {
        console.log("res", res);
        if (res.data.status === 422) {
          createNotification("error", res.data.message, "Status");
          console.log("message", res.data.message);
        } else {
          console.log("response");
        }
        // setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);

        // setLoading(false);
        // createNotification(
        //   "error",
        //   err.data?.message ?? "Something went wrong please try again later"
        // );
      });
    // axios
    //   .get(`http://192.168.0.119/api/profile/${user_id}/edit`, formData)
    //   .then(function (response) {
    //     console.log("EditResponse", response.data);

    //     // setCustomerDetail(response.data.message);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // }
  };
  function imageName(evt) {
    const file = evt.target.files[0];
    console.log("file", file);
    setState({ ...state, picture: file });

    // setImage(evt.target.files[0]);
    // setFile(file)
    // console.log("filename", image);
  }
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    console.log("state", state);
  }
  function handleEdit() {
    setShowForm(false);
    console.log("edit");
  }
  function handleSubmit() {
    console.log("submit");
  }

  return (
    <div>
      <div className="topProfileSection">
        <div className="row w-full pb-3">
          <div className="col-lg-2">
            <div className="row">
              <div className="col-lg-12">
                <div className="avatar-icon" delay={300}>
                  <Avatar
                    className="w-full h-96"
                    src={Velazquez}
                    style={{ height: "70px", width: "70px" }}
                  />
                  <Button
                    variant="contained"
                    component="label"
                    className="primaryTheme"
                  >
                    <CameraAltIcon className="text-white" />
                    <input
                      type="file"
                      name="image"
                      onChange={imageName}
                      multiple={false}
                      accept="jpg/png/jpeg"
                      hidden
                    />
                  </Button>
                </div>
              </div>
              <div className="col-lg-12 ml-24"></div>
            </div>
          </div>
          <div className="col-lg-9 mt-48 p-0">
            <div className="row">
              <div className="col-lg-6 p-0">
                <div animation="transition.slideLeftIn" delay={300}>
                  <Typography
                    className="md:mx-24 text-white text-16 md:text-16 md:my-0"
                    variant="h6"
                    color="inherit"
                  >
                    Saqib
                  </Typography>
                </div>
              </div>
            </div>
            <div className="row p-0">
              <div className="col-lg-6 p-0 mt-12">
                <div animation="transition.slideLeftIn" delay={300}>
                  <Typography
                    className="md:mx-24 text-white text-16 my-8 md:my-0"
                    variant="h6"
                    color="inherit"
                  >
                    JohnDoe321@gmail.com
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showForm ? (
          <div className="w-full row pt-5">
            <form ref={formRef} className="row w-full">
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  First Name
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 customInput p-1"
                  type="text"
                  name="name"
                  // label="First Name"
                  value={state.first_name}
                  variant="outlined"
                  disabled
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Last Name
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="lastname"
                  label="Last Name"
                  value={state.last_name}
                  variant="outlined"
                  disabled
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Email
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="email"
                  label="Email"
                  value={state.email}
                  variant="outlined"
                  disabled
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Address
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="address"
                  label="Address"
                  value={state.address}
                  variant="outlined"
                  disabled
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  City
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="city"
                  label="City"
                  value={state.city}
                  variant="outlined"
                  disabled
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  State
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="state"
                  label="State"
                  value={state.state}
                  message="Min character length is 4"
                  variant="outlined"
                  disabled
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Agent ID
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="agent_Id"
                  label="ZipCode"
                  value={state.agent_Id}
                  variant="outlined"
                  disabled
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Phone Number1{" "}
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="phone1"
                  value={state.phone1}
                  message={"Min character length is 4"}
                  variant="outlined"
                  disabled
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Phone Number 2
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="phoneNumber2"
                  label="Phone Number 2"
                  value={state.phoneNumber2}
                  variant="outlined"
                  disabled
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  IMO Name
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="imo_name"
                  label="Age"
                  value={state.imo_name}
                  variant="outlined"
                  disabled
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Agency Name
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="agency_name"
                  label="Date of Birth"
                  value={state.agency_name}
                  variant="outlined"
                  disabled
                />
              </div>

              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Agent Type
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="agent_type"
                  label="Date of Birth"
                  value={state.agent_type}
                  variant="outlined"
                  disabled
                />
              </div>

              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Password
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="password"
                  name="password"
                  label="Password"
                  value={state.password}
                  // message={ 'Min character length is 4'}
                  variant="outlined"
                  disabled
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Confirm Password
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="password"
                  name="confPassword"
                  label="Confirm Password"
                  value={state.confirmPassword}
                  variant="outlined"
                  disabled
                />
              </div>
              {/* <div className="col-lg-6 d-flex" /> */}
              <div className="col-lg-6 d-flex" />
              <div className="col-lg-4" />
              <div
                className="col-lg-2 pb-4"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  className="w-1\/4 mr-1 primaryTheme"
                  aria-label="LOG IN"
                  value="legacy"
                  onClick={handleEdit}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  className="w-1\/4  mt-16 ml-16 secondaryTheme"
                  aria-label="LOG IN"
                  value="legacy"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="w-full pt-3">
            <form ref={formRef} className="row w-full">
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  First Name
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="first_name"
                  value={state.first_name}
                  message={"Please enter valid Name"}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Last Name
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="last_name"
                  label="Last Name"
                  value={state.last_name}
                  message={""}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Email
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1 p-1"
                  type="text"
                  name="email"
                  label="Email"
                  value={state.email}
                  message={""}
                  autoComplete={false}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Address
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1"
                  type="text"
                  name="address"
                  label="Address"
                  value={state.address}
                  message={""}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  City
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1"
                  type="text"
                  name="city"
                  label="City"
                  value={state.city}
                  autoComplete={false}
                  message={""}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  State
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1"
                  type="text"
                  name="state"
                  label="State"
                  value={state.state}
                  autoComplete={false}
                  message={""}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Agent ID
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1"
                  type="text"
                  name="agent_Id"
                  label="ZipCode"
                  value={state.agent_Id}
                  message={""}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Phone Number 1
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1"
                  type="text"
                  name="phone1"
                  label="Phone Number 1"
                  value={state.phone1}
                  message={""}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Phone Number 2
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1"
                  type="text"
                  name="phoneNumber2"
                  label="Phone Number 2"
                  value={state.phone2}
                  message={""}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  IMO Name
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1"
                  type="text"
                  name="imo_name"
                  label="Age"
                  value={state.imo_name}
                  message={""}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>

              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Agency Name
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1"
                  type="text"
                  name="agency_name"
                  label="SSN"
                  value={state.agency_name}
                  message={""}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>

              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Agency type
                </InputLabel>
                <select
                  id="cars"
                  name="agent_type"
                  value={state.agent_type}
                  className="w-75 text-10 p-1 mb-16"
                  error={error}
                  onChange={handleChange}
                  style={{ height: "35px" }}
                >
                  <option value="1">Please Select</option>
                  <option value="2">Independent</option>
                  <option value="3">LOA</option>
                </select>
              </div>

              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Password
                </InputLabel>

                <CustomTextField
                  className="mb-16 w-full p-1"
                  type="password"
                  name="password"
                  label="Password"
                  value={state.password}
                  message={""}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6 d-flex">
                <InputLabel
                  htmlFor="my-input"
                  className="text-black text-12 w-25"
                >
                  Confirm Password
                </InputLabel>
                <CustomTextField
                  className="mb-16 w-full p-1"
                  type="password"
                  name="confPassword"
                  label="Confirm Password"
                  value={state.confirmPassword}
                  message={""}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6 d-flex" />
              <div className="col-lg-4" />
              <div
                className="col-lg-2"
                style={{ display: "flex", justifyContent: "end" }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  className="w-1\/4 mr-1 primaryTheme"
                  aria-label="LOG IN"
                  value="legacy"
                  onClick={EditProfileForm}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  className="w-1\/4  mt-16 ml-16 secondaryTheme"
                  aria-label="LOG IN"
                  value="legacy"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default AgentProfile;
