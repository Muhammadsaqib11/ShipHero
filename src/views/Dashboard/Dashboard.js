import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Tracking from "./Tracking/Tracking";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DataGrid } from "@material-ui/data-grid";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  { field: "age", headerName: "Age", type: "number", width: 100 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
  { field: "Action", headerName: "Action", width: 100 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionContent: {
    width: "100%",
  },
  stacksMain: {
    width: "98%",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function Dashboard() {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById("content").style.width = "150%";
    document.getElementById("content").style.marginRight = "5%";
    document.getElementById("content").style.marginTop = "2%";



  }, []);
  return (
    <div className="w-full">
     
        <Card className="w-full">
          <CardContent>
            <Typography className="h2" color="textPrimary">
              Dashboard
            </Typography>
          </CardContent>
        </Card>
     
    </div>
  );
}

export default withRouter(Dashboard);
