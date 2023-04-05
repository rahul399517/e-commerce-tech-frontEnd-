/*                  Thought Note 

Card from React Bootstrap with details of a smartphone product. 

It takes in a prop named props that contains the details of the product to be displayed.

The component uses the useNavigate hook from the react-router-dom library to navigate to the 
product details page when the Card is clicked. 

It calls the productdetails() function which uses the navigate() method to change the URL 
path to the product details page with the _id of the product in the path.


 */
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import { useNavigate } from "react-router-dom";
function SmartPhoneCard(props) {
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
export default SmartPhoneCard;
