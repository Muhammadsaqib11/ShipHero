import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CustomTextField from '../../components/CustomTextField'
import {Link} from 'react-router-dom'
import InputLabel from "@material-ui/core/InputLabel";
import Button from '@material-ui/core/Button';
import itemImage from '../../Assets/itemImage.png'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '97%',
      paddingLeft:'4%',
      paddingTop:'1%',
      backgroundColor: "#F9FAFC",
    },
  }));
const CreateOrder = (props) => {
    const classes = useStyles();
    const [firstName, setFirstName] = React.useState(0);
    return (
        <div className={classes.root}>
            <header className="headerCreateOrder">
                <div className="header__row">
                <div className ="Texts_Display">
                   Create new order
                </div>
                </div>
            </header>
        <Link to ="/dashbord/order">Orders</Link>
        <div className="row">
          <div className ="col-lg-8">
          <section className="leftColumn">
          <section className="eMmHox">
            <div className="fxrGze">
              <div className="card-title">
                <div className="hPSGav">
                  Items
                </div>
              </div>
              <div className="dEgCwM">
                <Button>Add Item</Button>


              </div>


            </div>
            <div className="bLLHWD">
              <div className="table-body-wrapper">
                <img src ={itemImage}/>

              </div>
            </div>
          </section>
        </section>
          </div>
          <div className ="col-lg-4">
          <section className="rightColumn">
          <section className="eMmHox">
            <div className="fxrGze">
              <div className="card-title">
                <div className="hPSGav">
                Order details

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
          Order number
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
        <span style={{paddingLeft:'5%', lineHeight:'30px'}}>Order number will be auto-generated if empty</span>
        <div className=" inputBlock">
        <div class="form-group w-85">
          <label for="exampleFormControlSelect1">Shipping method</label>
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

        <div className="row mt-3">
          <div className ="col-lg-8">
          <section className="leftColumn">
          <section className="eMmHox">
            <div className="fxrGze">
              <div className="card-title">
                <div className="hPSGav">
                Customer
                </div>
              </div>
              <div className="dEgCwM">


              </div>


            </div>
            <div className="bLLHWD">
              <div className="row">
               <div className="co-lg-12 pl-5">
               <div className="hPSGav mt-3">
               Shipping information
                </div>
                
                 </div>

              </div>
              <div className="form_input_block" >
              <div className="pt-3 twoinputBlock">
                      <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                      Order number
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
              <div className="pt-3 twoinputBlock">
                      <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                      Order number
                      </InputLabel>
                      <CustomTextField
                        // value={dob}
                        dummyClass="w-90"
                        autoComplete={false}
                        type="text"
                        placeholder="Ex. MO-01"
                        // error={error}
                        // message={dobError}
                        // onChange={(e) => {
                        //   setDob(e.target.value);
                        //   setError(false);
                        // }}
                      />
                  </div>
              </div>
              <div className="form_input_block">
              <div className="pt-3 twoinputBlock">
                      <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                      Company
                      </InputLabel>
                      <CustomTextField
                        // value={dob}
                        autoComplete={false}
                        type="text"
                        placeholder="Ex. MO-01"
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
                      Address
                      </InputLabel>
                      <CustomTextField
                        // value={dob}
                        autoComplete={false}
                        type="text"
                        placeholder="Ex. MO-01"
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
                      Address2
                      </InputLabel>
                      <CustomTextField
                        // value={dob}
                        autoComplete={false}
                        type="text"
                        placeholder="Ex. MO-01"
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
                      City
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
              <div className="pt-3 twoinputBlock">
                      <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                      ZipCode
                      </InputLabel>
                      <CustomTextField
                        // value={dob}
                        dummyClass="w-90"
                        autoComplete={false}
                        type="text"
                        placeholder="Ex. MO-01"
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
                      Phone
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
              <div className="pt-3 twoinputBlock">
                      <InputLabel htmlFor="my-input" className="text-black text-14 pt-2">
                      Email
                      </InputLabel>
                      <CustomTextField
                        // value={dob}
                        dummyClass="w-90"
                        autoComplete={false}
                        type="text"
                        placeholder="Ex. MO-01"
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
          <div className ="col-lg-4">
          <section className="rightColumn">
          <section className="eMmHox">
            <div className="fxrGze">
              <div className="card-title">
                <div className="hPSGav">
                Order details

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
          Company
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
        <span style={{paddingLeft:'5%', lineHeight:'30px'}}>Order number will be auto-generated if empty</span>
        <div className=" inputBlock">
        <div class="form-group w-85">
          <label for="exampleFormControlSelect1">Shipping method</label>
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
       
    


    

        
    </div>
    );
}
export default CreateOrder;