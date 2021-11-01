import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../Hooks/useFirebase";
import "./OfferDetails.css";
const OfferDetails = (props) => {
  const { user } = useFirebase();
  const { offerId } = useParams();
  const [offerdetails, setOfferdetails] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState("Pending");
  useEffect(() => {
    fetch(`https://shrieking-ghost-72387.herokuapp.com/offerDetails/${offerId}`)
      .then((res) => res.json())
      .then((data) => setOfferdetails(data));
  }, [offerdetails]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    data.status = "Pending";
    data.details = offerdetails?.name;
    fetch("https://shrieking-ghost-72387.herokuapp.com/bookingInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("Added Successfully");
    reset({});
  };

  return (
    <div>
      <div className="details-banner">
        <div className="row container">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="breadcrumb-wrap">
              <h2>Tour Package Details</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row  mt-5">
          <div className="col-md-7">
            <div className="details-info">
              <img src={offerdetails?.image} alt="details-img" />
              <h2 className="mt-5">{offerdetails?.name}</h2>
              <div className="mt-2 d-flex align-items-center justify-content-between">
                <h5>{offerdetails?.pricePerPerson}Per Person</h5>
                <h5>{offerdetails?.duration}</h5>
              </div>
              <div className="overview">
                <h5>Overview</h5>
                <p>{offerdetails?.desc}</p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="login-box  m-auto mt-2">
              <div className="event-box d-flex justify-content-center align-items-center">
                <div className="login-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      {...register("name")}
                      placeholder="Your Full Name"
                      type="text"
                      className="p-2 m-2 w-100"
                    />

                    <input
                      {...register("email")}
                      placeholder={user?.email}
                      type="text"
                      className="p-2 m-2 w-100"
                    />

                    <input
                      {...register("phone")}
                      placeholder="Phone"
                      className="p-2 m-2 w-100"
                      type="text"
                    />
                    <input
                      {...register("details")}
                      placeholder={offerdetails?.name}
                      className="p-2 m-2 w-100"
                      type="text"
                      defaultValue={offerdetails?.name}
                    />

                    <select
                      {...register("TicketsType")}
                      className="p-2 m-2 w-100"
                    >
                      <option value="ticketType">Tickets Type</option>
                      <option value="Travel with Bus">Travel with Bus</option>
                      <option value="Travel with Plane">
                        Travel with Plane
                      </option>
                    </select>
                    <input
                      {...register("date", { required: true })}
                      placeholder="Choose Date"
                      className="p-2 m-2 w-100"
                      type="date"
                    />

                    <textarea
                      {...register("message")}
                      placeholder="Message"
                      className="p-2 m-2 w-100"
                    />

                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <input type="submit" value="Book Now" className="booknow" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
