import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CertificateImg from "../../Assets/Img/avatars/certificate.jpg";
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

function Certificate(props) {
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
    props.history.push("/policy-detail");
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
    createData("India", "IN", value),
    createData("China", "CN", value),
    createData("Italy", "IT", value),
    createData("United States", "US", value),
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
                My Certificate00
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-12">
          <div className="w-full" style={{ margin: "1%" }}>
            <img src={CertificateImg} alt="logo" className="w-98" />
          </div>
        </div>
        <div className="col-lg-8" />
        <div className="col-lg-2" />
        <div
          className="col-lg-2 "
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            style={{ width: "50%" }}
            variant="contained"
            className="primaryTheme"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
