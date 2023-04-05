/**
                                 Thought Note

The navbar contains links to various pages of a website, such as the home page, product pages, 
and a shopping cart page.


It also displays the user's profile picture, full name, and location, as well as a button to log out.


The component imports various Bootstrap components such as Navbar, Nav, NavDropdown, Badge, and Modal.

It also imports two React hooks, useSelector and useDispatch, which are used to select data from and 
dispatch actions to the Redux store. 

The component also imports the useNavigate hook from React Router, which is used to navigate to different
 pages of the website.

 */
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function TopHeader() {
  // declaring the use state
  const navigate = useNavigate();
  //declaring the useSelector
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };
  // Modal for prfile pic button
  const [cartshow, setcartShow] = useState(false);
  const handlecartClose = () => setcartShow(false);
  // const handlecartShow = () => setcartShow(true);

  //useselector // react hook used to select the data
  const user = useSelector((state) => state.user);
  //dispatcher
  const dispatch = useDispatch();

  //Logout fuctionality
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("react-use-cart");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };
  // Modal for prfile pic button
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //profilepage
  const Profilepage = () => {
    navigate("/profilebuyer");
  };

  //go to search API
  const ToSearch = () => {
    navigate("/searchpage");
  };
  //go to Home API
  const Tohome = () => {
    navigate("/home");
  };
  //go to all product API
  const Toallproduct = () => {
    navigate("/allproduct");
  };
  //go to Laptop APi
  const Tolaptop = () => {
    navigate("/laptop");
  };
  //go to Watches API
  const Towatch = () => {
    navigate("/watches");
  };
  //go to tablets APi
  const Totablet = () => {
    navigate("/tablets");
  };
  //go to smartPhone
  const Tosmartphone = () => {
    navigate("/smartphones");
  };
  //go to electronics API
  const Toelectronics = () => {
    navigate("/electronics");
  };
  return (
    <div>
      {/**top nav bar  */}

      {/**bottom nav bar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
        style={{ height: "70px", zIndex: "10", backgroundColor: "black" }}
      >
        <Navbar.Brand href="#home" onClick={() => Tohome()}>
          Premium Tech{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          Menu &nbsp;<i className="fa-regular fa-square-caret-down"></i>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ backgroundColor: "black", width: "100%" }}
        >
          <Nav className="me-auto">
            <Nav.Link href="/home" onClick={() => Tohome()}>
              Home
            </Nav.Link>
            <Nav.Link href="/allproduct" onClick={() => Toallproduct()}>
              All Product
            </Nav.Link>
            <Nav.Link href="/laptop" onClick={() => Tolaptop()}>
              Laptops
            </Nav.Link>
            <Nav.Link href="/watches" onClick={() => Towatch()}>
              Watches
            </Nav.Link>
            <Nav.Link href="/tablets" onClick={() => Totablet()}>
              Tablets
            </Nav.Link>
            <Nav.Link href="smartphones" onClick={() => Tosmartphone()}>
              Smart Phones
            </Nav.Link>
            <Nav.Link href="/electronics" onClick={() => Toelectronics()}>
              others
            </Nav.Link>
          </Nav>
          <Nav.Item>
            <div className="input-group" style={{ marginTop: "5px" }}>
              <button
                onClick={ToSearch}
                className="btn btn-dark"
                type="button"
                id="button-addon2"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </Nav.Item>

          {localStorage.getItem("token") ? (
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <i
                  style={{ marginTop: "20px", color: "yellow" }}
                  className="fa-solid fa-location-dot"
                >
                  {user.Country}
                </i>
              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                

                <i
                  style={{
                    color: "white",
                    margin: "10px",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                  className="fa-solid fa-truck"
                ></i>
              </Nav.Link> */}
              <Nav.Link href="/cart">
                {" "}
                {/*Shopping cart division */}
                <i
                  style={{
                    color: "white",
                    margin: "10px",
                    cursor: "pointer",
                    padding: "10px",
                  }}
                  className="fa-solid fa-cart-shopping "
                ></i>
                <Badge bg="danger">{getCartCount()}</Badge>
              </Nav.Link>

              <Nav.Link eventKey={2} onClick={handleShow}>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "30px",
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                  src={user.ProfileImg}
                  alt="Profile pic not available"
                />
                <p
                  style={{
                    color: "white",
                    display: "inline",
                    fontWeight: "400",
                    fontFamily: "geogria",
                    marginTop: "14px",
                  }}
                >
                  {" "}
                  {user.FullName}
                </p>
              </Nav.Link>
            </Nav>
          ) : (
            <Nav.Link eventKey={2} href="/login">
              <p
                style={{
                  marginLeft: "10px",
                  padding: "10px",
                  height: "30px",
                  color: "white",
                }}
              >
                Log In&nbsp;
                <i
                  style={{ color: "yellow" }}
                  className="fa-solid fa-square-nfi"
                ></i>
              </p>
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
      {/**Modal for profile pic button */}
      <Modal id="modalglass" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <button
            onClick={() => Profilepage()}
            className="form-control"
            style={{ border: "none" }}
          >
            <img
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "30px",
              }}
              src={user.ProfileImg}
              alt="Profile pic not available"
            />
            <p style={{ color: "Black", display: "inline", fontstyle: "none" }}>
              {" "}
              {user.FullName}
            </p>
          </button>
          <a href="#Nav" onClick={handleClose}>
            <button
              onClick={() => {
                logout();
              }}
              className="form-control"
              style={{ border: "none" }}
            >
              Log Out
            </button>
          </a>
        </Modal.Body>
      </Modal>
      {/**cart modal */}
      <Modal fullscreen="xxl-down" show={cartshow} onHide={handlecartClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center" }}>
            {" "}
            Cart
            {/*Shopping cart division */}
            <i
              style={{
                color: "black",
                margin: "10px",
                cursor: "pointer",
                padding: "10px",
              }}
              className="fa-solid fa-cart-shopping "
            ></i>
            (You have&nbsp;
            <Badge bg="danger">0</Badge> Items in Cart)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <Card className="shadow m-2 p-2">
                {/*Horizontal card*/}
                <p>hi</p>;
              </Card>
            </div>
            <div className="col-md-4 col-sm-12">
              <Card className="shadow m-2 p-2">
                <h6
                  style={{
                    fontFamily: "georgia",
                    color: "blue",
                    display: "inline",
                  }}
                >
                  Price Details
                </h6>
                <hr></hr>
                <p style={{ fontWeight: "700" }}>
                  Total Price :{" "}
                  <p
                    style={{
                      color: "green",
                      display: "inline",
                      float: "right",
                    }}
                  >
                    $ 8,000
                  </p>
                </p>
                <p style={{ fontWeight: "700", display: "inline" }}>
                  Discount &nbsp;&nbsp;&nbsp;:{" "}
                  <p
                    style={{
                      color: "green",
                      display: "inline",
                      float: "right",
                    }}
                  >
                    -$ 2,000
                  </p>
                  <br></br>
                  <br></br>
                  <p style={{ fontWeight: "700", display: "inline" }}>
                    Deleviry Charges :{" "}
                    <p
                      style={{
                        color: "green",
                        display: "inline",
                        float: "right",
                      }}
                    >
                      Free
                    </p>
                  </p>
                </p>
                <hr></hr>
                <p style={{ fontWeight: "700", display: "inline" }}>
                  Total :{" "}
                  <p
                    style={{
                      color: "green",
                      display: "inline",
                      float: "right",
                    }}
                  >
                    $ 6,000
                  </p>
                </p>
                <hr></hr>
                <p
                  style={{
                    fontSize: "small",
                    textAlign: "center",
                    color: "green",
                  }}
                >
                  You will save $ 2,000
                </p>
                <Link to="/placeorder">
                  <button className="form-control btn btn-warning">
                    Place Order
                  </button>
                </Link>
              </Card>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default TopHeader;
