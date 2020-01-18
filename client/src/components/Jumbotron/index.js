import React from "react";
// import './App.scss';

function Jumbotron({ children }) {
  return (

   
    <div style={{ height: 300, clear: "none", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
