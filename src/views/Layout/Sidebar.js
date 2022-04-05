import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../Assets/Img/logo.png";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import $ from "jquery";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

import "./sidebar-menu.css";

const localData = localStorage.getItem("userStatus");
const rankingData = JSON.parse(localData);

const userData = localStorage.getItem("userInfo");
const getUserInfo = JSON.parse(userData);
function Sidebar(props) {
  const [email_menu, setEmail_menu] = useState(true);
  const [dashboard_menu, setDashboard_menu] = useState(true);
  const [sidebarState, setSidebarState] = useState(true);

const OnClose =()=>{
  console.log("SIDEBAR", sidebarState);
  setSidebarState(true)
  if(sidebarState){
    document.getElementById("sidebar").style.marginLeft = "-180px";
  }
}
const OnOpen =()=>{
  console.log("close")
    document.getElementById("sidebar").style.marginLeft = "-0px";
  
}

  useEffect(() => {
    setSidebarState(true)
    if(sidebarState){
      document.getElementById("sidebar").style.marginLeft = "-180px";
    }
  });
  function logoutFunction() {
    localStorage.clear();
    localStorage.removeItem("JWT");
    localStorage.removeItem("SidebarData");
    localStorage.removeItem("form");
    props.history.push("/login");
  }
  function closeNav() {
    document.getElementById("sidebar").style.backgroundColor = "white";
  }

  return (
    <div class="sidebar" id="sidebar" onMouseOver={OnOpen}>

    <ul class="sidebar-nav" >
        <li>
       
          <Link id="navbar-toggle" className="collapsileNavbar" > Close 
        <span > <MenuIcon /> </span>
         
          </Link>
         
            
        </li>
        <li>
            <a href="#">Home </a>
        </li>
        <li>
            <a href="#">Download<i class="fa fa-download menu-icon fa-2x" aria-hidden="true"></i></a>
        </li>
        <li>
            <a href="#">Edit<i class="fa fa-cog menu-icon fa-2x" aria-hidden="true"></i></a>
        </li>
        <li>
            <a href="#">log out<i class="fa fa-sign-out menu-icon fa-2x" aria-hidden="true"></i>
                </a>
        </li>

    </ul>
</div>
   
  );
}

export default withRouter(Sidebar);
