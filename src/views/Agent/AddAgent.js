import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import CustomTextField from "../../components/CustomTextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import HelpIcon from "@material-ui/icons/Help";
import ReactTooltip from "react-tooltip";
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

function AddAgent(props) {
  const classes = useStyles();
  const customerID = props && props.location && props.location.state;
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [phone1, setPhone1] = useState("");
  const [PhoneNumber1Error, setphoneNumber1Error] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phoneNumber2Error, setPhoneNumber2Error] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [agentImage, setAgentImage] = useState([]);
  const [agentType, setAgentType] = useState("");
  const [agentTypeError, setAgentTypeError] = useState("");
  const [imo, setImo] = useState("");
  const [imoError, setImoError] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [agencyNameError, setAgencyNameError] = useState("");

  function handleChange(evt) {
    const value = evt.target.value;
    setAgentImage(value);

    console.log("state", agentImage);
  }
  function AgentImageHandle(evt) {
    const file = evt.target.files[0];
    console.log("file", file);
    setAgentImage(file);
    // setFile(file)
    console.log("filename", agentImage);
  }
  useEffect(() => {
    axios
      .get(`http://192.168.0.119/api/customers/${customerID}/edit`)
      .then(function (response) {
        console.log("EditResponse", response.data);
        setName(response.data.message.first_name);
        setPhone1(response.data.message.phone1);
        setPhone2(response.data.message.phone2);
        setAddress(response.data.message.address);
        setAgentType(response.data.message.agentType);
        setImo(response.data.message.imo);
        setAgencyName(response.data.message.agencyName);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-12">
          <Card className={classes.Rootcard}>
            <CardContent>
              <Typography className="h2" color="textPrimary">
                Add Agent
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-98 pt-3 pl-5">
        <form className="row w-full">
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Name
              <span>
                <a data-tip="show" data-for="happyFace" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="happyFace" type="error">
                  <span>Enter Agent Name</span>
                </ReactTooltip>
              </span>
            </InputLabel>

            <CustomTextField
              className="mb-16 w-full p-1 customInput p-1"
              type="text"
              name="name"
              // label="First Name"
              value={name}
              variant="outlined"
              o
              error={error}
              message={firstNameError}
              onChange={(e) => {
                setName(e.target.value);
                setError(false);
              }}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Phone 1
              <span>
                <a data-tip data-for="effectiveDate" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="effectiveDate" type="error">
                  <span>Enter Agent Phone Number of Agent</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="date"
              name="phone1"
              label="Last Name"
              value={phone1}
              variant="outlined"
              error={error}
              message={PhoneNumber1Error}
              onChange={(e) => {
                setPhone1(e.target.value);
                setError(false);
              }}
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Phone 2
              <span>
                <a data-tip data-for="DraftDate" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="DraftDate" type="error">
                  <span>Enter Second Phone Number of Agent</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="phone2"
              value={phone2}
              variant="outlined"
              error={error}
              message={phoneNumber2Error}
              onChange={(e) => {
                setPhone2(e.target.value);
                setError(false);
              }}
            />{" "}
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Address
              <span>
                <a data-tip data-for="planName" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="planName" type="error">
                  <span>Enter Current Address of Agent</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="address"
              value={address}
              variant="outlined"
              error={error}
              message={addressError}
              onChange={(e) => {
                setAddress(e.target.value);
                setError(false);
              }}
            />
          </div>
          <div className="col-lg-6 mb-2  d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Agent Type
              <span>
                <a data-tip data-for="planName" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="planName" type="error">
                  <span>Select Agent Type</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <select
              id="cars"
              name="agentType"
              value={agentType}
              className="w-75 text-10 p-1 mb-16"
              error={error}
              message={agentTypeError}
              onChange={(e) => {
                setAgentType(e.target.value);
                setError(false);
              }}
            >
              <option value="1">Please Select</option>
              <option value="2">Independent</option>
              <option value="3">Loa</option>
            </select>
          </div>

          <div className="col-lg-6 d-flex flex-row  align-items-center mb-2">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Agent Image
              <span>
                <a data-tip data-for="RXTire" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="RXTire" type="error">
                  <span>Please Upload Agent Image</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <Button
              variant="contained"
              component="label"
              className="primaryTheme text-14"
            >
              <span className="text-12"> Upload Agent Image</span>

              <input
                type="file"
                name="agentImage"
                onChange={AgentImageHandle}
                multiple={false}
                accept="pdf"
                hidden
              />
            </Button>
          </div>

          <div className="col-lg-6 pt-1 d-flex align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              IMO Name
              <span>
                <a data-tip data-for="NetworkProviderList" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="NetworkProviderList" type="error">
                  <span>Please add IMO Name</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="imo"
              label="Age"
              value={imo}
              variant="outlined"
              error={error}
              message={imoError}
              onChange={(e) => {
                setImo(e.target.value);
                setError(false);
              }}
            />
          </div>
          <div className="col-lg-6 d-flex pt-1 align-items-center">
            <InputLabel htmlFor="my-input" className="text-black text-12 w-25">
              Agency Name
              <span>
                <a data-tip data-for="CarrierPhoneNumber" data-event="click">
                  {" "}
                  <HelpIcon style={{ width: "15px", color: "gray" }} />{" "}
                </a>
                <ReactTooltip id="CarrierPhoneNumber" type="error">
                  <span>Please Add Agency Name</span>
                </ReactTooltip>
              </span>
            </InputLabel>
            <CustomTextField
              className="mb-16 w-full p-1 p-1"
              type="text"
              name="agencyName"
              value={agencyName}
              variant="outlined"
              error={error}
              message={agencyNameError}
              onChange={(e) => {
                setAgencyName(e.target.value);
                setError(false);
              }}
            />
          </div>

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
              Save
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

export default AddAgent;
