/* 
                               Thought Note 


  This code represents a seller profile page that allows sellers to add and manage their products                             

  
  Here I imported several dependencies such as React, useState, useEffect, axios, Modal, and others.
  

  Here I'm  using Redux as it imports and uses the useSelector hook from the react-redux library.                             


  I also declared  state variables such as Image, Description, Brand, Cost, ProductName, Category, 
  loading, setProductDetail, show, and upload. 
 

  It  has functions to handle file selection, image upload, adding products, showing profile products,
  and deleting products.
 

  I'm  making API calls to a server using the axios library to create, retrieve, and delete products. 
  

  It also uses the sweetalert2 library to show alerts or messages to the user.

*/
import React, { useState } from "react";
import "../pages/profileseller.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { API_BASE_URL } from "../config";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import SellerProductCard from "../cards/sellerproductcard";

function SellerProfilePage(props) {
  //useselector // react hook used to select the data

  //console.log(props.productData.author);
  const [Image, setImage] = useState({ preview: "", data: "" });
  const [Description, setDescription] = useState("");

  const [Brand, setBrand] = useState("");
  const [Cost, setCost] = useState("");
  const [ProductName, setProductName] = useState("");
  const [Category, setCategory] = useState("");
  const [loading, setLoading] = useState("");
  const [setProductDetail] = useState({});

  //popup show details
  const showdetail = (product) => {
    setProductDetail(product);
  };

  //selector
  const user = useSelector((state) => state.user);
  //creating config_obj to configure the authorized user
  const CONFIG_OBJ = {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  //To handle the file select
  const handleFileSelect = (event) => {
    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0],
    };
    setImage(img);
  };

  // To handle image upload
  const handleImgUpload = async () => {
    let formData = new FormData();
    formData.append("file", Image.data);
    //API calling below
    const response = axios.post(`${API_BASE_URL}/uploadfile`, formData);
    return response;
  };
  //To add product
  const addProduct = async () => {
    if (Image.preview === "") {
      Swal.fire({
        icon: "error",
        title: "Product image is Mandatory",
      });
    } else if (Description === "") {
      Swal.fire({
        icon: "error",
        title: "Caption is Mandatory",
      });
    } else if (Brand === "") {
      Swal.fire({
        icon: "error",
        title: "Brand is Mandatory",
      });
    } else if (Cost === "") {
      Swal.fire({
        icon: "error",
        title: "Brand is Mandatory",
      });
    } else if (Category === "") {
      Swal.fire({
        icon: "error",
        title: "Brand is Mandatory",
      });
    } else {
      setLoading(true);
      const imgRes = await handleImgUpload();
      //Add validation Rule for the Caption /Location
      const request = {
        ProductName: ProductName,
        Cost: Cost,
        Category: Category,
        Description: Description,
        Brand: Brand,
        Image: `${API_BASE_URL}/files/${imgRes.data.fileName}`,
      };
      //API call to create product
      const productResponse = await axios.post(
        `${API_BASE_URL}/createproduct`,
        request,
        CONFIG_OBJ
      );
      setLoading(false);
      if (productResponse.status === 201) {
        setUpload(false);
        GetMyAllProducts();
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong while creating new product ",
        });
      }
    }
  };

  /*pop up for zoom picture */

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*pop up for upload picture */

  const [upload, setUpload] = useState(false);

  const handleuploadClose = () => setUpload(false);
  const handleuploadShow = () => setUpload(true);

  //To show profile Products
  const [allmyproducts, setMyAllProducts] = useState([]);
  const GetMyAllProducts = async () => {
    const response = await axios.get(
      `${API_BASE_URL}/myallproduct`,
      CONFIG_OBJ
    );
    //debugger;
    if (response.status === 200) {
      setMyAllProducts(response.data.products);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  useEffect(() => {
    GetMyAllProducts();
  }, []);
  //API call for delete Product
  const deleteProduct = async (productId) => {
    console.log(productId);
    //console.log(productdetail.author._id);
    console.log(user._id);

    //debugger;
    const response = await axios.delete(
      `${API_BASE_URL}/deleteproduct/${productId}`,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      //swal custon fire message
      const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      });
      await Toast.fire({
        icon: "success",
        title: "Product Deleted successfully",
      });
      //swal custon fire message end here
      GetMyAllProducts();
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  return (
    <div className="container  mt-2" id="profilecontainer">
      {/*profile pic upload edit buttons etc */}
      <div className="row">
        <div className="col-md-6 d-flex flex-column">
          <img
            className="profilepagepic"
            alt="profile pic"
            src={user.ProfileImg}
          />
          <div style={{ marginLeft: "140px", marginTop: "-130px" }}>
            <p
              className=""
              style={{
                marginTop: "20px",
                marginLeft: "20px",
                fontWeight: "550",
              }}
            >
              {user.Email}
            </p>
            <p className="bio small">{user.FullName}</p>
            <p className="bio small">Hi,I Deal in - {user.Category} </p>
            <p className="bio small"> My e-mail - {user.Email}</p>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-around mx-auto">
            <div className="  fw-bold pe-md-6 pe-4" id="follower">
              <h4>{allmyproducts?.length}</h4>
              <p>products Added</p>
            </div>
          </div>

          <div className="d-flex justify-content-equal mx-auto mt-md-0 mt-3">
            <button
              href="/profilebuyer"
              className="custom-profile custom-btn-profile me-md-3"
            >
              <span className=" fs-6">Edit Profile</span>
            </button>

            <button
              className="custom-profile custom-btn-profile"
              onClick={handleuploadShow}
            >
              <span className=" fs-6">Add new Product</span>
            </button>
          </div>
        </div>
      </div>
      {/*HR tag */}
      <div className="row fy-3">
        <div className="col-sm-12">
          <hr />
        </div>
      </div>
      {/* picture rows */}
      <div className="row mb-4 " style={{ marginLeft: "-25px" }}>
        {/* Here we will loop the user product with .map method*/}
        {allmyproducts &&
          allmyproducts
            .map((product) => {
              return (
                <div className="col-md-3  col-sm-12 mb-sm-2" id="postspace">
                  {" "}
                  <div
                    className="col-md-4 col-sm-12"
                    id="divcard"
                    key={product._id}
                  >
                    <Card
                      className="card"
                      id="allproductcard"
                      onClick={handleShow}
                    >
                      <p style={{ textAlign: "center" }}>
                        <h6>
                          Exclusive on PremiumTech<Badge bg="danger">New</Badge>
                        </h6>
                      </p>
                      <Card.Img
                        onClick={() => showdetail(product)}
                        className="card-img-top"
                        alt={product.Description}
                        src={product.Image}
                        style={{ width: "100%", height: "300px" }}
                      />
                      <Card.Title>
                        <p
                          style={{
                            fontSize: "small",
                            textAlign: "center",
                            fontWeight: "700",
                            display: "block",
                            paddingLeft: "0px",
                          }}
                        >
                          {product.ProductName}
                        </p>
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
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "yellow" }}
                          ></i>{" "}
                          ({product.likes.lenght}ratings)
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
                          $ {product.Cost}
                        </p>
                      </Card.Title>
                    </Card>
                  </div>{" "}
                </div>
              );
            })
            .reverse()}
      </div>

      {/*pop up for zoom picture */}
      <Modal fullscreen="xxl-down" show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          {" "}
          <h4>Your Products</h4>
        </Modal.Header>
        <Modal.Body>
          {allmyproducts
            .map((product) => {
              return (
                <Card key={product._id}>
                  <SellerProductCard
                    productData={product}
                    deleteProduct={deleteProduct}
                  />
                </Card>
              );
            })
            .reverse()}
        </Modal.Body>
      </Modal>
      {/*pop up for upload picture*/}
      <Modal show={upload} onHide={handleuploadClose} size="lg" centered>
        <Modal.Header closeButton>
          <span className="fw-bold fs-3">Upload Product</span>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              {/*----------------------------*UPLOAD IMAGE SECTION !IMPORTANT ------------------------------------------------ */}
              <div className="uploadbox">
                {Image.preview && (
                  <img
                    src={Image.preview}
                    id="imagepreview"
                    alt="Something went wrong"
                  ></img>
                )}
                <div className="dropZoneContainer">
                  <input
                    name="file"
                    type="file"
                    id="drop_zone"
                    className="FileUpload"
                    accept=".jpg,.png,.gif,.jpeg"
                    onChange={handleFileSelect}
                  />
                  <div className="dropZoneOverlay">
                    {/**here to add */}
                    <i className="fa-solid fa-cloud-arrow-up fs-1"></i>
                    <br></br>
                    Drag or Drop your image. <br></br>
                    <b>OR</b>
                    <br></br>Click to add
                  </div>
                </div>
              </div>
              {/*UPLOAD SECTION END HERE*/}
            </div>
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-between">
              <div className="row">
                <div className=" col-sm-12 mb-3">
                  <div className="form-floating mb-3">
                    <input
                      value={ProductName}
                      onChange={(ev) => setProductName(ev.target.value)}
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Add Location"
                    />
                    <label for="floatingInput">
                      <i className="fa-brands fa-product-hunt"></i>&nbsp;Add
                      ProductName
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      value={Cost}
                      onChange={(ev) => setCost(ev.target.value)}
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Add Cost"
                    />
                    <label for="floatingInput">
                      <i className="fa-solid fa-dollar-sign"></i>&nbsp;Add
                      Product Cost
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      value={Brand}
                      onChange={(ev) => setBrand(ev.target.value)}
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Add Brand Name"
                    />
                    <label for="floatingInput">
                      <i className="fa-solid fa-b"></i>&nbsp;Add Brand Name
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      value={Category}
                      onChange={(ev) => setCategory(ev.target.value)}
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Add Category"
                    />
                    <label for="floatingInput">
                      <i className="fa-solid fa-cent-sign"></i>Category
                      (Laptop,Watch,Tablet,Electronic,SmartPhone)
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 mb-3 mt-3">
                  <div className="form-floating">
                    <textarea
                      value={Description}
                      onChange={(ev) => setDescription(ev.target.value)}
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">
                      <i className="fa-solid fa-audio-description"></i>&nbsp;Add
                      Description
                    </label>
                  </div>
                </div>
              </div>
              {/*post button */}
              <div className="row">
                <div className="col-sm-12 mb-3 ">
                  {/*Adding the loading animation on top of the card  */}
                  {loading ? (
                    <div className="row">
                      <div className="col-md-12">
                        {/*Adding spinner code from bootstrap */}
                        <div
                          className="spinner-border text-warning"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    onClick={() => addProduct()}
                    className="custom-profile custom-btn-upload float-end"
                  >
                    <span className=" fs-6 fw-700">Upload Product</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default SellerProfilePage;
