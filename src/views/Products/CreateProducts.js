import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CustomTextField from '../../components/CustomTextField'
import CustomeTextArea from '../../components/CustomeTextArea'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import ImageUpload from './ImageUpload'

import { Link } from 'react-router-dom'
import InputLabel from "@material-ui/core/InputLabel";
import Button from '@material-ui/core/Button';
import itemImage from '../../Assets/itemImage.png'
import DynamicVariant from "./DynamicVariant";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '97%',
    paddingLeft: '4%',
    paddingTop: '1%',
    backgroundColor: "#F9FAFC",
  },
}));
const CreateProducts = (props) => {
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
            Create new Product
                </div>
        </div>
      </header>
      <Link to="/dashbord/order">Products</Link>
      <div className="row">
        <div className="col-lg-8">
          <section className="leftColumn">
          <section className="eMmHox">
              <div className="fxrGze">
                <div className="card-title">
                  <div className="hPSGav">
                    Product  details

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
                    Product name

          </InputLabel>
                    <CustomTextField
                      // value={dob}
                      autoComplete={false}
                      type="text"
                      placeholder="Ex. MO-01"
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
                    Product Description

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
                  <div className="pt-3 inputBlock">
                    <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                    Categories

          </InputLabel>
                    <CustomTextField
                      // value={dob}
                      autoComplete={false}
                      type="text"
                      placeholder="Ex. MO-01"
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
            </section>
          </section>
        </div>
        <div className="col-lg-4">
          <section className="rightColumn">
            <section className="eMmHox">
              <div className="fxrGze">
                <div className="card-title">
                  <div className="hPSGav">
                  Product Images
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
                  Variants & Defaults 

                </div>
                </div>
                <div className="dEgCwM">
                  {/* <Button>Add Item</Button> */}
                </div>
              </div>
              <div className="order-detail-wrapper">
                <div className="flex-column w-full">
                <div className="form_input_block" >
                  <div className="pt-3 twoinputBlockThree">
                  <DynamicVariant/>
                  </div>
                </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div className="col-lg-4 h-30">
          <section className="rightColumn ">
            <section className="eMmHox">
              <div className="fxrGze">
                <div className="card-title">
                  <div className="hPSGav">
                  Notes

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
                    internal notes
                      </InputLabel>
                    <CustomeTextArea
                      // value={dob}
                      autoComplete={false}
                      type="text"
                      className="w-85 Text-Area-Form"
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
      </div>
      <div className="row mt-3">
        <div className="col-lg-8">
          <section className="leftColumn">
            <section className="eMmHox">
              <div className="fxrGze">
                <div className="card-title">
                  <div className="hPSGav">
                  Dimensions
                </div>
                </div>
                <div className="dEgCwM">
                </div>
              </div>
              <div className="bLLHWD">
                <div className="row">
                  <div className="co-lg-12 pl-5">
                    <div className="hPSGav mt-3">
                      
                </div>
                  </div>
                </div>
                <div className="form_input_block" >
                  <div className="pt-3 twoinputBlock">
                    <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                      Width
                      </InputLabel>
                    <CustomTextField
                      // value={dob}
                      autoComplete={false}
                      type="text"
                      placeholder="Width"
                      dummyClass="w-90"
                    // error={error}
                    // message={dobError}
                    // onChange={(e) => {
                    //   setDob(e.target.value);
                    //   setError(false);
                    // }}
                    />
                  </div>
                  <div className="pt-3 twoinputBlock">
                    <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                      Length
                      </InputLabel>
                    <CustomTextField
                      // value={dob}
                      dummyClass="w-90"
                      autoComplete={false}
                      type="text"
                      placeholder="Length"
                    // error={error}
                    // message={dobError}
                    // onChange={(e) => {
                    //   setDob(e.target.value);
                    //   setError(false);
                    // }}
                    />
                  </div>
                </div>

                <div className="form_input_block" >
                  <div className="pt-3 twoinputBlock">
                    <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                    Height

                      </InputLabel>
                    <CustomTextField
                      // value={dob}
                      autoComplete={false}
                      type="text"
                      placeholder="Height"
                      dummyClass="w-95"
                    // error={error}
                    // message={dobError}
                    // onChange={(e) => {
                    //   setDob(e.target.value);
                    //   setError(false);
                    // }}
                    />
                  </div>
                </div>
                <div className="form_input_block" >
                  <div className="pt-3 twoinputBlock">
                    <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                    Unit
                      </InputLabel>
                    <CustomTextField
                      // value={dob}
                      autoComplete={false}
                      type="text"
                      placeholder="Unit"
                      dummyClass="w-95"
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
                  Weight
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
                    Weight value	
                      </InputLabel>
                    <CustomTextField
                      // value={dob}
                      autoComplete={false}
                      type="text"
                      placeholder="Ex. MO-01"
                      dummyClass="w-85"
                    // error={error}
                    // message={dobError}
                    // onChange={(e) => {
                    //   setDob(e.target.value);
                    //   setError(false);
                    // }}
                    />
                  </div>
          
                  <div className=" inputBlock">
                    <div class="form-group w-85">
                      <label for="exampleFormControlSelect1">Unit</label>
                      <select class="form-control " id="exampleFormControlSelect1">
                        <option className="DDOptions">1</option>
                        <option className="DDOptions">2</option>
                        <option className="DDOptions">3</option>
                        <option className="DDOptions">4</option>
                        <option className="DDOptions">5</option>
                      </select>
                    </div>
                  </div>
                </div>



              </div>
            </section>



          </section>
        </div>


      </div>
      <div className="row">
          <div className ="col-lg-6">
          <section className="leftColumn">
          <section className="card_content">
            <div className="fxrGze">
              <div className="card-title">
                <div className="hPSGav">
                Vendors
                </div>
              </div>
              <div className="dEgCwM">
              <Button variant="contained" color="primary">Edit</Button>
              </div>
            </div>
          </section>
        </section>
          </div>
          <div className ="col-lg-6">
          <section className="leftColumn">
          <section className="card_content">
            <div className="fxrGze">
              <div className="card-title">
                <div className="hPSGav">
                Active
                </div>
              </div>
              <div className="dEgCwM">
              <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
      />
              </div>
            </div>
          </section>
        </section>
          </div>


        </div>







    </div>
  );
}
export default CreateProducts;