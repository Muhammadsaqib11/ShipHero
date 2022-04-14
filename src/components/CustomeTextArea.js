import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export default function CustomeTextArea(props) {
  const {
    className,
    message,
    error,
    defaultValue,
    errorType = "error",
  } = props;
  return (
    <>
      <div className="form-group w-full">
        <div className="label-error-container">
          {/* <label>{title}</label> */}
        </div>
        {/* <input className="form-control text-10" {...props} /> */}
        <TextareaAutosize
          aria-label="minimum height"
          className={className}
          rowsMin={5}
          variant="outlined"
          {...props}
        />
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
