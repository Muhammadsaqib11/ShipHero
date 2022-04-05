import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import CustomTextField from "../../../components/CustomTextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import HelpIcon from "@material-ui/icons/Help";
import ReactTooltip from "react-tooltip";

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

function AutoInsuranceForm(props) {
  const classes = useStyles();
  const [NoofCars, setNumberOfcars] = useState();
  const [state, setState] = useState({
    carrier: "",
    effectiveDate: "",
    applicationDate: "",
    draftDate: "",
    billDate: "",
    planName: "",
    monthlyPremium: "",
    insuredName: "",
    policyNumber: "",
    gender: "",
    issueAge: "",
    mailDateToPolicy: "",
    CarrierPhoneNumber: "",
    carrierWebsite: "",
    policy: "",
    premiumType: "",
    coverageStartingDate: "",
    numberOfTickets: "",

    natureOfTickets: "",
    dui: "",
    yearsOfTickets: "",
    numberofAccidents: "",
    accidentType: "",
    YearofAccident: "",
    NoofCars: "",
    year: "",
    make: "",
    model: "",
    InsuranceCompany: "",
    monthlyPremiumCar: "",
    carPremiumType: "",
    NumberOfDrivers: "",
    DriverName: "",
    drivorAge: "",
    DrivorGender: "",
    DrivorContact: "",
    DrivorLicense: "",

    smoker: false,
  });
  const handleChangeCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const CarhandleChange = (evt) => {
    const value = evt.target.value;
    const re = /^[0-9\b]+$/;
    if (evt.target.value === "" || re.test(evt.target.value)) {
      setState({
        ...state,
        NoofCars: value,
      });
    }
  };
  const DriverHandleChange = (evt) => {
    const value = evt.target.value;
    const re = /^[0-9\b]+$/;
    if (evt.target.value === "" || re.test(evt.target.value)) {
      setState({
        ...state,
        NumberOfDrivers: value,
      });
      console.log("state", state.NumberOfDrivers);
    }
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
    console.log("state", NoofCars);
  }
  let CarInfo, DriverInfo;
  DriverInfo = (
    <div className="row w-98 pt-3 pl-2" style={{ margin: "3%" }}>
      <div className="col-lg-12">
        <Card className={classes.Rootcard}>
          <CardContent>
            <Typography className="h2" color="textPrimary">
              Driver Info
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Name
          <span>
            <a data-tip data-for="policy" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="policy" type="error">
              <span>Please Add Driver Name </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <CustomTextField
          className="mb-16 w-full p-1 p-1"
          type="text"
          name="DriverName"
          value={state.DriverName}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Age
          <span>
            <a data-tip data-for="policy" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="policy" type="error">
              <span>Please Add Driver Age </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <CustomTextField
          className="mb-16 w-full p-1 p-1"
          type="text"
          name="drivorAge"
          value={state.drivorAge}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-6 d-flex ">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Gender
          <span>
            <a data-tip data-for="outofpocketcost" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="outofpocketcost" type="error">
              <span>Select Driver Gender </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <select
          id="cars"
          name="DrivorGender"
          // onChange={handleChange}
          value={state.DrivorGender}
          className="w-75 text-10 p-1 mb-16"
          style={{ height: "38px" }}
        >
          <option value="1">Please Select</option>
          <option value="2">Male</option>
          <option value="3">Fe Male</option>
        </select>
      </div>
      <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Contact
          <span>
            <a data-tip data-for="policy" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="policy" type="error">
              <span>Please Add Driver Contact Number </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <CustomTextField
          className="mb-16 w-full p-1 p-1"
          type="text"
          name="DrivorContact"
          value={state.DrivorContact}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Driving License
          <span>
            <a data-tip data-for="policy" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="policy" type="error">
              <span>Please Add Driving License(Optional) </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <CustomTextField
          className="mb-16 w-full p-1 p-1"
          type="text"
          name="DrivorLicense"
          value={state.DrivorLicense}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
    </div>
  );
  var rows = [];
  var DriverRow = [];
  CarInfo = (
    <div className="row w-98 pt-3 pl-2" style={{ margin: "1%" }}>
      <div className="col-lg-12">
        <Card className={classes.Rootcard}>
          <CardContent>
            <Typography className="h2" color="textPrimary">
              Car Info
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Year
          <span>
            <a data-tip data-for="policy" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="policy" type="error">
              <span>Please Add year </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <CustomTextField
          className="mb-16 w-full p-1 p-1"
          type="text"
          name="year"
          value={state.year}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Make
          <span>
            <a data-tip data-for="policy" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="policy" type="error">
              <span>Please Add Make </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <CustomTextField
          className="mb-16 w-full p-1 p-1"
          type="text"
          name="make"
          value={state.make}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Model
          <span>
            <a data-tip data-for="policy" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="policy" type="error">
              <span>Please Add Model </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <CustomTextField
          className="mb-16 w-full p-1 p-1"
          type="text"
          name="model"
          value={state.model}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Insurance Company
          <span>
            <a data-tip data-for="policy" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="policy" type="error">
              <span>Please Add Insurance Company </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <CustomTextField
          className="mb-16 w-full p-1 p-1"
          type="text"
          name="InsuranceCompany"
          value={state.InsuranceCompany}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Monthly Premium
          <span>
            <a data-tip data-for="policy" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="policy" type="error">
              <span>Please Add Monthly Premium </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <CustomTextField
          className="mb-16 w-full p-1 p-1"
          type="text"
          name="MonthlyPremium"
          value={state.MonthlyPremium}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <div className="col-lg-6 d-flex ">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Premium Type
          <span>
            <a data-tip data-for="outofpocketcost" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="outofpocketcost" type="error">
              <span>Select Premium Type </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <select
          id="cars"
          name="premium"
          // onChange={handleChange}
          value={state.premium}
          className="w-75 text-10 p-1 mb-16"
          style={{ height: "38px" }}
        >
          <option value="1">Please Select</option>
          <option value="2">Monthly Premium</option>
          <option value="3">Quarterly Premium</option>
          <option value="4">Annual Premium</option>
        </select>
      </div>
      <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
        <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
          Number of Drivers
          <span>
            <a data-tip data-for="policy" data-event="click">
              {" "}
              <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
            </a>
            <ReactTooltip id="policy" type="error">
              <span>Please Add Number of Drivers </span>
            </ReactTooltip>
          </span>
        </InputLabel>
        <CustomTextField
          className="mb-16 w-full p-1 p-1"
          type="text"
          name="NumberOfDrivers"
          value={state.NumberOfDrivers}
          onChange={DriverHandleChange}
          maxlength="1"
        />
      </div>
      {DriverRow}
    </div>
  );
  for (var i = 0; i < state.NoofCars; i++) {
    rows.push(CarInfo);
  }
  for (var i = 0; i < state.NumberOfDrivers; i++) {
    DriverRow.push(DriverInfo);
  }

  return (
    <div>
      <div className="row w-98" style={{ margin: "3%" }}>
        <div className="col-lg-12">
          <Card className={classes.Rootcard}>
            <CardContent>
              <Typography className="h2" color="textPrimary">
                Auto Insurance Form
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-98 pt-3 pl-5" style={{ margin: "3%" }}>
        <div className="row w-full">
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Carrier
              <span>
                <a data-tip="show" data-for="happyFace" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="happyFace" type="error">
                  <span>Enter Carrier Name</span>
                </ReactTooltip>
              </span>
            </InputLabel>

            <CustomTextField
              className="mb-16 w-full p-1 customInput p-1"
              type="text"
              name="carrier"
              // label="First Name"
              value={state.carrier}
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Effective Date
              <span>
                <a data-tip data-for="effectiveDate" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="effectiveDate" type="error">
                  <span>Enter Effective Date</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="date"
              name="lastname"
              label="Last Name"
              value={state.effectiveDate}
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Application Date
              <span>
                <a data-tip data-for="effectiveDate" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="effectiveDate" type="error">
                  <span>Enter Date When Consumer Apply For Policy</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="date"
              name="applicationDate"
              label="Last Name"
              value={state.applicationDate}
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Draft Date
              <span>
                <a data-tip data-for="DraftDate" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="DraftDate" type="error">
                  <span>Enter Draft Date</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="date"
              name="draftDate"
              value={state.draftDate}
              variant="outlined"
              onChange={handleChange}
            />{" "}
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Bill Date
              <span>
                <a data-tip data-for="outofpocketcost" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="outofpocketcost" type="error">
                  <span>Enter Bill Date When Consumer Pay his/her bill</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="date"
              name="billDate"
              label="State"
              value={state.billDate}
              message={"Min character length is 4"}
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Plan Name
              <span>
                <a data-tip data-for="planName" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="planName" type="error">
                  <span>Enter Plan Name</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="planName"
              label="Address"
              value={state.planName}
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Monthly Premium
              <span>
                <a data-tip data-for="MonthlyPremium" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="MonthlyPremium" type="error">
                  <span>Enter Monthly Premium</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="monthlyPremium"
              value={state.monthlyPremium}
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Insured name
              <span>
                <a data-tip data-for="outofpocketcost" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="outofpocketcost" type="error">
                  <span>Enter Insured name</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="insuredName"
              label="State"
              value={state.insuredName}
              message={"Min character length is 4"}
              variant="outlined"
              onChange={handleChange}
            />
          </div>

          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Policy Number
              <span>
                <a data-tip data-for="outofpocketcost" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="outofpocketcost" type="error">
                  <span>Enter Policy Number</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="policyNumber"
              label="State"
              value={state.policyNumber}
              message={"Min character length is 4"}
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Gender
              <span>
                <a data-tip data-for="outofpocketcost" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="outofpocketcost" type="error">
                  <span>Select Gender</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <select
              id="cars"
              name="gender"
              // onChange={handleChange}
              value={state.gender}
              className="w-75 text-10 p-1 mb-16"
            >
              <option value="1">Please Select</option>
              <option value="2">Male</option>
              <option value="3">Fe Male</option>
            </select>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Issue Age
              <span>
                <a data-tip data-for="effectiveDate" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="effectiveDate" type="error">
                  <span>Enter Age When Policy is Issued</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="issueAge"
              label="Last Name"
              value={state.issueAge}
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Mail date to policy
              <span>
                <a data-tip data-for="NetworkProviderList" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="NetworkProviderList" type="error">
                  <span>Pls Add date </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="date"
              name="maildatetoPolicy"
              value={state.mailDateToPolicy}
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Carrier Phone Number
              <span>
                <a data-tip data-for="CarrierPhoneNumber" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="CarrierPhoneNumber" type="error">
                  <span>Please Add Carrier Phone Number</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="CarrierPhoneNumber"
              value={state.CarrierPhoneNumber}
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Carrier Website
              <span>
                <a data-tip data-for="CarrierWebsite" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="CarrierWebsite" type="error">
                  <span>Please Add Carrier Webiste Linke here</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="carrierWebsite"
              label="SSN"
              value={state.carrierWebsite}
              variant="outlined"
              onChange={handleChange}
            />
          </div>

          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Policy
              <span>
                <a data-tip data-for="policy" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="policy" type="error">
                  <span>Please Add Policy File </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <Button
              variant="contained"
              component="label"
              className="primaryTheme text-14"
            >
              <span className="text-12">Upload Policy</span>
              <input type="file" hidden />
            </Button>
          </div>
          <div className="col-lg-6 d-flex align-items-center"></div>
          <div className="col-lg-6 d-flex">
            <InputLabel
              htmlFor="my-input"
              className="text-black text-12 pt-2 w-25"
            >
              Premium Type
              <span>
                <a data-tip data-for="policy" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="policy" type="error">
                  <span>Click The Checkbox </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.smoker}
                  onChange={handleChangeCheckBox}
                  name="smoker"
                  color="primary"
                />
              }
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Coverage Type
              <span>
                <a data-tip data-for="outofpocketcost" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="outofpocketcost" type="error">
                  <span>Select Coverege Type</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <select
              id="cars"
              name="gender"
              // onChange={handleChange}
              value={state.gender}
              className="w-75 text-10 p-1 mb-16"
            >
              <option value="1">Please Select</option>
              <option value="2">Coverage 1</option>
              <option value="3">Coverage 2</option>
            </select>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Coverage starting date
              <span>
                <a data-tip data-for="effectiveDate" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="effectiveDate" type="error">
                  <span>Enter Coverage starting date </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="date"
              name="lastname"
              label="Last Name"
              value={state.effectiveDate}
              variant="outlined"
            />
          </div>
          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Deductibles
              <span>
                <a data-tip data-for="policy" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="policy" type="error">
                  <span>Please Add Deductibles </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="deductable"
              label="Last Name"
              value={state.deductable}
              variant="outlined"
            />
          </div>
          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Number of Tickets
              <span>
                <a data-tip data-for="policy" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="policy" type="error">
                  <span>Please Add Number of Tickets </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="number"
              name="numberOfTickets"
              label="Last Name"
              value={state.numberOfTickets}
              variant="outlined"
            />
          </div>
          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Nature of Tickets
              <span>
                <a data-tip data-for="policy" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="policy" type="error">
                  <span>Please Add Nature of Tickets </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="natureOfTickets"
              label="Last Name"
              value={state.natureOfTickets}
              variant="outlined"
            />
          </div>
          <div className="col-lg-6 d-flex">
            <InputLabel
              htmlFor="my-input"
              className="text-black text-12 pt-2 w-25"
            >
              DUI
              <span>
                <a data-tip data-for="policy" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="policy" type="error">
                  <span>
                    Please Check or un Check Driving under influence Checkbox{" "}
                  </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.dui}
                  onChange={handleChangeCheckBox}
                  name="dui"
                  color="primary"
                />
              }
            />
          </div>
          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Years of Tickets
              <span>
                <a data-tip data-for="policy" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="policy" type="error">
                  <span>Please Add years of Tickets </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="yearsOfTickets"
              label="Last Name"
              value={state.yearsOfTickets}
              variant="outlined"
            />
          </div>
          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Number of Accidents
              <span>
                <a data-tip data-for="policy" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="policy" type="error">
                  <span>Please Add Number of Accidents </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              value={state.numberofAccidents}
              variant="outlined"
            />
          </div>
          <div className="col-lg-6 d-flex ">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Accident Type
              <span>
                <a data-tip data-for="outofpocketcost" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="outofpocketcost" type="error">
                  <span>Select Accident Type</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <select
              id="cars"
              name="accidentType"
              // onChange={handleChange}
              value={state.accidentType}
              className="w-75 text-10 p-1 mb-16"
              style={{ height: "38px" }}
            >
              <option value="1">Please Select</option>
              <option value="2">Faulty</option>
              <option value="3">Non Faulty</option>
            </select>
          </div>
          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Year of Accident
              <span>
                <a data-tip data-for="policy" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="policy" type="error">
                  <span>Please Add Year of Accident </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="YearofAccident"
              value={state.YearofAccident}
              variant="outlined"
            />
          </div>
          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              No of Cars
              <span>
                <a data-tip data-for="policy" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="policy" type="error">
                  <span>Please Add No of Cars </span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="NoofCars"
              value={state.NoofCars}
              onChange={CarhandleChange}
              maxlength="1"
            />
          </div>
        </div>
      </div>
      {rows}
      {/* {DriverInfo} */}

      <div className="row w-98" style={{ margin: "3%" }}>
        <div className="col-lg-6 d-flex align-items-center" />
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
            // onClick={handleEdit}
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
      </div>
    </div>
  );
}

export default AutoInsuranceForm;
