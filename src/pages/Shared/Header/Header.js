import React from "react";
import { Navbar, Container, Nav, Button, Dropdown } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar sticky="top" variant="light" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ms-auto custom-nav">
              <Nav.Link as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Offers
              </Nav.Link>

              <Nav.Link as={HashLink} to="/contact">
                Contact Us
              </Nav.Link>
              {user?.email ? (
                <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                  className="dropdownBtnClr"
                >
                  Admin
                </Dropdown.Toggle>

                <Dropdown.Menu className="customDropDown">
                  <Dropdown.Item as={HashLink} to="/manageAllBooking" active>
                    All Booking Info
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={HashLink} to="/addService">
                    Add Offer
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as={HashLink} to="/myBooking">
                    My Booking Info
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              ) : ''
             
              }
            

              {!user?.email ? (
                <Nav.Link as={Link} to="/Login">
                  Login
                </Nav.Link>
              ) : (
                <Button onClick={logOut} variant="light">
                  Logout
                </Button>
              )}

              <Navbar.Text className="user-name">
                <a href="#login">{user?.displayName}</a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
