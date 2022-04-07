import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { withRouter } from "react-router-dom";
import Aux from "../../components/Aux_";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // width:'205%'
  },
}));

function Layout(props) {
  const classes = useStyles();
  console.log("props", props.children);
  return (
    <Aux>
 
 {localStorage.getItem("JWT") ?
 (     
 <div className="wrapper">
 <div id="sideBarContent">
   <Sidebar />
 </div>
 <main className={classes.content} id="content">
     <div className="row"/>
     <div className = "col-lg-12 p-0">
     {props.children}
     </div>
    

   </main>

</div>
):( 
     <main className={classes.content}>
     <div className={classes.toolbar} />
     {props.children}

   </main>
 )
 
 }
   

    </Aux>
  );
}

export default withRouter(Layout);
