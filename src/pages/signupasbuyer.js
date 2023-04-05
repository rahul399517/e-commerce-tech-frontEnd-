/*
                          Thought Note 


This Page provides a way for a user to sign up as a buyer by submitting 
a form with their personal information.                          

This code defines a functional component SignUpasbuyer that renders a form 
for signing up as a buyer. 


I used the React Bootstrap library for styling.


The state of the component is managed using the useState hook. 
'

I defined  several state variables to hold the values of various 
form fields: FullName, Email, Password, City, HomeAddress, State, Country, and Pin.


There is also a state variable Loading that is used to show a spinner while the form
is being submitted.


The signupbuyer function is called when the form is submitted.


It first sets the Loading state to true, then constructs an object requestData with the 
values of the form fields. 


It then sends a POST request to the backend API at ${API_BASE_URL}/signup,
passing the requestData object as the request body.



If the API call is successful (status code 201), the Loading state is set to false and a success
message is displayed using the Swal.fire function from the SweetAlert2 library.
 

The form fields are also reset to their initial values.


If the API call fails, the Loading state is set to false and an error message is displayed using Swal.fire.


*/
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./signupasbuyer";
import { useState } from "react";
import { API_BASE_URL } from "../config";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";
import axios from "axios";
function SignUpasbuyer() {
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
  //Connecting Front end signup for buyer page with Back end
  const signupbuyer = (event) => {
    event.preventDefault();
    SetLoading(true);
    const requestData = {
      FullName: FullName,
      Email,
      Password,
      //ProfileImg,
      City,
      HomeAddress,
      State,
      Country,
      Pin,
    };
    axios
      .post(`${API_BASE_URL}/signup`, requestData)
      .then((result) => {
        // debugger;
        if (result.status === 201) {
          SetLoading(false);
          Swal.fire({
            icon: "success",
            title: "User Successfully Registerd",
          });
        }
        SetFullName("");
        SetEmail("");
        SetPassword("");
        SetCity("");
        SetCountry("");
        SetState("");
        SetPin("");
        SetHomeAddress("");
        //SetProfileImg("");
      })
      .catch((error) => {
        console.log(error);
        SetLoading(false);
        Swal.fire({
          icon: "error",
          title: "Server down,Please try again later",
        });
      });
  };
  return (
    <div className="row">
      <div className="col-md-7 col-sm-12">
        <img
          className="mt-3"
          id="loginphoto"
          style={{ width: "100%" }}
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e1286aba-66c5-4a6e-896d-a4025f2050da.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          alt="Logo not Available"
        ></img>
        <img
          id="loginphoto"
          className="mt-2"
          style={{ width: "100%" }}
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1114faa9-0fcb-4ce5-878c-f94deccc8fb1.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          alt="Logo not Available"
        ></img>
      </div>
      <div className="col-md-5 col-sm-12">
        <Card className="shadow mt-3">
          <Card.Title
            style={{
              fontWeight: "500",
              fontFamily: "georgia",
              textAlign: "center",
            }}
          >
            Sign Up{" "}
          </Card.Title>
          <Card.Body>
            <Form onSubmit={(e) => signupbuyer(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  value={FullName}
                  onChange={(ev) => SetFullName(ev.target.value)}
                  type="text"
                  placeholder="Enter FullName"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  value={Email}
                  onChange={(ev) => SetEmail(ev.target.value)}
                  type="email"
                  placeholder="E mail"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  value={Password}
                  onChange={(ev) => SetPassword(ev.target.value)}
                  type="password"
                  placeholder="Password"
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
                  placeholder="City/Town/village"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Appartment/Suite//Home Address</Form.Label>
                <Form.Control
                  value={HomeAddress}
                  onChange={(ev) => SetHomeAddress(ev.target.value)}
                  type="text"
                  placeholder="Appartment/Suite//Home Address"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>State/Province</Form.Label>
                <Form.Control
                  value={State}
                  onChange={(ev) => SetState(ev.target.value)}
                  type="text"
                  placeholder="State/Province"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  value={Country}
                  onChange={(ev) => SetCountry(ev.target.value)}
                  type="text"
                  placeholder="Country"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Pin/Zip/Postal code</Form.Label>
                <Form.Control
                  value={Pin}
                  onChange={(ev) => SetPin(ev.target.value)}
                  type="text"
                  placeholder="Pin/Zip/Postal code"
                />
              </Form.Group>
              <Button
                className="form-control btn btn-primary"
                variant="primary"
                type="submit"
              >
                signup
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
              {/**Sponner End */}
            </Form>
            <hr></hr>
            <p style={{ textAlign: "center", fontweight: "400" }}>Or</p>
            <hr></hr>
            <span className="text-muted fs-6">Already have an account?</span>
            <Link to="/login" className="ms-1 text-info fw-bold">
              Log In
            </Link>
            <br></br>
            <span className="text-muted fs-6">Want to sell ?</span>
            <Link to="/signupasseller" className="ms-1 text-danger fw-bold ">
              Signup as Seller
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default SignUpasbuyer;
