/*
                                  Thought Note 
 
This page handles the sign-up form for sellers. 

I imported several components from the React Bootstrap library, as well 
as other dependencies such as Axios and SweetAlert2.


I used the useState hook to manage the form state, such as the user's full
name, email, password, etc. 


When the user submits the form, the signupseller function is called, which 
sends a POST request to the backend API with the user's data.
  

  
If the request is successful (i.e. status code 201), the component displays a success
 message using SweetAlert2. 
 

 
 If there is an error with the request, the component displays an error message.


The SignUpasSeller function is exported so it can be used in other parts of the application.


*/
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./signupasseller.css";
import { useState } from "react";
import { API_BASE_URL } from "../config";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";
import axios from "axios";
function SignUpasSeller() {
  //setting up use state
  const [FullName, SetFullName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Category, SetCategory] = useState("");
  const [Desigination, SetDesigination] = useState("");
  //const [ProfileImg, SetProfileImg] = useState("");
  const [City, SetCity] = useState("");
  const [OfficeAddress, SetOfficeAddress] = useState("");
  const [State, SetState] = useState("");
  const [Country, SetCountry] = useState("");
  const [Pin, SetPin] = useState("");
  const [PanCard, SetPanCard] = useState("");
  const [Loading, SetLoading] = useState(false);
  //Connecting Front end signup for buyer page with Back end
  const signupseller = (event) => {
    event.preventDefault();
    SetLoading(true);
    const requestData = {
      FullName: FullName,
      Email,
      Password,
      Category,
      Desigination,
      //ProfileImg,
      City,
      OfficeAddress,
      State,
      Country,
      Pin,
      PanCard,
    };
    axios
      .post(`${API_BASE_URL}/signupseller`, requestData)
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
        SetCategory("");
        SetDesigination("");
        SetCity("");
        SetCountry("");
        SetState("");
        SetPin("");
        SetOfficeAddress("");
        SetPanCard("");
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
          id="loginphoto"
          className="mt-3"
          style={{ width: "100%" }}
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/30c9d7fa-dc0f-454e-aa27-209bfa9cb08a.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          alt="Logo not Available"
        ></img>
        <img
          className="mt-3"
          id="loginphoto"
          style={{ width: "100%" }}
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e7360f4d-88d4-421d-a3ae-43bd41cd95ac.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          alt="Logo not Available"
        ></img>
        <img
          id="loginphoto"
          className="mt-2"
          style={{ width: "100%" }}
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4c83d1b1-e495-431c-a762-e64f5f29307d.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
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
            Sign Up as Seller{" "}
          </Card.Title>
          <Card.Body>
            <Form onSubmit={(e) => signupseller(e)}>
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
                Business Details
              </p>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category's you deal in</Form.Label>
                <Form.Control
                  value={Category}
                  onChange={(ev) => SetCategory(ev.target.value)}
                  type="text"
                  placeholder="Ex: Laptop,Tablets,Smartwatches,Phones etc"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Desigination</Form.Label>
                <Form.Control
                  value={Desigination}
                  onChange={(ev) => SetDesigination(ev.target.value)}
                  type="text"
                  placeholder="Ex: Owner , C.E.O, Manager ,Wholeseller etc"
                />
              </Form.Group>
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontFamily: "georgia",
                }}
              >
                Business Address
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
                <Form.Label>Office </Form.Label>
                <Form.Control
                  value={OfficeAddress}
                  onChange={(ev) => SetOfficeAddress(ev.target.value)}
                  type="text"
                  placeholder="Office  Address"
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
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontFamily: "georgia",
                }}
              >
                Tax Details
              </p>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PAN Card Number</Form.Label>
                <Form.Control
                  value={PanCard}
                  onChange={(ev) => SetPanCard(ev.target.value)}
                  type="text"
                  placeholder="PAN Card Number"
                />
              </Form.Group>
              <Button
                className="form-control btn btn-primary"
                variant="primary"
                type="submit"
              >
                Sign UP as Seller
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
                          alt="not available"
                        ></img>
                      </Button>
                    </>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/**Spinner End */}
            </Form>
            <hr></hr>
            <p style={{ textAlign: "center", fontweight: "400" }}>Or</p>
            <hr></hr>
            <span className="text-muted fs-6">Already have an account?</span>
            <Link to="/loginasseller" className="ms-1 text-info fw-bold">
              Log In as Seller
            </Link>
            <br></br>
            <span className="text-muted fs-6">New User ?</span>
            <Link to="/signupasbuyer" className="ms-1 text-danger fw-bold ">
              Signup as Buyer
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default SignUpasSeller;
