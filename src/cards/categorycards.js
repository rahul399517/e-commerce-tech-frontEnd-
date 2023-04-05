//            Thought Note
/*
This is a component for displaying a category card for a laptop category.


It imports the Card component from the React-Bootstrap library and
 the useNavigate hooks from the React library.

It also imports a CSS file for styling the category card.
*/
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";

import "./categorycard.css";

function CategoryCardLaptop(props) {
  //use navigate
  const navigate = useNavigate();

  const productdetails = () => {
    navigate(`/productdetails/${props.productData._id}`);
    // console.log(props.productData);
  };
  return (
    <div>
      <Card
        id="cardHover"
        onClick={() => {
          productdetails();
        }}
        style={{}}
      >
        {/**here setmodalshow will show modal on click */}

        <Card.Img
          variant="top"
          src={props.productData.Image}
          id="cardimg"
          style={{}}
        />
  <Card.Text
          style={{ fontSize: "10px", marginTop: "-7px", fontWeight: "700" }}
        >
          {props.productData.ProductName}
        </Card.Text>
      </Card>
    </div>
  );
}
export default CategoryCardLaptop;
