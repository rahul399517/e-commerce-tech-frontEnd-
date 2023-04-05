import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
function SellerProductCard() {
  return (
    <Card id="featuredslidecard">
      <p style={{ textAlign: "center" }}>
        <h6>
          Get 40% off Now<Badge bg="secondary">New</Badge>
        </h6>
      </p>
      <Card.Img
        variant="top"
        src="https://img3.junaroad.com/uiproducts/19170423/zoom_0-1673592270.jpg"
        style={{ marginTop: "-15px" }}
      />

      <Card.Title>
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
          4.5 <i className="fa-solid fa-star" style={{ color: "yellow" }}></i>{" "}
          (4,500 ratings)
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
  );
}
export default SellerProductCard;
