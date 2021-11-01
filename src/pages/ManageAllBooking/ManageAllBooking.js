import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./ManageAllBooking.css";

const ManageAllBooking = () => {
  const { user } = useAuth();
  const [allBookingInfo, setAllBookingInfo] = useState([]);
  const [control, setConrol] = useState(false);
  useEffect(() => {
    fetch("https://shrieking-ghost-72387.herokuapp.com/allBookingInfo")
      .then((res) => res.json())
      .then((data) => setAllBookingInfo(data));
  }, [control]);

  const handleDelete = (id) => {
    window.confirm("Are you sure ?");
    fetch(`https://shrieking-ghost-72387.herokuapp.com/deleteBooking/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
  };

  const handleStatus = (id) => {
    fetch(`https://shrieking-ghost-72387.herokuapp.com/bookingStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setConrol(!control);
      });
  };
  return (
    <div>
      <div className="container mt-5">
        <Table striped bordered hover className="cutom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Destination</th>
              <th>Ticket Type</th>
              <th>Date</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {allBookingInfo?.map((singleBook, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{singleBook?.name}</td>
                <td>{singleBook?.email}</td>
                <td>{singleBook?.phone}</td>
                <td>{singleBook?.details}</td>
                <td>{singleBook?.TicketsType}</td>
                <td>{singleBook?.date}</td>
                <td>{singleBook?.message}</td>
                <td>
                  <button
                    className="statusbtn"
                    onClick={() => handleStatus(singleBook._id)}
                  >
                    {singleBook?.status}
                  </button>
                </td>
                <button
                  onClick={() => handleDelete(singleBook._id)}
                  className="deleteBtn p-2"
                >
                  Delete
                </button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageAllBooking;
