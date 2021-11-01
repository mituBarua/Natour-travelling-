import React from "react";
import { Button, Carousel, Dropdown } from "react-bootstrap";
import img1 from "../../../images/banner/banner-1.png";
import img2 from "../../../images/banner/banner-3.png";
import img3 from "../../../images/banner/banner-4.png";

import "./Banner.css";
const Banner = () => {
  return (
    <div >
      <Carousel fade className="custom-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h1>Amazing Tour Hampishire</h1>
            <p> 7 days,8 Night Tour</p>
            <Button className="banner-btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h1>Amazing Tour in Indonesia</h1>
            <p>7 days,8 Night Tour</p>
            <Button className="banner-btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h1>Amazing Tour in Madagascar</h1>
            <p>7 days,8 Night Tour</p>
            <Button className="banner-btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="find-form">
        <div className="container">
          <div className="find-form-wrapper">
            <div className="row">
              <div class="col-lg-3">
                <input type="text" name="whereto" placeholder="Where To..." />
              </div>
              <div class="col-lg-3">
                <input
                  type="date"
                  name="check-in"
                  class="input-field check-in hasDatepicker"
                  placeholder="dd-mm-yy"
                />
              </div>
              <div class="col-lg-3">
                {/* <div class="custom-select">
                  <select>
                    <option value="0">Travel Type</option>
                    <option value="1">City Tours</option>
                    <option value="2">Vacation Tours</option>
                    <option value="3">Couple Tours </option>
                    <option value="4">Adventure Tours</option>
                    <option value="5">Group Tours</option>
                  </select>
                  <div class="select-selected select-arrow-active">
                    Travel Type
                  </div>
                  <div class="select-items">
                    <div>City Tours</div>
                    <div>Vacation Tours</div>
                    <div>Couple Tours </div>
                    <div>Adventure Tours</div>
                    <div>Group Tours</div>
                  </div>
                </div> */}
                <Dropdown className="custom-dropdown">
                  <Dropdown.Toggle
                    className="toggle-dropdown"
                    id="dropdown-basic"
                  >
                    Travel Type
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">City Tours</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Vacation Tours</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Couple Tours</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Adventure Tours</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Group Tours</Dropdown.Item>
                    
                    
                    <Dropdown.Item href="#/action-3">
                      Vacation Tours
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div class="col-lg-3">
                <div class="find-btn">
                  <a href="#btn" className="btn-second">
                    <i class="bx bx-search-alt"></i> Find now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
