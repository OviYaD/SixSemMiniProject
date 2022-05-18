import React, { Component } from "react";
import img from "../assets/images/delivery.gif";
function introsection() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <img src={img} alt="" width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default introsection;
