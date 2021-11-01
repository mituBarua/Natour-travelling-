import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Offer from "../Offer/Offer";
import {Row,Col, Container} from 'react-bootstrap';
import './Offers.css';
const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("https://shrieking-ghost-72387.herokuapp.com/allOffer")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);

  return (
    <div id="services" className="offer-title">
      <h6 >Choose Your Package</h6>
      <h3>Select Your Best Package <br/>For Your Travel</h3>
    <Container>
    <Row className="py-3 my-2">
      {offers.map((offer) => (
        <Col md="4" className="my-2">
        <Offer key={offer.id} offer={offer}>
          {offer.length}
        </Offer>
        </Col>
      ))}
      </Row>
    </Container>
    </div>
  );
};

export default Offers;
