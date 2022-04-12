import React from "react";
import TextField from "@material-ui/core/TextField";

export default function CustomTextField(props) {
  const { label, message, error, defaultValue, errorType  = "error" } = props;
  const { dummyClass  } = props;
  console.log("className", dummyClass)
  return (
    <>
      <div className={`form-group ${dummyClass}`}>
        <div className="label-error-container">
          {/* <label>{title}</label> */}
        </div>
        <input className="form-control text-14" {...props} />
        {/* <TextField
			{...props}
		/> */}
        <div className="w-100 text-center">
          {error && (
            <span
              className={
                errorType !== "success" ? "text-danger" : "text-success"
              }
            >
              {message}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
