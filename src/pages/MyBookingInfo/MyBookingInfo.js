import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";

const MyBookingInfo = () => {
  const { user } = useFirebase();
  const [myBooking, setMyBooking] = useState([]);
  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch(`https://shrieking-ghost-72387.herokuapp.com/allBookingInfo/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, [user?.email,control]);

  const handleDelete = (id) => {
    window.confirm("Are you sure ?");
    fetch(`https://shrieking-ghost-72387.herokuapp.com/deleteMyBooking/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(control);
        }
      });
  };
  const handleStatus = (id) => {
    fetch(`https://shrieking-ghost-72387.herokuapp.com/bookingStatus/${id}`,{
        method:"PUT",
        headers: { "content-type": "application/json" },
    })
    .then((res) => res.json())
    .then((data) =>{
       setConrol(!control)
    })
  
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
          {myBooking?.map((booking, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{booking?.name}</td>
                <td>{booking?.email}</td>
                <td>{booking?.phone}</td>
                <td>{booking?.details}</td>
                <td>{booking?.TicketsType}</td>
                <td>{booking?.date}</td>
                <td>{booking?.message}</td>
                <td>
                  <button  className="statusbtn" onClick={() => handleStatus(booking._id)}>
                    {booking?.status}
                  </button>
                </td>
                <button
                  onClick={() => handleDelete(booking._id)}
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

export default MyBookingInfo;
