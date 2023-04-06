/**
                               Thought Note



I have written a code for a shopping cart feature in a React application using the react-redux library.


To manage the state of the cart, I have used React hooks such as useEffect, useState, useSelector, and 
useDispatch.


I have also used the react-bootstrap and react-router-dom libraries to create a user-friendly interface 
and manage routing between pages.


The code integrates PayPal's payment gateway to enable users to checkout and make payments. 


The most significant part of the code is the integration with PayPal's payment gateway.


To authenticate the application with PayPal, I have used the PayPalScriptProvider component that provides the 
client ID required.


The code includes functions such as createOrder, onApprove, and onError, which handle the creation of an order,
 user approval, and error handling, respectively.


I have made sure to write clear comments explaining the functionality of each component and function, making 
the code well-structured and easy to follow.
    


 */
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CartCard from "../cards/cartcard";
import { addToCart, removeFromCart } from "../action/cartAction";
import "./cart.css";
import { CLIENT_ID } from "../config";
import Swal from "sweetalert2";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function Cart() {
  //Dispatch
  const dispatch = useDispatch();
  //useSelector
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const qtyChangeHandler = (_id, qty) => {
    dispatch(addToCart(_id, qty));
  };
  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
    refreshPage();
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartSubTotal = () => {
    return cartItems.reduce((Cost, item) => item.Cost * item.qty + Cost, 0);
  };

  // creating paypal order
  const [show, setShow] = useState(true);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: `Your cart Items `,
            amount: {
              currency_code: "USD",
              value: `${getCartSubTotal().toFixed(2)}`,
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

  //in below code we created rwo "usestate" :
  //1: below use state is to scroll to top when user click on the card
  const [scrollTop, setScrollTop] = useState(0);
  //2 : below usestate is to auto refresh the page , whenever user click on the page
  const [refresh, setRefresh] = useState(false);
  // 3 : refreshPage is a arrow function which will be called on click of the button,
  // it will execute three following things:
  const refreshPage = () => {
    //below if statement will check wether , the page refershed or not , if not then :
    if (!refresh) {
      //(a) : this code will refersh the page
      //window.location.reload();
       // window.renderReload();  //in render.com , we use this code insted of window.location.reload();//<- not working 
       window.location.href = window.location.origin;
      // (b) : this below code will set the default value if refresh to true , and will stop the page to refresh again
      setRefresh(true);
      //(c) : this below code will scroll the page to top ,after pafe gets refreshed by executing useEffrct code , which declared below
      setScrollTop(0);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  }, [scrollTop]);

  return (
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <div className="row">
        <div className="col-md-8 col-sm-12">
          {cartItems.length === 0 ? (
            <div>
              <Card
                className=""
                style={{
                  marginTop: "40px",
                  marginLeft: "10px",
                }}
              >
                <Card.Body>
                  {" "}
                  <h4>
                    Your cart is empty
                    <Link to="/allproduct">&nbsp;Go Back</Link>
                  </h4>
                  <div className="row">
                    <div className="col-sm-12">
                      <img
                        id="kitty"
                        src="https://images.squarespace-cdn.com/content/v1/54ac32ece4b010b9ae3df456/1582066388308-ISH0M7BEAZZXK2SJ7C41/cg00%23%23-laserpointer-FLASH-v0001ForGif.gif"
                        alt="not available"
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartCard
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler}
              />
            ))
          )}
        </div>
        <div className="col-md-4 col-sm-12">
          {/**Cost Details*/}
          <Card
            style={{
              marginBottom: "360px",
              marginLeft: "5px",
              marginRight: "10px",
              marginTop: "10px",
              border: "1px solid gray",
            }}
            className="shadow  p-2"
          >
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
              Total Price of ({getCartCount()}) Items :{" "}
              <p
                style={{
                  color: "green",
                  display: "inline",
                  float: "right",
                }}
              >
                $ {getCartSubTotal().toFixed(2)}
              </p>
            </p>
            <p style={{ fontWeight: "700", display: "inline" }}>
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
                $ {getCartSubTotal().toFixed(2)}
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
          </Card>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}
export default Cart;
