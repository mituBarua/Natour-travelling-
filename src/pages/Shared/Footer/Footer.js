import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagramSquare,
  FaInvision,
  FaSnapchat,
} from "react-icons/fa";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="web-footer">
      <Container>
        <div>
          <Row className="py-5 ms-5">
            <Col md={3}>
              <img src={logo} alt="logo" />
              <br />
              <br />
              <p>
                Welcome to WellSpring , where studying music and sharing our
                knowledge comes foremost.
              </p>
            </Col>
            <Col md={4}>
              <h2>WORKING HOURS</h2>
              <p>Monday: 10AM - 9PM</p>
              <p>Twesday: 10AM - 9PM</p>
              <p>Wednessday: 10AM - 9PM</p>
              <p>Thursday: 10AM - 9PM</p>
              <p>Friday: 10AM - 9PM</p>
              <p>Saturday: 10AM - 9PM</p>
              <p>Sunday: Closed</p>
            </Col>
            <Col md={4}>
              <h2>Follow Us!!</h2>
              <div className="social">
                <FaFacebook className="social-icon" />
                <FaInstagramSquare className="social-icon" />
                <FaInvision className="social-icon" />
                <FaSnapchat className="social-icon" />
              </div>
            </Col>
          </Row>
          <div class="newsletter-area pt-120">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="newsletter-wrapper">
                    <h2 className="my-2 py-3">Subscribe To Our Newsletter For Latest Update</h2>
                    <form>
                      <div class="input-group newsletter-input">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Your Email"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="copyrigth-area">
                <p>
                  Copyright 2021 <a href="#home">TourX</a> | Develop By{" "}
                  <a href="#home">Mitu</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
