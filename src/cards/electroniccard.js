/*
                      Thought Note 

This is a React functional component that renders card for electronic Category


 It imports Card and Badge from react-bootstrap, useSelector and 
 useEffect from react, and uses useNavigate from react-router-dom.

Inside the component, it uses useSelector to select the user


*/
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import { useSelector } from "react-redux";

import { useEffect } from "react";

function ElectronicCard(props) {
  //use navigate
  const navigate = useNavigate();

  //useselector // react hook used to select the data
  const user = useSelector((state) => state.user);

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
        onClick={() => {
          productdetails();
        }}
        style={{ height: "300px" }}
      >
        {/**here setmodalshow will show modal on click */}
        <p style={{ textAlign: "center" }}>
          <h6>
            Exclusive on PremiumTech<Badge bg="danger">New</Badge>
          </h6>
        </p>
        <Card.Img
          variant="top"
          src={props.productData.Image}
          style={{ marginTop: "-15px", width: "100%", height: "200px" }}
        />

        <Card.Title>
          <p style={{ textAlign: "center", fontWeight: "400" }}>
            {props.productData.ProductName}
          </p>
          <p
            className="small "
            style={{
              fontSize: "small",
              textAlign: "left",
              fontWeight: "400",
              display: "inline",
              paddingLeft: "0px",
            }}
          >
            <i className="fa-solid fa-star" style={{ color: "yellow" }}></i> (
            {props.productData.likes.length}
            ratings)
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
            $ {props.productData.Cost}
          </p>
        </Card.Title>
      </Card>
    </div>
  );
}
export default ElectronicCard;
