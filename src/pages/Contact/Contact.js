import React from "react";
import { Form, Button } from "react-bootstrap";
import "../OffersDetails/OfferDetails.css";
import "./Contact.css";
import { BsAlarm } from "react-icons/bs";
const Contact = () => {
  return (
    <div>
      <div className="details-banner">
        <div className="row container">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="breadcrumb-wrap">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <div>
              <h3 className="text-left">Get in Touch</h3>
              <p className="para">
                Suspendisse dolor risus, congue ac diam id, viverra facilisis
                dolor. Cras nec purus sagittis, varius tortor at, maximus erat.
                Sed at tellus id tellus lobortis dictum. Mauris dignissim,
                turpis vitae ullamcorper fermentum, sapien arcu aliquam arcu, in
                viverra quam est ac ex. Cras sed lectus eu.
              </p>
              <ul className="office-clock">
                <li>
                  <div className="clock-icon">
                    <BsAlarm/>
                  </div>
                  <div className="clock-info">
                    <h5>Open Hour</h5>
                    <p>
                      Sat - Thu At <br /> 10.00Am to 10.00PM
                    </p>
                  </div>
                </li>
                <li>
                  <div className="clock-icon">
                  <BsAlarm/>
                  </div>
                  <div className="clock-info">
                    <h5>Close Hour</h5>
                    <p>Friday Office Close</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h3>Contact Us</h3>
              <div>
                <Form className="form-ct">
                  <div className="contact-form">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please Enter Your Name"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" placeholder="Address" />
                    </Form.Group>
                  </div>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Write a Message</Form.Label>
                    <Form.Control
                      placeholder="Write Us"
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>
                  <div className="mb-5">
                    <Button variant="danger">Send Messages</Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
