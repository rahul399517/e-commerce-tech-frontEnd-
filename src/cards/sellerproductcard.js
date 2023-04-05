/*                                     Thought Note 
This is  "SellerProductCard" that renders a product card for a seller.

It takes a single object "props" as an argument which contains the data for the product and functions for 
deleting and updating the product.

The component uses Bootstrap for styling and renders a two-column row with a carousel displaying the 
product image in the left column and the product details and action buttons in the right column.


 The product data is passed to the component via props and displayed using JSX.

The "deleteProduct" function passed as a prop is called when the "Delete Product" button is
 clicked 
 */

import React, { useState } from "react";
import "../pages/profileseller.css";

import Badge from "react-bootstrap/Badge";

function SellerProductCard(props) {
  return (
    <div className="row">
      <div className="col-md-6">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/**Slide show  image popups */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={props.productData.Image}
                className="d-block w-100"
                alt="Not available"
              />
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="col-md-6">
        {/*profile pic and username row*/}
        <div className="row mt-2">
          <div className="col-12 d-flex" style={{ paddingLeft: "20px" }}>
            <img
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "30px",
              }}
              className="profilepic"
              alt="profile pic"
              src={props.productData.author.ProfileImg}
            />
            <div
              className=" felx-coloumn justify-content-centre"
              style={{ paddingLeft: "7px" }}
            >
              <h6>{props.productData.author.FullName}</h6>

              <p
                style={{
                  marginTop: "-7px",
                  fontSize: "meduim",
                  textAlign: "left",
                  fontWeight: "700",
                  display: "block",
                  paddingLeft: "0px",
                }}
              >
                {props.productData.ProductName}
              </p>
              <p
                style={{
                  marginTop: "-7px",
                  fontSize: "medium",
                  textAlign: "left",
                  fontWeight: "500",
                  display: "block",
                  paddingLeft: "0px",
                }}
              >
                Brand : {props.productData.Brand}
              </p>
              <p
                style={{
                  marginTop: "-7px",
                  fontSize: "medium",
                  textAlign: "left",
                  fontWeight: "500",
                  display: "block",
                  paddingLeft: "0px",
                }}
              >
                Cost: $ {props.productData.Cost}
              </p>
              <p
                style={{
                  marginTop: "-7px",
                  fontSize: "medium",
                  textAlign: "left",
                  fontWeight: "500",
                  display: "block",
                  paddingLeft: "0px",
                }}
              >
                ({props.productData.Category})
              </p>
              <div
                style={{
                  overflow: "scroll",
                  height: "300px",
                  marginLeft: "40px",
                }}
              >
                <p
                  style={{
                    marginTop: "-7px",
                    fontSize: "medium",
                    textAlign: "left",
                    fontWeight: "400",
                    display: "block",
                    paddingLeft: "0px",
                    color: "orange",
                  }}
                >
                  Description: {props.productData.Description}
                </p>
              </div>
              <h6>
                Exclusive on PremiumTech<Badge bg="danger">New</Badge>
              </h6>
            </div>
          </div>
          {/**Button to delete product */}
          <button
            onClick={() => props.deleteProduct(props.productData._id)}
            style={{
              borderLeft: "none",
              borderRight: "none",
              width: "97%",
              padding: "15px",
            }}
            type="button"
            className="form-control"
            aria-label="Close"
          >
            <i style={{ color: "red" }} className="fa-solid fa-trash"></i>{" "}
            Delete Product
          </button>
          {/**button to add product */}
        </div>
      </div>
    </div>
  );
}
export default SellerProductCard;
