//                                    Thought Note :

/*This component takes in props (an object that contains data passed down from a parent component) as an argument,

which contains data related to the product being displayed, 

such as the product name, image, cost, and ratings.*/

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function CardAllProduct(props) {
  /*The useNavigate() hook from the react-router-dom 
   library is used to create a navigate object,
   which is used to redirect the user to a 
   different page when a product is clicked.*/
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
      <Card style={{ height: "300px" }}>
        {/**here setmodalshow will show modal on click */}
        <p style={{ textAlign: "center" }}>
          <h6>
            Exclusive on PremiumTech<Badge bg="danger">New</Badge>
          </h6>
        </p>
        {/*<Link to={`/productdetails/` + `${user._id}`}>*/}
        <Card.Img
          onClick={() => {
            productdetails();
          }}
          variant="top"
          src={props.productData.Image}
          style={{
            marginTop: "-15px",
            width: "100%",
            height: "200px",
            cursor: "pointer",
          }}
        />

        <Card.Title>
          <p
            onClick={() => {
              productdetails();
            }}
            style={{
              textAlign: "center",
              fontWeight: "400",
              cursor: "pointer",
            }}
          >
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
              float: "left",
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
export default CardAllProduct;
