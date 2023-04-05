/*                          Thought Note 
 
  This Component will only be visible in small screens.

 This is a code for a component called "CategoryCardMobile" which displays four 
 cards with images and discounts on different categories of products like laptops, 
 watches, tablets, and smartphones. 


 The code uses Bootstrap's Card and Badge components to create a responsive layout 
 that adjusts to mobile screens. Each card has a link that directs to a specific page 
 for that product category.

  The component is exported and can be used in other parts of the application.
 */
import "./categorycardsmobile.css";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useNavigate } from "react-router-dom";
function CategoryCardMobile() {
  // Decalaring the Naigate function
  const navigate = useNavigate();
  //navigate to laptop category
  const tolaptops = () => {
    navigate("/laptop");
  };
  //navigate to watch category
  const towatches = () => {
    navigate("/watches");
  };
  //navigate to tablet category
  const totablet = () => {
    navigate("/tablets");
  };
  //navigate to smartphone category
  const tosmartphone = () => {
    navigate("/smartphones");
  };

  return (
    <div>
      <div className="row" id="formobile">
        <div className="col-6">
          <Card onClick={() => tolaptops()} className="m-2" id="CardGlass">
            <Card.Text style={{ color: "black" }}>
              Flat 50% Off..
              <Badge bg="danger">New</Badge>
            </Card.Text>
            <Card.Img
              style={{ height: "100px" }}
              variant="top"
              src="https://m.media-amazon.com/images/I/61ZQEkRzQaL._SY450_.jpg"
            />
            <Card.Body>
              <Card.Text style={{ color: "white" }}>
                <Badge bg="dark" style={{ color: "white" }}>
                  Latest Laptops
                </Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">
          <Card onClick={() => towatches()} className="m-2" id="CardGlass1">
            <Card.Text style={{ color: "black" }}>
              Flat 15% Off..
              <Badge bg="danger">New</Badge>
            </Card.Text>
            <Card.Img
              style={{ height: "100px" }}
              variant="top"
              src="https://m.media-amazon.com/images/I/61h+le2DUxL._AC_UY218_.jpg"
            />
            <Card.Body>
              <Card.Text style={{ color: "white" }}>
                <Badge bg="dark" style={{ color: "white" }}>
                  Latest Watches
                </Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/**second row */}
      <div className="row" id="formobile">
        <div className="col-6">
          <Card onClick={() => totablet()} className="m-2" id="CardGlass2">
            <Card.Text style={{ color: "black" }}>
              Flat 50% Off..
              <Badge bg="danger">New</Badge>
            </Card.Text>
            <Card.Img
              style={{ height: "100px" }}
              variant="top"
              src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61e9d1Y3NrL._SL1000_.jpg"
            />
            <Card.Body>
              <Card.Text style={{ color: "white" }}>
                <Badge bg="dark" style={{ color: "white" }}>
                  Latest Tablets
                </Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">
          <Card onClick={() => tosmartphone()} className="m-2" id="CardGlass3">
            <Card.Text style={{ color: "black" }}>
              50% Off..
              <Badge bg="danger">New</Badge>
            </Card.Text>
            <Card.Img
              style={{ height: "100px" }}
              variant="top"
              src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71QIWoR7EZL._SL1500_.jpg"
            />
            <Card.Body>
              <Card.Text style={{ color: "white" }}>
                <Badge bg="dark" style={{ color: "white" }}>
                  Latest Phones
                </Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default CategoryCardMobile;

