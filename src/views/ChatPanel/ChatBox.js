



import React from "react";
import './ChatBox.css';
import { Button } from 'reactstrap';

export default ({ text, username, handleTextChange }) => (

  <div>
	  {	console.log("text", text)}
	    		<div className="chatCard-footer">
							<div className="input-group">
								<div className="input-group-append">
									<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
								</div>
								<input
								type="text"
								// value={text}
								name=""
								 className="form-control type_msg"
								 onChange={handleTextChange}
								 onKeyDown={handleTextChange}
								  placeholder="Type your message..."/>
							
								 
								<div className="input-group-append">
									<span className="input-group-text send_btn"><i className="mdi mdi-message-text" style={{fontSize:'35px'}}></i></span>
								</div>
							</div>
						</div>
 
    </div>
);
