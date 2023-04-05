/*
                               Thought Note 

Te UpdateAddressPage component is a functional component that is used to update the user details using an API.

It uses various hooks and libraries to support its functionality.


Here I defined a functional component named UpdateAddressPage that is used to update the user details.


Here I imported  several libraries such as React-Bootstrap, React-Router-Dom, Axios, SweetAlert2,
and Redux to support its functionality.


The component initializes various states using the useState hook, such as FullName, Email, Password, 
City, HomeAddress, State, Country, Pin, and Loading.


I  also defines a configuration object to authorize the user using a bearer token.


Here , component fetches user details using the useEffect hook and the getUserDetails function, which
retrieves the details by making a GET request to the API using the fetch method. 


The user details are then set in the  states using the setState hook.

The component also defines an updatedata function that is used to update the user details using the PUT
 method by making an API request to the server. 
 
 
Upon successful update, a success message is displayed using the SweetAlert2 library. 


The user is then logged out and redirected to the login page.



 */
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams, useNavigate } from "react-router-dom"; //this is used to import the data filled by the user perviously into the user model
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { API_BASE_URL } from "../config";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "./updatepage.css";
function UpdateAddressPage() {
  //setting up use state
  const [FullName, SetFullName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  //const [ProfileImg, SetProfileImg] = useState("");
  const [City, SetCity] = useState("");
  const [HomeAddress, SetHomeAddress] = useState("");
  const [State, SetState] = useState("");
  const [Country, SetCountry] = useState("");
  const [Pin, SetPin] = useState("");
  const [Loading, SetLoading] = useState(false);
  //creating config_obj to configure the authorized user
  const CONFIG_OBJ = {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  //calling  the params

  const params = useParams();
  //calling usenavigate
  const navigate = useNavigate();
  //calling dispatch
  const dispatch = useDispatch();
  //using the use effect
  useEffect(() => {
    console.warn(params);
    getUserDetails();
  }, []); //<-[] means getuserdetails will only once executed
  //getting the user detials
  const getUserDetails = async () => {
    console.log(params);
    let result = await fetch(`${API_BASE_URL}/updatedata/${params.id}`, {
      method: "get",
    });
    result = await result.json();
    console.log(result);
    //now we will pre set the data in the input box of update form ,so that user know what is he/she updating .....
    SetFullName(result.FullName);
    SetEmail(result.Email);
    SetPassword(result.Password);
    SetCity(result.City);
    SetHomeAddress(result.HomeAddress);
    SetState(result.State);
    SetCountry(result.Country);
    SetPin(result.Pin);
  };
  //Update API call
  const updatedata = async () => {
    console.warn(
      FullName,
      Email,
      Password,
      City,
      State,
      HomeAddress,
      Country,
      Pin
    );
    //it is the data that to be requested from the user

    let result = await fetch(`${API_BASE_URL}/updatedata/${params.id}`, {
      method: "put",
      body: JSON.stringify({
        FullName,
        Email,
        Password,
        City,
        State,
        HomeAddress,
        Country,
        Pin,
      }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    //console.log(result);
    //swal custon fire message
    const Toast = Swal.mixin({
      toast: true,
      position: "top-right",
      iconColor: "white",
      customClass: {
        popup: "colored-toast",
      },
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
    });
    await Toast.fire({
      icon: "success",
      title: "update successfull,please login again",
    });
    //swal custon fire message end here

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };
  return (
    <div
      className="Container shadow-lg"
      //style={{ marginLeft: "100px", marginRight: "100px", marginTop: "10px" }}
    >
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <Carousel className="m-0" id="loginphoto" fade>
            <Carousel.Item>
              <img
                id="loginphoto"
                className="d-block w-100"
                src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/7833ed9b-cbe4-4658-b0fd-d4719d1e7622.__CR0,0,1464,600_PT0_SX1464_V1___.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="loginphoto"
                className="d-block w-100"
                src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/acb3e9e5-79dd-4c69-b652-311ee89bc281.__CR0,0,1464,600_PT0_SX1464_V1___.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="loginphoto"
                className="d-block w-100"
                src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0e04217d-2c02-464c-ae41-689659fc1dbc.__CR0,0,1464,600_PT0_SX1464_V1___.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <img
            id="loginphoto"
            className="mt-2"
            style={{ width: "100%" }}
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1114faa9-0fcb-4ce5-878c-f94deccc8fb1.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
            alt="Logo not Available"
          ></img>
        </div>
        <div className="col-md-6 col-sm-12">
          <Card>
            <Card.Header>
              <b>Update Details</b>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  value={FullName}
                  onChange={(ev) => SetFullName(ev.target.value)}
                  type="text"
                  placeholder="Enter New FullName"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  value={Email}
                  onChange={(ev) => SetEmail(ev.target.value)}
                  type="email"
                  placeholder="New E mail"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  value={Password}
                  onChange={(ev) => SetPassword(ev.target.value)}
                  type="password"
                  placeholder=" New Password"
                />
              </Form.Group>

              <p
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontFamily: "georgia",
                }}
              >
                Address
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontFamily: "georgia",
                  color: "blue",
                  fontSize: "small",
                  marginTop: "-20px",
                }}
              >
                Relax you can update Address later
              </p>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>City/Town/village</Form.Label>
                <Form.Control
                  value={City}
                  onChange={(ev) => SetCity(ev.target.value)}
                  type="text"
                  placeholder=" Change City/Town/village"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Appartment/Suite//Home Address</Form.Label>
                <Form.Control
                  value={HomeAddress}
                  onChange={(ev) => SetHomeAddress(ev.target.value)}
                  type="text"
                  placeholder="Change Appartment/Suite//Home Address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>State/Province</Form.Label>
                <Form.Control
                  value={State}
                  onChange={(ev) => SetState(ev.target.value)}
                  type="text"
                  placeholder="Change State/Province"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  value={Country}
                  onChange={(ev) => SetCountry(ev.target.value)}
                  type="text"
                  placeholder=" Change Country"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Pin/Zip/Postal code</Form.Label>
                <Form.Control
                  value={Pin}
                  onChange={(ev) => SetPin(ev.target.value)}
                  type="text"
                  placeholder="Change Pin/Zip/Postal code"
                />
              </Form.Group>
              <Button
                className="form-control btn btn-primary"
                variant="primary"
                onClick={updatedata}
              >
                Update Details
              </Button>
              {/**SPINNER start -- taken from bootstrap*/}
              <br></br>
              {Loading ? (
                <div className="row">
                  <div className="col-sm-12 m-2">
                    <>
                      <Button variant="black" disabled>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                      </Button>{" "}
                      <Button variant="black" disabled>
                        <img
                          style={{ width: "100px", height: "30px" }}
                          src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
                        ></img>
                      </Button>
                    </>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/**Spinner End */}

              <hr></hr>
              <p style={{ textAlign: "center", fontweight: "400" }}>Or</p>
              <hr></hr>
              <span className="text-muted fs-6">Go Back to </span>
              <Link to="/profilebuyer" className="ms-1 text-info fw-bold">
                Profile page
              </Link>
              <br></br>
              <span className="text-muted fs-6">Want to sell ?</span>
              <Link to="/loginseller" className="ms-1 text-danger fw-bold ">
                Go To Seller profile page
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default UpdateAddressPage;
