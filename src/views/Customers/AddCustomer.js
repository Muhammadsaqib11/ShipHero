import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import CustomTextField from "../../components/CustomTextField";
import CustomeTextArea from "../../components/CustomeTextArea";
import api from "../../apiCalls/api";
import { createNotification } from "../../components/Toast";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
const useStyles = makeStyles({
  Rootcard: {
    minWidth: 275,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const token = localStorage.getItem("JWT");
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

function AddCustomer(props) {
  const customerID = props && props.location && props.location.state;
  console.log("customerID", customerID);
  const classes = useStyles();
  const dispatch = useDispatch();
  const id = localStorage.getItem("UserId");

  console.log("userID", id);
  const [user_id, SetUserId] = useState(id);
  const bull = <span className={classes.bullet}>•</span>;
  const [selectedTab, setSelectedTab] = useState(0);
  const [error, setError] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [FirstnameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameerror] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, serPassword] = useState("");
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");
  const [occupation, setOccupation] = useState("");
  const [occupationError, setOccupationError] = useState("");
  const [contact1, setContact] = useState("");
  const [contact2, setContact2] = useState("");
  const [contact2Error, setContact2Error] = useState("");
  const [contactError, setContactError] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [policyError, setPolicyError] = useState("");
  const [ssn, setSsn] = useState("");
  const [ssnError, setSsnError] = useState("");
  const [referral, setReferalNumber] = useState("");
  const [referalError, setReferalError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [loading, setLoading] = useState(false);
  const [doc_name, setDocName] = useState([]);
  const [picture, setPicture] = useState([]);
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [smoker, setSmoker] = useState(false);
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [zipError, setZipError] = useState("");

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }
  useEffect(() => {
    axios
      .get(`http://192.168.0.119/api/customers/${customerID}/edit`, config)
      .then(function (response) {
        console.log("EditResponse", response.data);
        setFirstName(response.data.message.first_name);
        setLastName(response.data.message.last_name);
        setAge(response.data.message.age);
        setOccupation(response.data.message.occupation);
        setContact(response.data.message.contact1);
        setContact2(response.data.message.contact2);
        setCountry(response.data.message.country);
        setState(response.data.message.state);
        setCity(response.data.message.city);
        setZipCode(response.data.message.zip_code);
        setDob(response.data.message.dob);
        setSmoker(response.data.message.smoker);
        setSsn(response.data.message.ssn);
        setAddress(response.data.message.address);

        // setCustomerDetail(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const AddCustomerForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("age", age);
    formData.append("occupation", occupation);
    formData.append("contact1", contact1);
    formData.append("contact2", contact2);
    formData.append("ssn", ssn);
    formData.append("policyNumber", policyNumber);
    formData.append("referral", referral);
    formData.append("doc_name", doc_name);
    formData.append("picture", picture);
    formData.append("dob", dob);
    formData.append("smoker", smoker);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("smoker", smoker);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("zip_code", zip_code);
    formData.append("user_id", user_id);
    setLoading(true);
    api
      .Addcustomer(formData, config)
      .then((res) => {
        console.log("res", res);
        if (res.data.status === 422) {
          createNotification("error", res.data.message);
          console.log("message", res.data.message);
        } else {
          // dispatch(setAuthInfo(res.data));
          console.log("response", res.data);
          // localStorage.setItem("JWT", res.data.message.token);
          createNotification("success", res.data.message);
          // props.history.push("/");
        }
        // setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        if (err.data.errors.first_name) {
          setError(true);
          setFirstNameError(err.data.errors.first_name[0]);
        }
        if (err.data.errors.last_name) {
          setError(true);
          setLastNameerror(err.data.errors.last_name[0]);
        }
        if (err.data.errors.address) {
          setError(true);
          setAddressError(err.data.errors.address[0]);
        }
        if (err.data.errors.age) {
          setError(true);
          setAgeError(err.data.errors.age[0]);
        }
        if (err.data.errors.city) {
          setError(true);
          setCityError(err.data.errors.city[0]);
        }
        if (err.data.errors.contact1) {
          setError(true);
          setContactError(err.data.errors.contact1[0]);
        }
        if (err.data.errors.dob) {
          setError(true);
          setDobError(err.data.errors.dob[0]);
        }
        if (err.data.errors.occupation) {
          setError(true);
          setOccupationError(err.data.errors.occupation[0]);
        }
        if (err.data.errors.ssn) {
          setError(true);
          setSsnError(err.data.errors.ssn[0]);
        }
        if (err.data.errors.state) {
          setError(true);
          setStateError(err.data.errors.state[0]);
        }
        if (err.data.errors.zip_code) {
          setError(true);
          setZipError(err.data.errors.zip_code[0]);
        }
        setLoading(false);

        // createNotification(
        //   "error",
        //   err.data?.message ?? "Something went wrong please try again later"
        // );
      });
    // }
  };
  const EditCustomerForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("age", age);
    formData.append("occupation", occupation);
    formData.append("contact1", contact1);
    formData.append("contact2", contact2);
    formData.append("ssn", ssn);
    formData.append("policyNumber", policyNumber);
    formData.append("referral", referral);
    formData.append("doc_name", doc_name);
    formData.append("picture", picture);
    formData.append("dob", dob);
    formData.append("smoker", smoker);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("smoker", smoker);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("zip_code", zip_code);
    formData.append("user_id", user_id);
    formData.append("customer_id", customerID);
    setLoading(true);
    axios
      .put(`http://192.168.0.119/api/customers/${customerID}`, formData, config)
      .then(function (response) {
        console.log("CustomerResponse", response);
        if (response.data.status === 422) {
          createNotification("error", response.data.message);
          // console.log("message", res.data.message);
        } else {
          console.log("response", response.data);
          createNotification("success", response.data.message);
        }
      })
      .catch(function (err) {
        console.log(err);
        console.log("err", err);
        if (err.data.errors.first_name) {
          setError(true);
          setFirstNameError(err.data.errors.first_name[0]);
        }
        if (err.data.errors.last_name) {
          setError(true);
          setLastNameerror(err.data.errors.last_name[0]);
        }
        if (err.data.errors.address) {
          setError(true);
          setAddressError(err.data.errors.address[0]);
        }
        if (err.data.errors.age) {
          setError(true);
          setAgeError(err.data.errors.age[0]);
        }
        if (err.data.errors.city) {
          setError(true);
          setCityError(err.data.errors.city[0]);
        }
        if (err.data.errors.contact1) {
          setError(true);
          setContactError(err.data.errors.contact1[0]);
        }
        if (err.data.errors.dob) {
          setError(true);
          setDobError(err.data.errors.dob[0]);
        }
        if (err.data.errors.occupation) {
          setError(true);
          setOccupationError(err.data.errors.occupation[0]);
        }
        if (err.data.errors.ssn) {
          setError(true);
          setSsnError(err.data.errors.ssn[0]);
        }
        if (err.data.errors.state) {
          setError(true);
          setStateError(err.data.errors.state[0]);
        }
        if (err.data.errors.zip_code) {
          setError(true);
          setZipError(err.data.errors.zip_code[0]);
        }
        setLoading(false);
      });

    // }
  };
  function fileChange(evt) {
    const file = evt.target.files[0];
    console.log("file", file);
    setDocName(file);
    // setFile(file)
    console.log("doc_name", doc_name);
  }
  function imageName(evt) {
    const file = evt.target.files[0];
    console.log("file", file);
    setPicture(evt.target.files[0]);
    // setFile(file)
    console.log("doc_name", picture);
  }
  const handleChangeCheckBox = (event) => {
    // setSmoker(event.targer.checked);
    // console.log("smoker", smoker);
    setSmoker(event.target.checked);
    console.log("smoker", smoker);
  };

  return (
    <>
      <div className="row w-full" style={{ margin: "0%" }}>
        <div className="col-lg-12">
          <Card className={classes.Rootcard}>
            <CardContent>
              <Typography className="h2 pt-8" color="textPrimary">
                Add New Customer
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            First Name
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={first_name}
            autoComplete={false}
            type="text"
            error={error}
            message={FirstnameError}
            onChange={(e) => {
              setFirstName(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
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
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Age
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={age}
            autoComplete={false}
            type="text"
            name="age"
            error={error}
            message={ageError}
            onChange={(e) => {
              setAge(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Occupation
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={occupation}
            autoComplete={false}
            type="text"
            name="age"
            error={error}
            message={occupationError}
            onChange={(e) => {
              setOccupation(e.target.value);
              setError(false);
            }}
          />
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Contact
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={contact1}
            autoComplete={false}
            type="text"
            name="contact1"
            error={error}
            message={contactError}
            onChange={(e) => {
              setContact(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Contact2
          </InputLabel>
          <CustomTextField
            title={"Name"}
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
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Country
          </InputLabel>
          <CustomTextField
            title={"Name"}
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
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            State
          </InputLabel>
          <CustomTextField
            value={state}
            autoComplete={false}
            type="text"
            name="state"
            error={error}
            message={stateError}
            onChange={(e) => {
              setState(e.target.value);
              setError(false);
            }}
          />
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            City
          </InputLabel>
          <CustomTextField
            value={city}
            autoComplete={false}
            type="text"
            name="state"
            error={error}
            message={cityError}
            onChange={(e) => {
              setCity(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Zip Code
          </InputLabel>
          <CustomTextField
            value={zip_code}
            autoComplete={false}
            type="text"
            name="state"
            error={error}
            message={zipError}
            onChange={(e) => {
              setZipCode(e.target.value);
              setError(false);
            }}
          />
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            DOB
          </InputLabel>
          <CustomTextField
            value={dob}
            autoComplete={false}
            type="date"
            name="dob"
            error={error}
            message={dobError}
            onChange={(e) => {
              setDob(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="col-lg-6 d-flex flex-row align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Smoker
          </InputLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={smoker}
                onChange={handleChangeCheckBox}
                name="smoker"
                color="primary"
              />
            }
          />
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            SSN
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={ssn}
            autoComplete={false}
            type="text"
            name="ssn"
            error={error}
            message={ssnError}
            onChange={(e) => {
              setSsn(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Policy Number
          </InputLabel>
          <CustomTextField
            title={"Name"}
            value={policyNumber}
            autoComplete={false}
            type="text"
            name="policyNumber"
            error={error}
            message={policyError}
            onChange={(e) => {
              setPolicyNumber(e.target.value);
              setError(false);
            }}
          />
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Referal Number
          </InputLabel>
          <CustomTextField
            value={referral}
            autoComplete={false}
            type="text"
            name="policyNumber"
            error={error}
            message={referalError}
            onChange={(e) => {
              setReferalNumber(e.target.value);
              setError(false);
            }}
          />
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Upload File
          </InputLabel>
          <Button
            variant="contained"
            component="label"
            className="primaryTheme"
          >
            {/* Upload File */}
            <input
              type="file"
              name="doc_name"
              onChange={fileChange}
              multiple={false}
              accept="pdf"
            />
          </Button>
          <span></span>
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8">
            Upload Image
          </InputLabel>
          <Button
            variant="contained"
            component="label"
            className="mueButtonAliegnment primaryTheme"
          >
            Upload Image
            <input
              type="file"
              name="picture"
              onChange={imageName}
              multiple={false}
              accept="jpg/png/jpeg"
              hidden
            />
          </Button>
        </div>
        <div className="col-lg-6 flex sm\:justify-between"></div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-1 d-flex flex-row ">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-16">
            Address
          </InputLabel>
        </div>
        <div
          className="col-lg-11 d-flex flex-row"
          style={{ paddingLeft: "6rem" }}
        >
          <CustomeTextArea
            className={"w-88 TextDescription w-full p-0 m-0"}
            value={address}
            error={error}
            message={addressError}
            onChange={(e) => {
              setAddress(e.target.value);
              setError(false);
            }}
          />
        </div>
      </div>
      <div className="row w-full" style={{ margin: "1%" }}>
        <div className="col-lg-6" />
        <div className="col-lg-3" />
        <div
          className="col-lg-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {customerID ? (
            <Button
              variant="contained"
              color="secondary"
              className="w-1\/4 mr-1 primaryTheme"
              aria-label="LOG IN"
              value="legacy"
              onClick={EditCustomerForm}
            >
              Update
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              className="w-1\/4 mr-1 primaryTheme"
              aria-label="LOG IN"
              value="legacy"
              onClick={AddCustomerForm}
            >
              Save
            </Button>
          )}
          <Button
            variant="contained"
            className="w-1\/4  mt-16 ml-16 secondaryTheme"
            aria-label="LOG IN"
            value="legacy"
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
