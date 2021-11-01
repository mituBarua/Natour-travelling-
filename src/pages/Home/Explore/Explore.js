import React from "react";
import "./Explore.css";
import { BsPlayCircle } from "react-icons/bs";
const Explore = () => {
  return (
    <div className="my-5">
      <section className="peulis-awesome-tour-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="awesome-tour-box">
                <div className="video-btn">
                  <a
                    href="https://www.youtube.com/watch?v=bk7McNUjWgw"
                    className="popup-youtube"
                  >
                    <BsPlayCircle className="play-icon"/>
                  </a>
                </div>
                <h2>Go Ahead &amp; Make Awesome Tour</h2>
                <p>Discover hidden wonders on trips With Peulis</p>
                <a href="#home" className="peulis-btn">
                  Explore More <i className="fa fa-angle-double-right"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
