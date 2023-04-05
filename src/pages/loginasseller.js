/**                         Thought Note 
 

 The layout and design of the login as seller  page were designed with usability and simplicity in mind.
 
 I wanted to make it easy for users to sign up and log in as seller  to the website without being 
 overwhelmed by too many fields or complicated instructions.

 o	The sign up page consist of a form , with necessary input fields .

 o	A New seller will  register himself/herself on the signup page.

 o	After Signup as seller , person can login to the website.

 o	Rest API is created separately.

 Here I imported  various modules from the "react-bootstrap" library, 
 including Card, Button, Form, and Carousel, to create a Bootstrap-styled 
 login form with an image carousel. It also imports additional modules,
 such as "axios" for handling HTTP requests, "sweetalert2" for displaying 
 alert messages, and "useDispatch" and "useNavigate" from the "react-redux" 
 and "react-router-dom" libraries, respectively.

 */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { API_BASE_URL } from "../config";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";
import axios from "axios";
import "./login.css";
import { useDispatch } from "react-redux";
function LogInAsSeller() {
  //dispatcher
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //decalaring useState
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Loading, SetLoading] = useState(false);
  const loginseller = (event) => {
    event.preventDefault();
    SetLoading(true);
    const requestData = { Email, Password };
    axios
      .post(`${API_BASE_URL}/loginseller`, requestData)
      .then((result) => {
        //debugger;
        if (result.status === 200) {
          SetLoading(false);
          //Swal.fire({
          //icon: "success",
          //title: "User Logged In",
          //});
          localStorage.setItem("token", result.data.result.token);
          localStorage.setItem("user", JSON.stringify(result.data.result.user));
          dispatch({ type: "LOGIN_SUCCESS", payload: result.data.result.user });
          navigate("/profileseller");
        }
        //SetEmail("");
        //SetPassword("");
      })
      .catch((error) => {
        console.log(error);
        SetLoading(false);
        Swal.fire({
          icon: "error",
          title: error.response.data.error,
        });
      });
  };
  return (
    <div className="row">
      <div className="col-md-7 col-sm-12">
        <Carousel className="m-0" id="loginphoto1" fade>
          <Carousel.Item>
            <img
              id="loginphoto1"
              className="d-block w-100"
              src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/7833ed9b-cbe4-4658-b0fd-d4719d1e7622.__CR0,0,1464,600_PT0_SX1464_V1___.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="loginphoto1"
              className="d-block w-100"
              src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/acb3e9e5-79dd-4c69-b652-311ee89bc281.__CR0,0,1464,600_PT0_SX1464_V1___.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="loginphoto1"
              className="d-block w-100"
              src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/0e04217d-2c02-464c-ae41-689659fc1dbc.__CR0,0,1464,600_PT0_SX1464_V1___.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-md-5 col-sm-12">
        <Card className="shadow mt-4" id="formlogin">
          <Card.Title
            style={{
              fontWeight: "500",
              fontFamily: "georgia",
              textAlign: "center",
            }}
          >
            Log In as Seller{" "}
          </Card.Title>
          <Card.Body>
            <Form onSubmit={(e) => loginseller(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={Email}
                  onChange={(ev) => SetEmail(ev.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={Password}
                  onChange={(ev) => SetPassword(ev.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
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
            </Form>
            <hr></hr>
            <p style={{ textAlign: "center", fontweight: "400" }}>Or</p>
            <hr></hr>
            <span className="text-muted fs-6">Want to Sell on Debacle?</span>
            <Link to="/signupasseller" className="ms-1 text-info fw-bold">
              Signup as Seller
            </Link>

            <Link
              to="/login"
              style={{ float: "right" }}
              className="ms-1 text-danger fw-bold "
            >
              LogIn as Buyer
            </Link>
            <span className="text-muted fs-6" style={{ float: "right" }}>
              Are you a seller?
            </span>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default LogInAsSeller;
