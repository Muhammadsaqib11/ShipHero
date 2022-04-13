import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import MailIcon from '@material-ui/icons/MoveToInbox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import LocalOfferTwoToneIcon from '@material-ui/icons/LocalOfferTwoTone';
import CachedTwoToneIcon from '@material-ui/icons/CachedTwoTone';
import MoveToInboxOutlinedIcon from '@material-ui/icons/MoveToInboxOutlined';
import Sidebarlogo from '../../Assets/Img/Sidebarlogo.png'
import shipHero from '../../Assets/Img/shipHero.png'
import vendor from '../../Assets/Img/vendor.png'
import invoice1 from '../../Assets/Img/invoice1.png'
import store from '../../Assets/Img/store.png'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import orders from '../../Assets/Img/orders.png'
import shipment from '../../Assets/Img/shipment.png'
import postHero from '../../Assets/Img/postHero.png'
import { Link } from 'react-router-dom';











import './sidebar-menu.css'
const drawerWidth = 240;
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
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  Nestedroot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  primaryColor:{
    fontSize:'12px',
    color:'#3f51b5',
    fontWeight:'600'
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openReportMenu, setOpenReportMenu] = React.useState(false);




  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickReport = () => {
    setOpenReportMenu(!openReportMenu);
  };

  

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        onMouseOver={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        {/* <div className={classes.toolbar}> */}
        <List>
        <ListItem >
              <ListItemIcon> <img src={Sidebarlogo} alt="" /> </ListItemIcon>
              <ListItemText className={classes.primaryColor}>
                <img src={shipHero} alt=""/> </ListItemText>
            </ListItem>
        </List>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> */}
        {/* </div> */}
        <Divider />
        <List>
        <ListItem  component={Link} to="/dashbord">
              <ListItemIcon> <DashboardIcon color="primary" width="30" /> </ListItemIcon>
              <ListItemText className={classes.primaryColor}> <span className="primaryColor">Dashboard</span></ListItemText>
            </ListItem>
        </List>
  
        
   <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.Nestedroot}
    >

      <ListItem button onClick={handleClickReport}>
        <ListItemIcon>
        <img src={orders} alt="" style={{width:'50%' , color:'darkgray'}}/>

        </ListItemIcon>
        <ListItemText ><span className="defaultColor">Orders</span></ListItemText>
        {openMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openReportMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button component={Link} to="/dashbord/order">
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText > <span className="defaultColor">Orders</span></ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText ><span className="defaultColor">Upload CSV</span></ListItemText>
          </ListItem>
        </List>
      </Collapse>
    </List>
    <List>
        <ListItem component={Link} to="/dashbord/product">
              <ListItemIcon> <LocalOfferTwoToneIcon style={{color:"#8392A7"}} /> </ListItemIcon>
              <ListItemText className={classes.defaultColor}> <span className="defaultColor">Products</span></ListItemText>
            </ListItem>
        </List>
        <List>
        <ListItem >
              <ListItemIcon><img src={shipment} alt="" style={{width:'50%' , color:'darkgray'}}/> </ListItemIcon>
              <ListItemText className={classes.defaultColor} > <span className="defaultColor" >Shipping Plans</span></ListItemText>
            </ListItem>
        </List>
        <List>
        <ListItem >
              <ListItemIcon> <CachedTwoToneIcon style={{color:"#8392A7"}} /> </ListItemIcon>
              <ListItemText  className={classes.defaultColor}> <span className="defaultColor" >Returns</span></ListItemText>
            </ListItem>
        </List>
        <List>
        <ListItem >
              <ListItemIcon>  <img src={postHero} alt="" style={{width:'50%' , color:'darkgray'}}/> </ListItemIcon>
              <ListItemText className={classes.defaultColor}> <span className="defaultColor" >Post Hero</span></ListItemText>
            </ListItem>
        </List>
        <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.Nestedroot}
    >

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <LocalAtmIcon style={{color:"#8392A7"}}/>
        </ListItemIcon>
        <ListItemText ><span className="defaultColor" >Reports</span></ListItemText>
        {openMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button >
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText  className={classes.primaryColor}> <span className="defaultColor" >Shipment</span></ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon> 
            <ListItemText  className={classes.primaryColor}> <span className="defaultColor" >Shipped Item</span></ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText  className={classes.primaryColor}> <span className="defaultColor" >Order Permanently</span></ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText  className={classes.primaryColor}> <span className="defaultColor" >Storage</span></ListItemText>
          </ListItem>
        </List>
      </Collapse>
    </List>
        <List>
        <ListItem >
              <ListItemIcon> <img src={vendor} alt="" style={{width:'45%' , color:'darkgray'}}/> </ListItemIcon>
              <ListItemText className={classes.primaryColor} > <span  className="defaultColor">Vendors</span></ListItemText>
            </ListItem>
        </List>
        <List>
        <ListItem >
              <ListItemIcon> <img src={invoice1} alt="" style={{width:'30%' , color:'darkgray', marginRight:'30%'}}/> </ListItemIcon>
              <ListItemText className={classes.primaryColor} > <span className="defaultColor">Invoices</span></ListItemText>
            </ListItem>
        </List>
        <List>
        <ListItem >
              <ListItemIcon> <img src={store} alt="" style={{width:'45%' , color:'darkgray', marginRight:'30%'}}/> </ListItemIcon>
              <ListItemText className={classes.primaryColor} > <span className="defaultColor">Store</span></ListItemText>
            </ListItem>
        </List>
        <List>
        <ListItem >
              <ListItemIcon> <ChatOutlinedIcon style={{color:"#8392A7"}}/> </ListItemIcon>
              <ListItemText className={classes.primaryColor} > <span className="defaultColor" >Help</span></ListItemText>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
 
    </div>
  );
}