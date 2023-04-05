/*
                             Thought Note 

This product detail page  fetches the details of a product from the server 
based on the id parameter passed in the URL.

It also allows users to add the product to their cart, like/dislike the product,
and submit/delete reviews for the product.           

I have alos imported and created several functions and hooks such as useState, 
useEffect, useParams, useNavigate, useDispatch, and useSelector.
*/
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; //this is used to import the data filled by the user perviously into the user model
import axios from "axios";
import { API_BASE_URL } from "../config";
import { useDispatch } from "react-redux";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { addToCart } from "../action/cartAction";
import { Form, ListGroupItem, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import CategoryCardMobile from "../components/categorycardsmobile";
import CategoryIntro from "../components/categoryintro";
import "./productdetails.css";
import CategoryIntromobile from "../components/categoryintromobile";
function ProductDetails() {
  //destructe the params
  // The useParams hook is used to extract the id parameter from the URL.
  let { id } = useParams();
  // console.log(id);
  //dispatch
  // The useDispatch hook is used to dispatch an action to add the product to the cart.
  const dispatch = useDispatch();

  //declaring navgate
  // The useNavigate hook is used to navigate to the cart page after the user adds a product to their cart.
  const navigate = useNavigate();
  //selector
  // The useSelector hook is used to select the user object from the Redux store
  const user = useSelector((state) => state.user);
  //creating config_obj to configure the authorized user
  // The CONFIG_OBJ object is used to set the authorization header for API requests.
  const CONFIG_OBJ = {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  //To show profile images

  const [productdetail, setproductdetail] = useState("");
  // The axios library is used to make API requests to the server.
  const GetAllProductDetail = async () => {
    await axios
      .get(`${API_BASE_URL}/product/${id}`, CONFIG_OBJ)
      .then((data) => {
        // console.log(data);

        //Here we want to access the user detail, of which we opend the profile ,
        //since we cannot access it throug setAllOtherUserTweet(data.data.tweets); ,so we created anther useState
        //i.e  const [productdetail, setproductdetail] = useState("");,and now we will access the user details by
        // productdetail.fullname etc in return ()
        setproductdetail(data.data.product);
      });
  };

  useEffect(() => {
    GetAllProductDetail();
  }, []);

  //add to cart handler
  const addToCartHandler = () => {
    if (qty === 0) {
      let a = 1;
      a = qty;
      qty = 1;
      console.log(qty);
      console.log(`swaped a =` + a + `qty = ` + qty + `value from 0 to 1`);
    }

    dispatch(addToCart(id, qty));
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
    navigate(`/cart`);

    // window.location.reload();
  };
  //quantity
  var [qty, setQty] = useState(0);
  //creating review section

  //The submitreview function is called when the user submits a review for the product.

  // The handleDeleteReview function is called when the user deletes a review for the product.

  //  The likeproduct and Dislikeproduct functions are called when the user likes or dislikes the product.
  const [allreview, setAllreview] = useState(true);
  const [reviewBox, setReviewBox] = useState(false);
  const [review, setReview] = useState("");
  async function submitreview(reviewText, productId) {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/review`,
        {
          reviewText: reviewText,
          productId: productId,
        },
        CONFIG_OBJ
      );
      GetAllProductDetail();
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  // rest api call to delete review
  const handleDeleteReview = (reviewId) => {
    axios
      .delete(`${API_BASE_URL}/review/${id}/${reviewId}`, CONFIG_OBJ)
      .then((response) => {
        // console.log(response);
        GetAllProductDetail();
        Swal.fire({
          title: "Review Deleted",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //likes

  //likes
  const likeproduct = async (productId) => {
    const request = { productId: productId };
    const response = await axios.put(
      `${API_BASE_URL}/like`,
      request,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      GetAllProductDetail();
    }
  };

  //unlikes
  const Dislikeproduct = async (productId) => {
    const request = { productId: productId };
    const response = await axios.put(
      `${API_BASE_URL}/unlike`,
      request,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      GetAllProductDetail();
    }
  };
  //in below code we created rwo "usestate" :
  //1: below use state is to scroll to top when user click on the card
  const [scrollTop, setScrollTop] = useState(0);
  //2 : below usestate is to auto refresh the page , whenever user click on the page
  const [refresh, setRefresh] = useState(false);
  // 3 : refreshPage is a arrow function which will be called on click of the button,
  // it will execute three following things:
  const refreshPage = () => {
    //below if statement will check wether , the page refershed or not , if not then :
    if (!refresh) {
      //(a) : this code will refersh the page
      window.location.reload();
      // (b) : this below code will set the default value if refresh to true , and will stop the page to refresh again
      setRefresh(true);
      //(c) : this below code will scroll the page to top ,after pafe gets refreshed by executing useEffrct code , which declared below
      setScrollTop(0);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  }, [scrollTop]);
  //navigate to buy now
  const buynow = () => {
    navigate(`/placeorder/${id}`);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <img
            style={{ width: "100%" }}
            src={productdetail.Image}
            alt="Not available"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Card className="shadow mt-3 m-1">
            <p style={{ color: "blue", marginLeft: "10px" }}>
              seller :{productdetail.author?.FullName}
            </p>

            <h5 style={{ textAlign: "center" }}>{productdetail.ProductName}</h5>
            <p
              className="small "
              style={{
                fontSize: "large",
                textAlign: "left",
                fontWeight: "400",
                display: "inline",
                paddingLeft: "10px",
              }}
            >
              Love our Products,Click on Heart,
              {productdetail.likes?.includes(user._id) ? (
                <div className="col-2">
                  <i
                    style={{ color: "red" }}
                    onClick={() => Dislikeproduct(productdetail._id, "unlike")}
                    className="fa-solid fa-heart"
                  ></i>
                </div>
              ) : (
                <div className="col-2">
                  <i
                    onClick={() => likeproduct(productdetail._id, "like")}
                    style={{ color: "black" }}
                    className="fa-regular fa-heart"
                  ></i>
                </div>
              )}
              ({productdetail.likes?.length} ratings){" "}
            </p>
            <h5>
              <Badge style={{ marginLeft: "10px" }} bg="info">
                #1 Best Seller
              </Badge>
            </h5>
            <hr></hr>
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
              <p style={{ display: "inline", fontSize: "large", color: "red" }}>
                $ {productdetail.Cost}
              </p>
            </p>

            <hr></hr>
            <h4>
              <Badge style={{ marginLeft: "10px" }} bg="warning">
                Brand
              </Badge>
              &nbsp;&nbsp;&nbsp;{productdetail.Brand}
            </h4>
            <ul>
              <li>
                <i
                  style={{ color: "green" }}
                  className="fa-solid fa-circle-check"
                ></i>
                &nbsp;&nbsp; 88% positive ratings from 100K+ customers
              </li>
              <li>
                <i
                  style={{ color: "green" }}
                  className="fa-solid fa-circle-check"
                ></i>
                &nbsp;&nbsp; 100K+ recent orders from this brand
              </li>
              <li>
                <i
                  style={{ color: "green" }}
                  className="fa-solid fa-circle-check"
                ></i>
                &nbsp;&nbsp; 8+ years on our site
              </li>
            </ul>
          </Card>
        </div>
        <div className="col-md-3 col-sm-12">
          <Card className="shadow mt-3 p-2">
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
              <p style={{ display: "inline", fontSize: "large", color: "red" }}>
                ${productdetail.Cost}
              </p>
            </p>
            <p style={{ color: "green", fontSize: "small" }}>
              FREE delivery Sunday. Order within 12 hrs 17 mins. Details
            </p>
            <p
              style={{
                color: "blue",
                fontSize: "large",
                textAlign: "center",
              }}
            >
              {productdetail.quantity > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <p
              style={{
                color: "black",
                fontSize: "small",
                textAlign: "center",
                marginTop: "-20px",
              }}
            >
              Sold by {productdetail.Brand} and Fulfilled by{" "}
              {productdetail.author?.FullName}.
            </p>
            {/**To Select Quantity  */}
            <p
              style={{
                color: "blue",
                fontSize: "large",
                textAlign: "center",
              }}
            >
              Select Quantity
            </p>
            {productdetail.quantity >= 1 && (
              <ListGroupItem>
                <Row>
                  <Col>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(productdetail.quantity).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroupItem>
            )}
            <br></br>
            <div>
              <button
                onClick={addToCartHandler}
                className="form-control btn btn-warning"
              >
                Add To Cart
              </button>
            </div>

            <br></br>

            <button
              onClick={() => buynow()}
              className="form-control btn btn-danger"
            >
              Buy Now
            </button>

            <p
              style={{
                color: "purple",
                fontSize: "small",
                textAlign: "center",
              }}
            >
              {" "}
              <i className="fa-solid fa-lock"></i>&nbsp;Secure transaction
            </p>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          {" "}
          <Card>
            <Card.Title>Product Detail</Card.Title>
            <Card.Text>{productdetail.Description}</Card.Text>
          </Card>
        </div>
        <div className="col-md-6 col-sm-12">
          <Card className="shadow  p-2">
            <p style={{ fontWeight: "bold" }}>Reviews</p>
            <hr></hr>
            <button
              onClick={() => setReviewBox(true)}
              className="form-control btn btn-danger"
              id="lovecommentsharebutton"
            >
              Add Review <i className="fa-regular fa-comment"></i>
            </button>
            {/**comment box text area*/}
            <br></br>
            {reviewBox ? (
              <Card className="shadow">
                <Card.Body>
                  <div className="row">
                    <div className="col-9">
                      <div className="form-floating mb-3">
                        <Form.Control
                          onChange={(e) => setReview(e.target.value)}
                          type="text"
                          style={{
                            height: "25px",
                            border: "1px solid black",
                          }}
                          placeholder="comment here"
                        />
                      </div>
                    </div>
                    <div className="col-2 ">
                      <button
                        onClick={() => {
                          submitreview(review, productdetail._id);
                          setAllreview(true);
                        }}
                        className="form-control btn btn-primary"
                        id="lovecommentsharebutton"
                        style={{ marginLeft: "-20px" }}
                      >
                        <i className="fa-solid fa-location-arrow"></i>
                      </button>
                    </div>
                    <div
                      className="col-1"
                      onClick={() => setReviewBox(false)}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <i className="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ) : (
              ""
            )}
            <hr></hr>

            {/*View all review */}
            <div className="row">
              <div className="col-sm-12">
                <button
                  onClick={() => setAllreview(true)}
                  className="formo-control"
                  style={{
                    border: "none",
                    backgroundColor: "white",
                    marginTop: "-20px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "small",
                      marginLeft: "15px",
                      fontWeight: "600",
                    }}
                  >
                    view all review
                  </p>
                </button>
              </div>
            </div>
            {/*all comment division*/}
            {allreview && productdetail && productdetail.review && (
              <>
                {productdetail.review
                  .map((review) => {
                    return (
                      <div className="row" key={review._id}>
                        <div className="col-12">
                          <Card
                            className="shadow p-2 m-1"
                            style={{ border: "1px solid gray" }}
                          >
                            <Card.Text>
                              <div className="row">
                                <div className="col-1">
                                  <img
                                    style={{
                                      width: "30px",
                                      height: "30px",
                                      borderRadius: "30px",
                                    }}
                                    src={review.reviewBy?.ProfileImg}
                                    alt="img not avail"
                                  />
                                </div>
                                <div
                                  className="col-3"
                                  style={{
                                    fontWeight: "700",
                                    fontFamily: "georgia",
                                    fontSize: "small",
                                  }}
                                >
                                  {review.reviewBy?.FullName}
                                </div>
                                <div
                                  className="col-7"
                                  style={{
                                    fontWeight: "400",
                                    fontFamily: "georgia",
                                    fontSize: "small",
                                  }}
                                >
                                  {review.reviewText}
                                </div>
                                {review.reviewBy?._id === user._id && (
                                  <div
                                    className="col-1"
                                    onClick={() => {
                                      handleDeleteReview(review._id);
                                    }}
                                  >
                                    <i
                                      style={{
                                        marginLeft: "-5px",
                                        cursor: "pointer",
                                      }}
                                      className="fa-regular fa-trash-can"
                                    ></i>
                                  </div>
                                )}
                              </div>
                              {/* <p style={{ fontWeight: "500" }}>{comment._id}:</p> */}
                            </Card.Text>
                          </Card>
                        </div>
                      </div>
                    );
                  })
                  .reverse()}
                <p
                  style={{
                    fontSize: "small",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                  className="small mx-1 "
                  onClick={() => setAllreview(false)}
                >
                  Close comments
                </p>
              </>
            )}
          </Card>
        </div>
      </div>
      <a
        href="#"
        onClick={() => {
          refreshPage();
        }}
      >
        <CategoryCardMobile />
        <div id="categoryintroforbigscreen">
          <CategoryIntro />
        </div>
        <div id="categoryintroforsmallscreen">
          <CategoryIntromobile />
        </div>
      </a>
    </>
  );
}
export default ProductDetails;
