/*
                                      Thought Note 

It is a component that creates a PayPal order for a specific product and
allows the user to pay for it.
   
The component imports various dependencies, such as react-bootstrap, react-redux, 
and sweetalert2, and uses the useEffect, useState, useParams, and useNavigate hooks.
   
I  also defines several functions to create the order, check for approval, and handle errors.

Here I imported  useParams  component starts by destructuring the id parameter from the URL .


It also uses the useSelector hook from react-redux to get the user object from the store, which is
 used to configure the authorization headers in the API requests.
*/
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; //this is used to import the data filled by the user perviously into the user model
import axios from "axios";
import { API_BASE_URL } from "../config";
import { CLIENT_ID } from "../config";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function PlaceOrder() {
  //destructe the params
  let { id } = useParams();
  // console.log(id);

  //declaring navgate
  const navigate = useNavigate();
  //selector
  const user = useSelector((state) => state.user);
  //creating config_obj to congigure the authorized user
  const CONFIG_OBJ = {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  //To show profile images

  const [productdetail, setproductdetail] = useState("");
  const GetAllProductDetail = async () => {
    await axios
      .get(`${API_BASE_URL}/product/${id}`, CONFIG_OBJ)
      .then((data) => {
        // console.log(data);

        //Here we want to access the user detail, of which we opend the profile ,
        //since we cannot access it throug setAllOtherUserTweet(data.data.tweets); ,so we created anther useState
        //i.e  const [productdetail, setproductdetail] = useState("");,and now we will access the user details by
        // productdetail.fullname etc in return ()
        setproductdetail(data.data.product);
      });
  };

  useEffect(() => {
    GetAllProductDetail();
  }, []);
  const back = () => {
    navigate(`/productdetails/${id}`);
  };
  // creating paypal order
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: `${productdetail.ProductName}`,
            amount: {
              currency_code: "USD",
              value: `${productdetail.Cost}`,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      Swal.fire({
        title: `Order successful . Your order id is--${orderID}`,
        html: `<img width="400",height="200"src="https://i.pinimg.com/originals/6c/9e/19/6c9e197129299c5af04d8ad1173ad9b9.gif"/>`,
        showCloseButton: true,

        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down",
      });
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [success]);
  return (
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div
            className="card m-3 shadow"
            style={{ maxWidth: "100%", border: "1px solid gray" }}
          >
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={productdetail.Image}
                  className="img-fluid rounded-start"
                  alt={productdetail.ProductName}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{productdetail.ProductName}</h5>
                  <p className="card-text">
                    <p
                      style={{
                        fontSize: "Medium",
                        textAlign: "left",
                        fontWeight: "bold",
                        display: "inline",
                        paddingLeft: "10px",

                        marginLeft: "10px",
                      }}
                    >
                      {" "}
                      Price{" "}
                      <p
                        style={{
                          display: "inline",
                          fontSize: "large",
                          color: "red",
                        }}
                      >
                        $ {productdetail.Cost}
                      </p>
                    </p>
                  </p>
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4" style={{ fontWeight: "700" }}>
                      {" "}
                      Quantity Added :1
                    </div>
                    <div className="col-4"> </div>
                  </div>
                  <br></br>
                  <hr></hr>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <p
                        style={{
                          fontSize: "small",
                          fontWeight: "700",
                          display: "inline",
                          fontFamily: "georgia",
                        }}
                      >
                        Buyer : {user.FullName}
                        <br></br>Town: {user.HomeAddress},<br></br> District :{" "}
                        {user.City}
                        <br></br>State :{user.State}
                        <br></br>Pin-Code : {user.Pin}
                        <br></br>
                        E- mail : {user.Email}
                      </p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="row">
                        <div className="col-12 m-1">
                          <Link to="/profilebuyer">
                            <button className="form-control btn btn-danger">
                              Change Address
                            </button>
                          </Link>
                        </div>
                        <div className="col-12 m-1">
                          <button
                            onClick={() => {
                              back();
                            }}
                            className="form-control btn btn-info"
                          >
                            back to Product
                          </button>
                        </div>
                        <div className="row m-1">
                          <button
                            className="form-control buy btn btn-warning "
                            type="submit"
                            onClick={() => setShow(true)}
                          >
                            Buy now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
        <div className="col-md-4 col-sm-12">
          {/**Cost Details*/}
          <Card className="shadow m-3 p-2" style={{ border: "1px solid gray" }}>
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
              Product Cost:{" "}
              <p style={{ color: "green", display: "inline", float: "right" }}>
                $ {productdetail.Cost}
              </p>
            </p>

            <hr></hr>
            <p style={{ fontWeight: "700", display: "inline" }}>
              Total :{" "}
              <p style={{ color: "green", display: "inline", float: "right" }}>
                $ {productdetail.Cost}
              </p>
            </p>
            <hr></hr>
            {show ? (
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={createOrder}
                onApprove={onApprove}
              />
            ) : null}
            <br></br>
          </Card>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}
export default PlaceOrder;
