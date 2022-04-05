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

function HomeInsuranceForm(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    phoneNumber1: "",
    phoneNumber2: "",
    age: "",
    dob: "",
    ssn: "",
    occupation: "",
    profileImage: "",
    password: "",
    confirmPassword: "",
    smoker: false,
  });
  return (
    <div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-12">
          <Card className={classes.Rootcard}>
            <CardContent>
              <Typography className="h2" color="textPrimary">
                Home Insurance Form
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-98 pt-3 pl-5">
        <form className="row w-full">
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
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Out of Pocket
              <span>
                <a data-tip data-for="outofpocketcost" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="outofpocketcost" type="error">
                  <span>Enter Out of Pocket Cost</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="outOfPocket"
              label="State"
              value={state.outOfPocket}
              message={"Min character length is 4"}
              variant="outlined"
            />
          </div>
          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              RX Tire
              <span>
                <a data-tip data-for="RXTire" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="RXTire" type="error">
                  <span>Please Upload the RX file in PDF Formate</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <Button
              variant="contained"
              component="label"
              className="primaryTheme text-14"
            >
              <span className="text-12"> Upload RX Tire File</span>

              <input type="file" hidden />
            </Button>
          </div>
          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Summary Of Benefits
              <span>
                <a data-tip data-for="summary" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="summary" type="error">
                  <span>Please Upload the Summary Of Benefits file</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <Button
              variant="contained"
              component="label"
              className="primaryTheme text-14"
            >
              <span className="text-12">Upload Summary Of Benefits File</span>

              <input type="file" hidden />
            </Button>
          </div>
          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Prescription Formulary
              <span>
                <a data-tip data-for="PrescriptionFormulary" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="PrescriptionFormulary" type="error">
                  <span>Please Upload the Prescription Formulary file</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <Button
              variant="contained"
              component="label"
              className="primaryTheme text-14"
            >
              <span className="text-12">
                Upload Prescription Formulary File
              </span>

              <input type="file" hidden />
            </Button>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Network Provider List
              <span>
                <a data-tip data-for="NetworkProviderList" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="NetworkProviderList" type="error">
                  <span>Pls Add Hyperlink of Network Provider List</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="NetworkProviderList"
              label="Age"
              value={state.NetworkProviderList}
              variant="outlined"
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
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Agent Name
              <span>
                <a data-tip data-for="agentName" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="agentName" type="error">
                  <span>Please Add Your Agent Name</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="AgentName"
              label="Occupation"
              value={state.AgentName}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Agent Contact Info
              <span>
                <a data-tip data-for="info" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="info" type="error">
                  <span>Please Add Agent Contact Info</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="AgentContactInfo"
              value={state.AgentContactInfo}
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
        </form>
      </div>
    </div>
  );
}

export default HomeInsuranceForm;
