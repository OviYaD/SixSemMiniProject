import React, { Component } from "react";
import "../Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/home_img.png";
import delivery_icon from "../assets/images/delivery.png";
import drinks_icon from "../assets/images/drinks.png";
import breakfast_icon from "../assets/images/breakfast.png";
import lunch_icon from "../assets/images/lunch.png";
import dinner_icon from "../assets/images/dinner.png";
import nightlife_icon from "../assets/images/nightlife.png";
import cafes_icon from "../assets/images/cafes.png";
import desserts_icon from "../assets/images/desserts.png";
import juices_icon from "../assets/images/juices.png";
import bakery_icon from "../assets/images/bakery.png";
import heading from "./heading.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div className=" home ">
          <div className="container-fluid home-row">
            <div className="row">
              <div className="col-md-5 himg">
                <img src={logo} alt="" />
              </div>
              <div className="col-md-7 home-txt">
                <h1>
                  HEALTHY FOOD. <br /> SIMPLY DELICIOUS.
                </h1>
                <hr className="hr-line" />
                <p className="p-tag" style={{ fontSize: "18px" }}>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae. Aenean eleifend laoreet
                  congue.
                </p>
              </div>
            </div>
            <div className="row search-block">
              <div className="col-md-6">
                <p>FIND THE BEST RESTAURANTS, CAFES, AND BARS IN LONDON</p>
              </div>
              <div className="col-md-3 search-container">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search.." name="search" />

                  {/* <button type="submit">Go</button> */}
                </form>
              </div>
              <div className="col-md-3 location-container">
                <form action="/action_page.php">
                  <input type="text" placeholder="location.." name="search" />

                  {/* <button type="submit">Go</button> */}
                </form>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 home-txt text-center">
                <h1
                  style={{
                    color: "#2a5b6c",
                    letterSpacing: "2px",
                    fontSize: "50px",
                    fontWeight: "501",
                  }}
                >
                  QUICK SEARCHES
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "'PT Sans', sans-serif",
                    letterSpacing: "3px",
                  }}
                >
                  Discover top restaurants by type of meal
                </p>
              </div>
            </div>
            <div className="row" style={{ marginTop: "100px" }}>
              <div
                className="col-md-1  text-center"
                style={{
                  heightMin: "100%",
                  widthMin: "100%",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              >
                <div className="circle">
                  <img
                    src={delivery_icon}
                    alt=""
                    width={"500px"}
                    height={"500px"}
                  />
                  <p>DELIVERY</p>
                </div>
              </div>

              <div
                className="col-md-1  text-center"
                style={{
                  heightMin: "100%",
                  widthMin: "100%",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginLeft: "20px",
                }}
              >
                <div className="circle">
                  <img
                    src={drinks_icon}
                    alt=""
                    width={"500px"}
                    height={"500px"}
                  />
                  <p>DRINKS</p>
                </div>
              </div>
              <div
                className="col-md-1  text-center"
                style={{
                  heightMin: "100%",
                  widthMin: "100%",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginLeft: "20px",
                }}
              >
                <div className="circle">
                  <img
                    src={breakfast_icon}
                    alt=""
                    width={"500px"}
                    height={"500px"}
                  />
                  <p>BREAKFAST</p>
                </div>
              </div>
              <div
                className="col-md-1  text-center"
                style={{
                  heightMin: "100%",
                  widthMin: "100%",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginLeft: "20px",
                }}
              >
                <div className="circle">
                  <img
                    src={lunch_icon}
                    alt=""
                    width={"500px"}
                    height={"500px"}
                  />
                  <p>LUNCH</p>
                </div>
              </div>
              <div
                className="col-md-1  text-center"
                style={{
                  heightMin: "100%",
                  widthMin: "100%",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginLeft: "20px",
                }}
              >
                <div className="circle">
                  <img
                    src={dinner_icon}
                    alt=""
                    width={"500px"}
                    height={"500px"}
                  />
                  <p>DINNER</p>
                </div>
              </div>
              <div
                className="col-md-1  text-center"
                style={{
                  heightMin: "100%",
                  widthMin: "100%",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginLeft: "20px",
                }}
              >
                <div className="circle">
                  <img
                    src={nightlife_icon}
                    alt=""
                    width={"500px"}
                    height={"500px"}
                  />
                  <p>NIGHTLIFE</p>
                </div>
              </div>
              <div
                className="col-md-1  text-center"
                style={{
                  heightMin: "100%",
                  widthMin: "100%",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginLeft: "20px",
                }}
              >
                <div className="circle">
                  <img
                    src={cafes_icon}
                    alt=""
                    width={"500px"}
                    height={"500px"}
                  />
                  <p>CAFES</p>
                </div>
              </div>
              <div
                className="col-md-1  text-center"
                style={{
                  heightMin: "100%",
                  widthMin: "100%",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginLeft: "20px",
                }}
              >
                <div className="circle">
                  <img
                    src={desserts_icon}
                    alt=""
                    width={"500px"}
                    height={"500px"}
                  />
                  <p>DESSERTS</p>
                </div>
              </div>
              <div
                className="col-md-1  text-center"
                style={{
                  heightMin: "100%",
                  widthMin: "100%",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginLeft: "20px",
                }}
              >
                <div className="circle">
                  <img
                    src={juices_icon}
                    alt=""
                    width={"500px"}
                    height={"500px"}
                  />
                  <p>JUICES</p>
                </div>
              </div>
              <div
                className="col-md-1  text-center"
                style={{
                  heightMin: "100%",
                  widthMin: "100%",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginLeft: "20px",
                }}
              >
                <div className="circle">
                  <img
                    src={bakery_icon}
                    alt=""
                    width={"500px"}
                    height={"500px"}
                  />
                  <p>BAKERY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
