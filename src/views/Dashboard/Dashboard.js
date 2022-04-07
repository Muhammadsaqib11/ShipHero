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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import revenue from '../../Assets/Img/revenue.png'
import orderShip from '../../Assets/Img/orderShip.png'




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
    // document.getElementById("content").style.width = "150%";
    // document.getElementById("content").style.marginRight = "5%";
    document.getElementById("content").style.marginTop = "2%";
  }, []);
  return (
    <div className="w-full">
      <div className="mt-3">
        <div className="row">
          <div className="col-lg-4">
          <h6 className ="ml-3 startingHeading"  >Get started with stress-free fulfillment</h6>
            </div>
          <div className="col-lg-8"/>
        </div>
      {/* <hr/> */}
        </div>
        <div className="row mt-2" >
        <div className="col-lg-8 borderGray" style={{backgroundColor:"blac"}} >
        <div className="row" >
        <div className="col-lg-3" >
        </div>
        <div className="col-lg-6" >
        <div className="align_center  flexRow mt-4">
        <h5 className ="startingHeading mt-3">Connect Yours</h5>
        <select className="form-select mt-1 dashboardDD" aria-label="Default select example" >
          <option selected>Shopiy Store</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        </div>
</div>
<div className="col-lg-3">
    </div>
        </div>
        <div className="storeFormContainer">
        <span className="hvyap">If you would like to connect an additional Shopify store, go to our ShipHero Fulfillment app page on Shopify App Store and click the install button.</span>
        <button type="button" class="btn btn-primary">Visit Shopify App Store to connect your store</button>

    </div>
        </div>
          <div className="col-lg-4 borderGray pt-4 pl-4" >
          <p className="themeperagrapgh">1. Create Your Account <CheckCircleOutlineOutlinedIcon style={{width:'20px' ,color:'green'}}/></p>
          <p className="themeperagrapgh">2. Connect your store</p>
          <p className="themeperagrapgh">3. Store information setup</p>
          <p className="themeperagrapgh">4. Send products to a warehouse</p>
          <p className="themeperagrapgh"> All done! Start tracking fulfillment</p>
        </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <div className = "flexRowHorizantal">
            <div className="miniCard">
            <img src={revenue} alt="" style={{width:'28%'}}/> 
            <p className="p_black"> Today's Revenue</p>
            
            </div>
            <div className="miniCard">
            <img src={orderShip} alt="" style={{width:'28%'}}/> 
            <p className="p_black"> Today's Revenue</p>
            
            </div>
            <div className="miniCard">
            <img src={revenue} alt="" style={{width:'28%'}}/> 
            <p className="p_black"> Today's Revenue</p>
            
            </div>
           

            </div>

            

          </div>
          <div className="col-lg-6">
          <div className = "flexRowHorizantal">
            <div className="miniCard">
            <img src={revenue} alt="" style={{width:'28%'}}/> 
            <p className="p_black"> Today's Revenue</p>
            
            </div>
            <div className="miniCard">
            <img src={orderShip} alt="" style={{width:'28%'}}/> 
            <p className="p_black"> Today's Revenue</p>
            
            </div>
            <div className="miniCard">
            <img src={revenue} alt="" style={{width:'28%'}}/> 
            <p className="p_black"> Today's Revenue</p>
            
            </div>
           

            </div>

</div>
        </div>
    </div>
  );
}

export default withRouter(Dashboard);
