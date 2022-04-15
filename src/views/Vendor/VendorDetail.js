import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import VendorFilter from './VendorFilter'
import { useHistory } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '97%',
    paddingLeft: '3%',
    backgroundColor: theme.palette.background.paper,
  },

  NesstedRoot: {
    width: '100%',
    paddingLeft: '3%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const CreateOrderHandleChange = () => {
    history.push(`/dashbord/vendors/createvendor`);
  }

  return (
    <div className={classes.root}>
      <header className="headerOrder">
        <div className="header__row">
          <div className="Texts_Display">
            Vendors
          </div>
          <Button variant="contained" color="primary" className="buttonColor" onClick={CreateOrderHandleChange}>
            Create New Vendor
      </Button>

        </div>
      </header>
      <AppBar position="static" color="white" className="AppBarStyle">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Needs Reorder" {...a11yProps(1)} />
          <Tab label="Expected" {...a11yProps(2)} />
          <Tab label="Shipped" {...a11yProps(3)} />
          <Tab label="Returned" {...a11yProps(4)} />
          <Tab label="In Stock" {...a11yProps(5)} />
          <Tab label="Backorder" {...a11yProps(5)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="tabPanalOrchard">
        <VendorFilter />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
