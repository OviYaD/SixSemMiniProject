import React from "react";
import "./navbar.css";
import order from "../assets/images/order.gif";
import cart from "../assets/images/my_cart.gif";
import profile from "../assets/images/profile.gif";

// import { Link } from "react-router-dom";
// import { routes } from "../../routes";

function navBar() {
  return (
    <div className="Nav">
      <div style={{ padding: "5px" }}>
        <div className="logo">
          <p>Foods On Hands</p>
        </div>
        <div className="reg_login">
          <button
            style={{
              backgroundColor: "#2a5b6c",
              border: "1px solid #2B84EA",
              color: "white",
              borderRadius: "200px",
              // padding: "10px",
              width: "100%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            <span> Order Food </span>
            <img src={order} alt="" />
          </button>

          <button
            style={{
              backgroundColor: "#ffbd2f",
              border: "1px solid #2B84EA",
              color: "white",
              borderRadius: "200px",
              // padding: "10px",
              width: "100%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            <span style={{ left: "-45px" }}> My Cart </span>
            <img src={cart} alt="" />
          </button>
          {/* <button
            style={{
              backgroundColor: "#f65f73",
              border: "1px solid #2B84EA",
              color: "white",
              borderRadius: "20px",
              width: "100%",
              padding: "10px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          > */}
          <img
            src={profile}
            style={{
              borderRadius: "350px",
              padding: "10px",
              // height: "80px",
              // width: "80px",
              marginTop: "2px",
            }}
            alt=""
          />
          {/* </button> */}
        </div>
      </div>
    </div>
  );
}

export default navBar;
