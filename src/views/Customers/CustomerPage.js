import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { AutoSizer } from "react-virtualized";
import CustomerTable from "./tabs/CustomerTable";
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

function CustomerPage(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }
  function handleRedirect() {
    console.log("redirexrt");
    props.history.push("/add-customers");
  }
  return (
    <>
      <div className="row w-98" style={{ margin: "1%" }}>
        <div className="col-lg-12">
          <Card className={classes.Rootcard}>
            <CardContent>
              <Typography className="h2 pt-8" color="textPrimary">
                Customers
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-6" />
        <div className="col-lg-2" />
        <div
          className="col-lg-12"
          style={{
            paddingRight: "3%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            className="w-1\/4 primaryTheme mt-16"
            aria-label="LOG IN"
            value="legacy"
            onClick={handleRedirect}
          >
            Add Customer
          </Button>
        </div>
        <div className="col-lg-12 w-90">
          <CustomerTable />
        </div>
        <div className="col-lg-8" />
        <div
          className="col-lg-4 my-16 d-flex"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button style={{ width: "50%" }} variant="contained" color="primary">
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}

export default CustomerPage;
