import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CustomTextField from '../../components/CustomTextField'
import CustomeTextArea from '../../components/CustomeTextArea'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import camera from '../../Assets/Img/camera.jpg'

import ImageUpload from './ImageUpload'

import { Link } from 'react-router-dom'
import InputLabel from "@material-ui/core/InputLabel";
import Button from '@material-ui/core/Button';
import itemImage from '../../Assets/itemImage.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '97%',
    paddingLeft: '4%',
    paddingTop: '1%',
    backgroundColor: "#F9FAFC",
  },
}));
const CreateCategory = (props) => {
  const classes = useStyles();
  const [firstName, setFirstName] = React.useState(0);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className={classes.root}>
      <header className="headerCreateOrder">
        <div className="header__row">
          <div className="Texts_Display">
            Create new category
                </div>
        </div>
      </header>
      {/* <Link to="/dashbord/vendors">Vendor</Link> */}
      <div className="row">
        <div className="col-lg-8">
          <section className="leftColumn">
          <section className="eMmHox">
              <div className="fxrGze">
                <div className="card-title">
                  <div className="hPSGav">
                    Category details

                </div>
                </div>
                <div className="dEgCwM">
                  {/* <Button>Add Item</Button> */}
                </div>
              </div>
              <div className="order-detail-wrapper">
                <div className="flex-column w-full">
                  <div className="pt-3 inputBlock">
                    <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                    Category Name


          </InputLabel>
                    <CustomTextField
                      // value={dob}
                      autoComplete={false}
                      type="text"
                      placeholder="Give your vendor a name"
                      dummyClass="w-90"
                    // error={error}
                    // message={dobError}
                    // onChange={(e) => {
                    //   setDob(e.target.value);
                    //   setError(false);
                    // }}
                    />
                  </div>
                  <div className="pt-3 inputBlock">
                    <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                    Category Description

                 </InputLabel>
                    <CustomeTextArea
                      // value={dob}
                      autoComplete={false}
                      type="text"
                      className="w-90 Text-Area-Form"
                    // error={error}
                    // message={dobError}
                    // onChange={(e) => {
                    //   setDob(e.target.value);
                    //   setError(false);
                    // }}
                    />
                  </div>
      
                </div>
              </div>
            </section>
          </section>
        </div>
        <div className="col-lg-4">
          <section className="rightColumn">
            <section className="eMmHox">
              <div className="fxrGze">
                <div className="card-title">
                  <div className="hPSGav">
                  Category Image
                </div>
                </div>
                <div className="dEgCwM">
                  {/* <Button>Add Item</Button> */}
                </div>
              </div>
              <div className="order-detail-wrapper h-50">
                <div className="flex-column w-full ">

               
                  <div className=" inputBlock">
                  <ImageUpload/>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <section className="leftColumn">
          <section className="eMmHox">
              <div className="fxrGze">
                <div className="card-title">
                  <div className="hPSGav">
                  Category Perant Detail

                </div>
                </div>
                <div className="dEgCwM">
                  {/* <Button>Add Item</Button> */}
                </div>
              </div>
              <div className="order-detail-wrapper">
                <div className="flex-column w-full">
                <div className="form_input_block" >
                  <div className="pt-3 twoinputBlock">
                    <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                    Parent Category
                      </InputLabel>
                    <CustomTextField
                      // value={dob}
                      autoComplete={false}
                      type="text"
                      placeholder="Optional"
                      dummyClass="w-90"
                    // error={error}
                    // message={dobError}
                    // onChange={(e) => {
                    //   setDob(e.target.value);
                    //   setError(false);
                    // }}
                    />
                  </div>

                </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div className="col-lg-4 h-30">
      
        </div>
      </div>
    </div>
  );
}
export default CreateCategory;