import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MutiSelect from './MutiSelect'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';




const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    width: '100%',
    color: 'inherit',
    border: " 1px solid rgb(231, 237, 248)"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  NesstedRoot: {
    width: '100%',
    paddingLeft: '3%',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    color: "black"
  },
}));
const CategoryFilter = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openExport, setOpenExport] = React.useState(false);

  const [age, setAge] = React.useState('');

  const handleOpenExport = () => {
    setOpenExport(true);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseExport = () => {
    setOpenExport(false);
  };
  return (
    <div className="filterRowFields">
      <div className="DD_TF">
        <div className="OrdersReportSearch">
          <div className="InputAction__Content">
            <div style={{ width: '20%' }}>
              <select className="form-select filterDD" aria-label="Default select example" >
                <option selected>Shopiy Store</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="input_action_content">
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="settinh">
        <Button
          variant="contained"
          className="DDButton"
          endIcon={<KeyboardArrowDownIcon />}
        >
          Filters
        </Button>
        <Button
          variant="contained"
          className="DDButton"
          startIcon={<ArrowUpwardIcon className="borderBottom" />}
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleOpenExport}
        >
          Export
        </Button>
        <div>
          {openExport ?
            (
              <div style={{ border: '1px solid gray', marginBottom: '2%' }}>
                <ul className="ExportMenu" onMouseLeave={handleCloseExport}>
                  <li className="ListItem">All Orders</li>
                  <li className="ListItem">Visible Rows to CSV</li>
                </ul>
              </div>
            )
            : ''
          }
        </div>
      </div>

      <div>
      </div>

    </div>
  );
}
export default CategoryFilter;