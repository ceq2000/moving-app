import React from "react";
import './App.scss';

function Jumbotron({ children }) {
  return (

   
    <div style={{ height: 150, clear: "none", paddingTop: 10, paddingBottom: 10, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;