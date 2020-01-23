import React from "react";
import './App.scss';

function Jumbotron({ children }) {
  return (


    <div style={{ height: 200, clear: "none", paddingTop: 60, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;