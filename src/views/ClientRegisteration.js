import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomTextField from "../components/CustomTextField";
import InputLabel from "@material-ui/core/InputLabel";
import api from "../apiCalls/api";
import { createNotification } from "../components/Toast";
import { Link } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Checkbox from "@material-ui/core/Checkbox";

function ClientRegisteration(props) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [first_name, setFitstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, serPasswordError] = useState("");
  const [conPasswordError, setConfirmPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [ssn, setSsn] = useState("");
  const [ssnError, setSsnError] = useState("");
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");
  const [occupation, setOccupation] = useState("");
  const [occupationError, setOccupationError] = useState("");
  const [smoker, setSmoker] = useState(false);
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [zipCodeError, setZipcodeError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [country, setCountry] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact1Error, setContact1Error] = useState("");
  const [contact2, setContact2] = useState("");
  const [contact2Error, setContact2Error] = useState("");
  const [referal, setReferal] = useState("");
  const [referalError, setReferalError] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [countryError, setCountryError] = useState("");

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
  const ClientRegisterationForm = (e) => {
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
      .register({
        first_name,
        last_name,
        email,
        password,
        confirm_password,
        dob,
        ssn,
        age,
        occupation,
        address,
        city,
        zip_code,
        state,
        contact2,
        contact1,
        referal,
        smoker,
        country,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.status === 422) {
          createNotification("error", res.data.message, "Status");
          console.log("message", res.data.message);
        } else {
          createNotification("success", res.data.message);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);

        if (err.data.error.email) {
          setError(true);
          setEmailError(err.data.error.email[0]);
        }
        if (err.data.error.first_name) {
          setError(true);
          setFirstNameError(err.data.error.first_name[0]);
        }
        if (err.data.error.last_name) {
          setError(true);
          setLastNameError(err.data.error.last_name[0]);
        }
        if (err.data.error.password) {
          setError(true);
          serPasswordError(err.data.error.password[0]);
        }
        if (err.data.error.confirm_password) {
          setError(true);
          setConfirmPasswordError(err.data.error.confirm_password[0]);
        }

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

  function disableButton() {
    setIsFormValid(false);
  }

  function enableButton() {
    setIsFormValid(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(submitRegister(model));
  }
  const handleChangeCheckBox = (event) => {
    // setSmoker(event.targer.checked);
    // console.log("smoker", smoker);
    setSmoker(event.target.checked);
    console.log("smoker", smoker);
  };

  return (
    <div className="w-full">
      <form
        // name="loginForm"
        noValidate
        className="flex flex-col justify-center w-full"
        onSubmit={ClientRegisterationForm}
      >
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            First Name
          </InputLabel>
          <CustomTextField
            value={first_name}
            autoComplete={false}
            type="text"
            error={error}
            message={firstNameError}
            onChange={(e) => {
              setFitstName(e.target.value);
              // setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Second Name
          </InputLabel>
          <CustomTextField
            value={last_name}
            autoComplete={false}
            type="text"
            error={error}
            message={lastNameError}
            onChange={(e) => {
              setLastName(e.target.value);
              // setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            DOB
          </InputLabel>
          <CustomTextField
            value={dob}
            autoComplete={false}
            type="date"
            error={error}
            message={dobError}
            onChange={(e) => {
              setDob(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            SSN
          </InputLabel>
          <CustomTextField
            value={ssn}
            autoComplete={false}
            type="text"
            error={error}
            message={ssnError}
            onChange={(e) => {
              setSsn(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Age
          </InputLabel>
          <CustomTextField
            value={age}
            autoComplete={false}
            type="text"
            error={error}
            message={ageError}
            onChange={(e) => {
              setAge(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Occupation
          </InputLabel>
          <CustomTextField
            value={occupation}
            autoComplete={false}
            type="text"
            error={error}
            message={occupationError}
            onChange={(e) => {
              setOccupation(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Address
          </InputLabel>
          <CustomTextField
            value={address}
            autoComplete={false}
            type="text"
            error={error}
            message={addressError}
            onChange={(e) => {
              setAddress(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            City
          </InputLabel>
          <CustomTextField
            value={city}
            autoComplete={false}
            type="text"
            error={error}
            message={cityError}
            onChange={(e) => {
              setCity(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Zip Code
          </InputLabel>
          <CustomTextField
            value={zip_code}
            autoComplete={false}
            type="text"
            error={error}
            message={zipCodeError}
            onChange={(e) => {
              setZipCode(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Country
          </InputLabel>
          <CustomTextField
            value={country}
            autoComplete={false}
            type="text"
            error={error}
            message={countryError}
            onChange={(e) => {
              setCountry(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            State
          </InputLabel>
          <CustomTextField
            value={state}
            autoComplete={false}
            type="text"
            error={error}
            message={stateError}
            onChange={(e) => {
              setState(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Contact1
          </InputLabel>
          <CustomTextField
            value={contact1}
            autoComplete={false}
            type="text"
            error={error}
            message={contact1Error}
            onChange={(e) => {
              setContact1(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Contact2
          </InputLabel>
          <CustomTextField
            value={contact2}
            autoComplete={false}
            type="text"
            error={error}
            message={contact2Error}
            onChange={(e) => {
              setContact2(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Referal
          </InputLabel>
          <CustomTextField
            value={referal}
            autoComplete={false}
            type="text"
            error={error}
            message={referalError}
            onChange={(e) => {
              setReferal(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Email
          </InputLabel>
          {console.log("errorMessage2", errorMessage)}
          <CustomTextField
            title={"Email"}
            value={email}
            autoComplete={false}
            type="email"
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
            Password
          </InputLabel>
          <CustomTextField
            title={"Password"}
            value={password}
            autoComplete={false}
            type="password"
            error={error}
            message={passwordError}
            onChange={(e) => {
              setPassword(e.target.value);
              // setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <InputLabel htmlFor="my-input" className="text-black text-12 pt-2">
            Confirm Password
          </InputLabel>

          <CustomTextField
            title={"Password"}
            value={confirm_password}
            autoComplete={false}
            type="password"
            error={error}
            message={conPasswordError}
            onChange={(e) => {
              setConfirm_password(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="d-flex flex-row justify-content-between pt-3">
          <FormControlLabel
            control={
              <Checkbox
                checked={smoker}
                onChange={handleChangeCheckBox}
                name="smoker"
                color="primary"
              />
            }
            label="Smoker"
          />
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

export default ClientRegisteration;
