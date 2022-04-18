import { InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import {Link } from 'react-router-dom'
import Switch from '@material-ui/core/Switch';


function DynamicVariant() {
  const [inputList, setInputList] = useState([{ Name: "", Sku: "" , Barcode:'' , Price:'', Cost:'' , parl:'' , recordQty:''}]);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { Name: "", Sku: "", Barcode:'', Price:'', Cost:'', parl:'' }]);
  };

  return (
    <div className="App1">
            <div style={{display:'flex', flexDirection:'row', borderBottom:'1px solid gray', padding:'1%' }}>
              <div className="dynamicForm">
              <InputLabel htmlFor="my-input" className="text-black text-12 pt-2  ">
                    Name
                 </InputLabel>
              </div>
              <div className="dynamicForm">
                <InputLabel htmlFor="my-input" className="text-black text-12 pt-2 ml-1 ">
                    Sku
                 </InputLabel>
              </div>
              <div className="dynamicForm">
              <InputLabel htmlFor="my-input" className="text-black text-12 pt-2 pl-3 ">
                    Barcode
                 </InputLabel>

              </div>
              <div className="dynamicForm">
              <InputLabel htmlFor="my-input" className="text-black text-12 pt-2 " style={{paddingLeft:'40%'}}>
              Price
            </InputLabel>
              </div>
              <div className="dynamicForm">
              <InputLabel htmlFor="my-input" className="text-black text-12 pt-2" style={{paddingLeft:'40%'}}>
                Cost
                </InputLabel>
              </div>
              <div className="dynamicForm">
              <InputLabel htmlFor="my-input" className="text-black text-12 pt-2 " style={{paddingLeft:'25%'}}>
              PAR Level	
                 </InputLabel>
              </div>

              <div className="dynamicForm">
              <InputLabel htmlFor="my-input" className="text-black text-12 pt-2 " style={{paddingLeft:'5%'}}>
              Reorder Qty	
                 </InputLabel>
              </div>

              
              <div className="dynamicForm">
              <InputLabel htmlFor="my-input" className="text-black text-12 pt-2 ">
              Track inventory	
                 </InputLabel>
              </div>

          </div>
      {inputList.map((x, i) => {
        return (
          <div style={{display:'flex', flexDirection:'row ',paddingTop:'1%'}}>
              <div className="dynamicForm">
            <input
              name="Name"
              value={x.Name}
              onChange={e => handleInputChange(e, i)}
              className="inputForm"
            />
              </div>
              <div className="dynamicForm">
                 <input
                    className="ml10"
                    name="Sku"
                    value={x.Sku}
                    onChange={e => handleInputChange(e, i)}
                    className="inputForm"
                    />
                <Link className="primary ml-2 textUnderline pb-1 text-12">Generate Sku</Link>
              </div>
              <div className="dynamicForm">
                 <input
                    className="ml10"
                    name="Barcode"
                    value={x.Barcode}
                    onChange={e => handleInputChange(e, i)}
                    className="inputForm"
                    />
              </div>
              <div className="MiniInbox">
            <input
              className="ml10"
              name="Price"
              value={x.Price}
              onChange={e => handleInputChange(e, i)}
              className="inputForm"
            />
                 <Link className="primary ml-2 textUnderline pb-1 text-12" style={{width:'100%', padding:'0%'}}>Generate Price</Link>
              </div>
       
              <div className="MiniInbox">
                 <input
                    className="ml10"
                    name="Cost"
                    value={x.Cost}
                    onChange={e => handleInputChange(e, i)}
                    className="inputForm"
                    />
              </div>
              <div className="MiniInbox">
                 <input
                    className="ml10"
                    name="parl"
                    value={x.parl}
                    onChange={e => handleInputChange(e, i)}
                    className="inputForm"
                    />
              </div>

              <div className="MiniInbox">
                 <input
              className="ml10"
              name="recordQty"
              value={x.recordQty}
              onChange={e => handleInputChange(e, i)}
              className="inputForm"
            />
              </div>

              <div className="MiniInbox">
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              </div>

            <div className="btn-box">
              {inputList.length !== 1 && 
               <button type="button" class="btn btn-light btn-box1 ml-1 mb-2" onClick={() => handleRemoveClick(i)}>Remove</button>
              }
            </div>
          </div>
        );
      })}
      <button type="button" class="btn btn-light btn-box1 ml-1 mb-2" onClick={handleAddClick}>Create Vaariant</button>
       {/* <button onClick={handleAddClick}>Create Vaariant</button> */}
    </div>
  );
}

export default DynamicVariant;
