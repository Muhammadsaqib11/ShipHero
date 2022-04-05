import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { withRouter } from "react-router-dom";
import Aux from "../../components/Aux_";

function Layout(props) {
  console.log("props", props.children);
  return (
    <Aux>
 
 {localStorage.getItem("JWT") ?
 (     <div className="wrapper">
 <div id="sideBarContent">
   <Sidebar />
 </div>
 <div id="content">
   {/* <Header /> */}
   {props.children}
 </div>
</div>):( <div id="content">
   {/* <Header /> */}
   {props.children}
 </div>)
 
 }
   

    </Aux>
  );
}

export default withRouter(Layout);
