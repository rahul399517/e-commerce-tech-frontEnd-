/*
                                         Thought Note 

SearchResultCard, is a horizontal card that displays an image, product name, price, brand, seller name, 
and last updated time.

It also has a border around the card. Clicking on the card navigates the user to the product details page.


 These components use the useNavigate hook from React Router to handle navigation to the product details page.


*/
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
function SearchResultCard(props) {
  //use navigate
  const navigate = useNavigate();

  const productdetails = () => {
    navigate(`/productdetails/${props.productData._id}`);
    // console.log(props.productData);
  };
  return (
    <div className="row">
      <div className="col-12">
        <Card
          className=" m-2 p-2"
          onClick={() => {
            productdetails();
          }}
        >
          {/*Horizontal card*/}
          <div
            className="card mb-3"
            style={{ maxWidth: "100%", border: "1px solid gray" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  style={{ width: "250px", height: "200px" }}
                  src={props.productData.Image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {props.productData.ProductName}
                  </h5>
                  <p className="card-text">
                    <p
                      style={{
                        fontSize: "Medium",
                        textAlign: "left",
                        fontWeight: "bold",
                        display: "inline",
                        paddingLeft: "10px",

                        marginLeft: "10px",
                      }}
                    >
                      {" "}
                      Price{" "}
                      <p
                        style={{
                          display: "inline",
                          fontSize: "large",
                          color: "red",
                        }}
                      >
                        $ {props.productData.Cost}
                      </p>
                    </p>
                  </p>
                  <p className="card-text">
                    <p
                      style={{
                        fontSize: "Medium",
                        textAlign: "left",
                        fontWeight: "bold",
                        display: "inline",
                        paddingLeft: "10px",

                        marginLeft: "10px",
                      }}
                    >
                      {" "}
                      Brand{" "}
                      <p
                        style={{
                          display: "inline",
                          fontSize: "large",
                          color: "blue",
                        }}
                      >
                        {props.productData.Brand}
                      </p>
                    </p>
                  </p>
                  <p className="card-text">
                    <p
                      style={{
                        fontSize: "Medium",
                        textAlign: "left",
                        fontWeight: "bold",
                        display: "inline",
                        paddingLeft: "10px",

                        marginLeft: "10px",
                      }}
                    >
                      {" "}
                      Seller :{" "}
                      <p
                        style={{
                          display: "inline",
                          fontSize: "large",
                          color: "blue",
                        }}
                      >
                        {props.productData.author.FullName}
                      </p>
                    </p>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default SearchResultCard;
