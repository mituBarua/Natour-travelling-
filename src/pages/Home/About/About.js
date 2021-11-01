import React from "react";
import './About.css';
import { BsPeopleFill ,BsFillAwardFill,BsEmojiHeartEyesFill} from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
const About = () => {
  return (
    <div className="my-5">
      <div className="achievement-area p-80 mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head pb-30">
                <h5>Why TourX</h5>
                <h2>Why you are travel with tourx</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="achievement-card mt-30">
                <div className="achievement-icon">
                 <BsPeopleFill/>
                </div>
                <h5>2000+ Our worldwide guide</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 wow ">
              <div className="achievement-card mt-30">
                <div className="achievement-icon">
                 <FaHandshake/>
                </div>
                <h5>100% trusted travel agency</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="achievement-card mt-30">
                <div className="achievement-icon">
                <BsFillAwardFill/>
                </div>
                <h5>10+ year of travel experience</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 wow ">
              <div className="achievement-card mt-30">
                <div className="achievement-icon">
                 <BsEmojiHeartEyesFill/>
                </div>
                <h5>90% of our traveller happy</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
