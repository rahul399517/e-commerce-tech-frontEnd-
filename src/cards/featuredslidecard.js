/*
              Thought Note :
 
This code defines a React card called FeaturedSlideCard.

This featured slide card can be seen in carausal compnent for featured slide 

 It imports Card and Badge components from react-bootstrap, 
as well as the useEffect hook and useNavigate hook from 
react-router-dom.

It also imports two CSS files.
 

*/
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import { useEffect } from "react";
import "./featuredslidecard.css";
import "./categorycard.css";
import { useNavigate } from "react-router-dom";

function FeaturedSlideCard(props) {
  //use navigate
  const navigate = useNavigate();

  //console.log(user._id);
  //console.log(props.postData.author);
  useEffect(() => {}, []);

  const productdetails = () => {
    navigate(`/productdetails/${props.productData._id}`);
    // console.log(props.productData);
  };
  return (
    <div>
      <Card
        id="featuredslidecard"
        onClick={() => {
          productdetails();
        }}
      >
        <p style={{ textAlign: "center" }}>
          <h6>
            Get 40% off Now<Badge bg="secondary">New</Badge>
          </h6>
        </p>
        <Card.Img
          style={{ position: "absolute", top: "70px" }}
          variant="top"
          src={props.productData.Image}
        />

        <Card.Title style={{ position: "absolute", bottom: "3px" }}>
          <p style={{ textAlign: "center", fontWeight: "400" }}>Product name</p>
          <p
            className="small "
            style={{
              fontSize: "small",
              textAlign: "left",
              fontWeight: "400",
              display: "inline",
              paddingLeft: "10px",
            }}
          >
            <i className="fa-solid fa-star" style={{ color: "yellow" }}></i> (
            {props.productData.likes.length} ratings){" "}
          </p>
          <p
            style={{
              fontSize: "medium",
              fontWeight: "400",
              float: "right",
              marginRight: "10px",
              display: "inline",
            }}
          >
            $ 50/-
          </p>
        </Card.Title>
      </Card>
    </div>
  );
}
export default FeaturedSlideCard;
