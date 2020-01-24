import React from "react";
import { Alert } from 'react-bootstrap';
import './App.scss';
// @import "./variables.scss";

// import "moving-app/App.scss";
// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />


    </div>
  );
}

// newRoom()
//   let rooms = [];
//   for (let i = 0; i <= this.props.maxValue; i++) {
//     rooms.push(<option key={i} value={i}>{i}</option>);
//     //here I will be creating my options dynamically based on
//     //what props are currently passed to the parent component
//   }
//   return rooms;


// export function onDropdownSelected(e) {
//   console.log("THE VAL", e.target.value);
//   //here you will see the current selected value of the select input
// }

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function ServerError(props) {
  const { axiosError } = props;

  if (!axiosError || !axiosError.response) return null;

  const { statusText, status } = axiosError.response;
  let errorObj;

  if (axiosError.response.data.error) {
    // handle custom error sent back by server
    errorObj = axiosError.response.data.error;
  } else {
    errorObj = axiosError;
  }


  return (
    <Alert variant='danger'>
      {status} {statusText}<br />
      Error Name: {errorObj.name}<br />
      Error Message: {errorObj.message}
    </Alert>
  );
}