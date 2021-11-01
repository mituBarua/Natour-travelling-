import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Offer.css";
import { BsCalendar2DayFill,BsFillGeoAltFill ,BsStars} from "react-icons/bs";
import { Link } from "react-router-dom";
const Offer = (props) => {
  const { id,name, image, pricePerPerson, duration, rating } = props.offer;
  return (
    <div>
      <Card className="offer-card">
        <Card.Img variant="top" src={image} className="img-fluid"/>
        <Card.Body>
          <div className="price-duration">
            <h5>
              <span>{pricePerPerson}</span>/Per Person
            </h5>
            <h5><BsCalendar2DayFill className="m-2"/>{duration}</h5>
          </div>
          <div className="details">
            <h4> <BsFillGeoAltFill className="me-2"/>{name}</h4>
            <p> <BsStars  className="m-2"/>{rating}Rating</p>
           <Link to={`/offerDetails/${id}`}>
           <Button variant="primary">Book Now</Button>
           </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Offer;
