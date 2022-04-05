import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
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

function PolicyDetail(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [selectedTab, setSelectedTab] = useState(0);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const PolicyDetailPageTableButton = () => {
    console.log("push");
    props.history.push("/PolicyDetailPage-detail");
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
    <button type="button" className="btn btn-outline-success">
      View
    </button>
  );
  console.log("button", value);
  function createData(policies, carrier, action) {
    // const density = population / size;
    return { policies, carrier, action };
  }
  const rows = [
    createData("Honda", "IN", value),
    createData("Toyota", "CN", value),
    createData("Hondai", "IT", value),
    createData("Suzuki", "US", value),
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
                Policies Detail
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Carrier Name
          </InputLabel>
          <TextField
            id="outlined-size-small"
            defaultValue="saqib"
            variant="outlined"
            size="small"
            className="w-75 inputMarin"
            disabled
          />
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Effective Date
          </InputLabel>
          <TextField
            id="outlined-size-small"
            defaultValue="112233445566"
            variant="outlined"
            size="small"
            className="w-75 inputMarin"
            disabled
          />
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Draft Date
          </InputLabel>
          <TextField
            id="outlined-size-small"
            defaultValue="18/03/2020"
            variant="outlined"
            size="small"
            className="w-75 inputMarin"
            disabled
          />
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Plan Name
          </InputLabel>
          <TextField
            id="outlined-size-small"
            defaultValue="112233445566"
            variant="outlined"
            size="small"
            className="w-75 inputMarin"
            disabled
          />
        </div>
      </div>

      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Monthly Premium
          </InputLabel>
          <TextField
            id="outlined-size-small"
            defaultValue="18/03/2020"
            variant="outlined"
            size="small"
            className="w-75 inputMarin"
            disabled
          />
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Carrier Phone
          </InputLabel>
          <TextField
            id="outlined-size-small"
            defaultValue="112233445566"
            variant="outlined"
            size="small"
            className="w-75 inputMarin"
            disabled
          />
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Carrier website
          </InputLabel>
          <TextField
            id="outlined-size-small"
            defaultValue="18/03/2020"
            variant="outlined"
            size="small"
            className="w-75 inputMarin"
            disabled
          />
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Agent Name
          </InputLabel>
          <TextField
            id="outlined-size-small"
            defaultValue="112233445566"
            variant="outlined"
            size="small"
            className="w-75 inputMarin"
            disabled
          />
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Agent Contact
          </InputLabel>
          <TextField
            id="outlined-size-small"
            defaultValue="18/03/2020"
            variant="outlined"
            size="small"
            className="w-75 inputMarin"
            disabled
          />
        </div>
        <div className="col-lg-6 d-flex flex-row justify-content-between align-items-center">
          <InputLabel htmlFor="my-input" className="text-black pt-8 w-30">
            Policy Shares
          </InputLabel>
          <TextField
            id="outlined-size-small"
            defaultValue="112233445566"
            variant="outlined"
            size="small"
            className="w-75 inputMarin"
            disabled
          />
        </div>
      </div>
      <div className="row w-98" style={{ margin: "1%" }}>
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

export default PolicyDetail;
