/*             
                   Thought Note 

                   
This is a React card that displays a card containing laptop product details. 

The card includes an image of the laptop, the name of the product, its rating, and its price. 

The card is clickable, and when clicked, it calls a function that uses the useNavigate 
hook from react-router-dom to navigate to the product details page for the clicked product. 

The props parameter is passed into the component to receive the product data to be displayed. 


The Card and Badge components are imported from the react-bootstrap library to style the card.

*/
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import { useNavigate } from "react-router-dom";
function LaptopCard(props) {
  //use navigate
  const navigate = useNavigate();

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
export default LaptopCard;
