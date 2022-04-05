import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import AccessibleForwardIcon from "@material-ui/icons/AccessibleForward";
import LocalHospitalSharpIcon from "@material-ui/icons/LocalHospitalSharp";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HomeIcon from "@material-ui/icons/Home";
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

function OtherPolicy(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [selectedTab, setSelectedTab] = useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const policyTableButton = () => {
    console.log("push");
    // console.log("current",currentTarget.value)
    props.history.push("/policies");
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: "policies", label: "Policies", minWidth: 170 },
    { id: "carrier", label: "Carrier", minWidth: 100 },

    {
      id: "action",
      label: "Action",
      minWidth: 170,
      align: "right",
    },
  ];

  const value = (
    <button
      type="button"
      onClick={policyTableButton}
      className="btn btn-outline-success"
    >
      View
    </button>
  );
  console.log("button", value);
  function createData(policies, carrier, action) {
    // const density = population / size;
    return { policies, carrier, action };
  }

  const rows = [
    createData("Health Insurance", "IN", value),
    createData("Auto Insurance", "CN", value),
    createData("Life Insurance", "IT", value),
    createData("Investment", "IT", value),
    createData("Home", "IT", value),
  ];
  function handleTabChange(event, value) {
    setSelectedTab(value);
  }
  return (
    <div animation="transition.expandIn" delay={300}>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-12">
          <Card className={classes.Rootcard}>
            <CardContent>
              <Typography className="h2" color="textPrimary">
                Add Policies
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-4">
          <Card
            className="cardsdiv"
            onClick={() => {
              props.history.push("/health-insurance-form");
            }}
          >
            <CardContent>
              <Typography className="h2 text-danger" color="textPrimary">
                Health Insurance
              </Typography>
              <LocalHospitalSharpIcon className="cardButton text-danger" />
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card
            className="cardsdiv"
            onClick={() => {
              props.history.push("/life-insurance-form");
            }}
          >
            <CardContent>
              <Typography className="h2" color="textPrimary">
                Life Insurance
              </Typography>
              <AccessibleForwardIcon className="cardButton" />
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card
            className="cardsdiv"
            onClick={() => {
              props.history.push("/auto-insurance-form");
            }}
          >
            <CardContent>
              <Typography className="h2 text-primary" color="textPrimary">
                Auto Insurance
              </Typography>
              <DirectionsCarIcon className="cardButton text-primary" />
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-4 pt-2">
          <Card
            className="cardsdiv"
            onClick={() => {
              props.history.push("/investment-insurance-form");
            }}
          >
            <CardContent>
              <Typography className="h2 text-success ">
                Investment Insurance
              </Typography>
              <MonetizationOnIcon className="cardButton text-success" />
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-4 pt-2">
          <Card
            className="cardsdiv"
            onClick={() => {
              props.history.push("/home-insurance-form");
            }}
          >
            <CardContent>
              <Typography className="h2 text-brown">Home Insurance</Typography>
              <HomeIcon className="cardButton text-brown" />
            </CardContent>
          </Card>
        </div>
      </div>
      {/* <div className="row w-98"style={{margin:'1%'}}>
			<div className="col-lg-8"/>
            <div className="col-lg-2"/>
			<div className="col-lg-2 " style={{display:'flex',justifyContent:'flex-end'}}>
				<Button style={{ width: '50%' }} variant="contained" className="primaryTheme">
       			 Cancel
     			</Button>
			</div>
	</div> */}
    </div>
  );
}

export default OtherPolicy;
