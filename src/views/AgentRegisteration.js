import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomTextField from "../components/CustomTextField";
import CustomButton from "../components/CustomButton";
import InputLabel from "@material-ui/core/InputLabel";
import api from "../apiCalls/api";
import { createNotification } from "../components/Toast";
import { Link } from "react-router-dom";

function AgentRegisteration(props) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [agency_name, setAgencyName] = useState("");
  const [agencyNameError, setAgencyNameError] = useState("");
  const [imo_name, setImo] = useState("");
  const [imoError, setImoError] = useState(false);
  const [password, setPassword] = useState("");
  const [Passwordrror, setPasswordError] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [conPassError, setConPassError] = useState("");
  const [agent_Id, setAgentId] = useState("");
  const [agentIdError, setAgentIdError] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [agent_type, setAgentType] = useState("");
  const [agentTypeError, setAgentTypeError] = useState("");
  const [loading, setLoading] = useState(false);

  // const register = useSelector(({ auth }) => auth.register);

  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect(() => {
  // 	if (register.error && (register.error.username || register.error.password || register.error.email)) {
  // 		formRef.current.updateInputsWithError({
  // 			...register.error
  // 		});
  // 		disableButton();
  // 	}
  // }, [register.error]);

  function disableButton() {
    setIsFormValid(false);
  }

  function enableButton() {
    setIsFormValid(true);
  }

  function handleSubmit() {
    // dispatch(submitRegister(model));
  }
  const AgentRegisterationForm = (e) => {
    e.preventDefault();
    console.log("auth");

    // props.history.push("/");
    // if (email.length <= 3 || email.length <= 3 || error || loading) {
    //   setError(true);
    // }
    // if (name === "" || name === null || error || loading) {
    //   setError(true);
    // } else {
    setLoading(true);
    api
      .Agentregister({
        first_name,
        last_name,
        agency_name,
        email,
        imo_name,
        password,
        confirm_password,
        phone1,
        address,
        agent_type,
        agent_Id,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.status === 422) {
          createNotification("error", res.data.message, "Status");
          console.log("message", res.data.message);
        } else {
          createNotification("success", res.data.message);
          props.history.push("/login");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);

        // if (err.data.error.email) {
        //   setError(true);
        //   setEmailError(err.data.error.email[0]);
        // }
        // if (err.data.error.first_name) {
        //   setError(true);
        //   setFirstNameError(err.data.error.first_name[0]);
        // }
        // if (err.data.error.last_name) {
        //   setError(true);
        //   setLastNameError(err.data.error.last_name[0]);
        // }
        // if (err.data.error.password) {
        //   setError(true);
        //   setPasswordError(err.data.error.password[0]);
        // }
        // if (err.data.error.confirm_password) {
        //   setError(true);
        //   setConPassError(err.data.error.confirm_password[0]);
        // }
        // if (err.data.error.agent_Id) {
        //   setError(true);
        //   setAgentIdError(err.data.error.agent_Id[0]);
        // }
        // if (err.data.error.phone1) {
        //   setError(true);
        //   setPhoneError(err.data.error.phone1[0]);
        // }
        // if (err.data.error.agent_type) {
        //   setError(true);
        //   setAgentTypeError(err.data.error.agent_type[0]);
        // }

        // if (err.data.error.email) {
        //   setError(true);
        //   setErrorMessage(err.data.error.email[0]);
        // }

        // if (name === "") {
        //   console.log("err message");
        //   setError(true);
        //   setErrorMessage(err.error.name);
        // }
        setLoading(false);
        // createNotification(
        //   "error",
        //   err.data?.message ?? "Something went wrong please try again later"
        // );
      });
    // }
  };

  return (
    <div className="w-full">
      <form
        name="loginForm"
        noValidate
        className="flex flex-col justify-center w-full"
        onSubmit={AgentRegisterationForm}
      >
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            First Name
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={first_name}
            autoComplete={false}
            type="text"
            error={error}
            message={firstNameError}
            onChange={(e) => {
              setFirstName(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Last Name
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={last_name}
            autoComplete={false}
            type="text"
            error={error}
            message={lastNameError}
            onChange={(e) => {
              setLastName(e.target.value);
              setError(false);
            }}
          />
        </div>

        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Email
          </InputLabel>
          <CustomTextField
            value={email}
            autoComplete={false}
            type="text"
            error={error}
            message={emailError}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Agency Name
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={agency_name}
            autoComplete={false}
            type="text"
            name="agency_name"
            // error={ error}
            // message={nameError}
            onChange={(e) => {
              setAgencyName(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            IMO Name
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={imo_name}
            autoComplete={false}
            type="text"
            name="imo_name"
            // error={(imo_name.length > 1 && imo_name.length <= 5) || error}
            // message={"Please enter valid Agency Name"}
            onChange={(e) => {
              setImo(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Agent ID
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={agent_Id}
            autoComplete={false}
            type="text"
            error={error}
            message={agentIdError}
            onChange={(e) => {
              setAgentId(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Phone
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={phone1}
            autoComplete={false}
            type="text"
            error={error}
            message={phoneError}
            onChange={(e) => {
              setPhone1(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Address
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={address}
            autoComplete={false}
            type="text"
            error={error}
            message={addressError}
            onChange={(e) => {
              setAddress(e.target.value);
              // setError(false);
            }}
          />
        </div>

        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Password
          </InputLabel>
          <CustomTextField
            title={"Name"}
            // value={imo_name}
            autoComplete={false}
            type="password"
            name="password"
            error={error}
            message={Passwordrror}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Confirm Password
          </InputLabel>
          <CustomTextField
            title={"Name"}
            // value={imo_name}
            autoComplete={false}
            type="password"
            error={error}
            message={conPassError}
            onChange={(e) => {
              setConfirm_password(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel
            htmlFor="my-input"
            className="text-black text-12 pt-2 pb-4"
          >
            Agent Type
          </InputLabel>
          <select
            id="cars"
            name="agent_type"
            value={agent_type}
            className="w-75 text-10 p-1 mb-16 dd1"
            error={error}
            onChange={(e) => {
              setAgentType(e.target.value);
              setError(false);
            }}
          >
            <option value="1">Please Select</option>
            <option value="2">Independent</option>
            <option value="3">LOA</option>
          </select>
        </div>
        <div className="w-100 text-center">
          {error && <span className="text-danger">{agentTypeError}</span>}
        </div>
        <CustomButton
          title={"Register"}
          type="submit"
          loading={loading}
          disabled={loading}
        />

        <div className="d-flex  justify-items-center justify-content-center ">
          <span className="text-14 ">Already have an account?</span>
          <Link className="text-12 ml-1" to="/login" style={{ color: "blue" }}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AgentRegisteration;
