import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";

function WatchCard(props) {
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
export default WatchCard;
