/*
                                     Thought Note 
This component later called in home.js  file to show the featured list of the products

This code  renders a Bootstrap Carousel containing various product categories such as 
 laptops, watches, tablets, smartphones, and electronics and at the end , it show a slide show for 
 the featured product on the site.

The component imports necessary libraries such as React, Bootstrap, axios, and SweetAlert2,
 and defines several states and functions using the React Hooks. 
 
 
 Each product category has its own state, and a function to fetch data from the API. 
 
 
 There is also a function to delete a product and re-render the list of products.



 */

import Carousel from "react-bootstrap/Carousel";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./featuredslide.css";

import axios from "axios";
import { API_BASE_URL } from "../config";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

//import { useSelector } from "react-redux";
import FeaturedSlideCard from "../cards/featuredslidecard";
function FeaturedProduct() {
  //creating config_obj to configure the authorized user
  const CONFIG_OBJ = {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  // For Laptops
  const [alllaptops, setalllaptops] = useState([]);
  const GetAllLaptops = async () => {
    const response = await axios.get(`${API_BASE_URL}/laptop`);
    //debugger;
    if (response.status === 200) {
      setalllaptops(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  useEffect(() => {
    GetAllLaptops();
  }, []);
  //API call for delete post
  const deleteProduct = async (productId) => {
    console.log(productId);
    //debugger;
    const response = await axios.delete(
      `${API_BASE_URL}/deletepost/${productId}`,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      GetAllLaptops();
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };

  //For Watches

  const [allwatches, setallwatches] = useState([]);
  const GetAllWatches = async () => {
    const response = await axios.get(`${API_BASE_URL}/watch`);
    //debugger;
    if (response.status === 200) {
      setallwatches(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  useEffect(() => {
    GetAllWatches();
  }, []);

  //For Tablets
  const [alltablets, setalltablets] = useState([]);
  const GetAllTablets = async () => {
    const response = await axios.get(`${API_BASE_URL}/tablet`);
    //debugger;
    if (response.status === 200) {
      setalltablets(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  useEffect(() => {
    GetAllTablets();
  }, []);

  //For Smart Phones
  const [allsmartphones, setallsmartphones] = useState([]);
  const GetAllSamrtPhones = async () => {
    const response = await axios.get(`${API_BASE_URL}/smartphone`);
    //debugger;
    if (response.status === 200) {
      setallsmartphones(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  useEffect(() => {
    GetAllSamrtPhones();
  }, []);

  //For electronics
  const [allelectronics, setallelectronics] = useState([]);
  const GetAllElectronics = async () => {
    const response = await axios.get(`${API_BASE_URL}/electronics`);
    //debugger;
    if (response.status === 200) {
      setallelectronics(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  useEffect(() => {
    GetAllElectronics();
  }, []);
  return (
    <div className="featuredslidediv ">
      <Carousel>
        <Carousel.Item id="coroitems">
          <Row xs={1} md={4} className="g-4" id="forwindow">
            {alllaptops
              .map((viewproduct) => (
                <Col key={viewproduct._id}>
                  <FeaturedSlideCard
                    productData={viewproduct}
                    deleteproduct={deleteProduct}
                    GetAllLaptops={GetAllLaptops}
                  />
                </Col>
              ))
              .reverse()}
          </Row>

          {/**For mobile */}
          <Row xs={1} md={4} className="g-4" id="formobile">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                {alllaptops
                  .map((viewproduct) => (
                    <Col key={viewproduct._id}>
                      <FeaturedSlideCard
                        productData={viewproduct}
                        deleteproduct={deleteProduct}
                        GetAllLaptops={GetAllLaptops}
                      />
                    </Col>
                  ))
                  .reverse()}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item id="coroitems">
          <Row xs={1} md={4} className="g-4" id="forwindow">
            {allwatches
              .map((viewproduct) => (
                <Col key={viewproduct._id}>
                  <FeaturedSlideCard
                    productData={viewproduct}
                    deleteproduct={deleteProduct}
                    GetAllLaptops={GetAllLaptops}
                  />
                </Col>
              ))
              .reverse()}
          </Row>

          {/**For mobile */}
          <Row xs={1} md={4} className="g-4" id="formobile">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                {allwatches
                  .map((viewproduct) => (
                    <Col key={viewproduct._id}>
                      <FeaturedSlideCard
                        productData={viewproduct}
                        deleteproduct={deleteProduct}
                        GetAllLaptops={GetAllLaptops}
                      />
                    </Col>
                  ))
                  .reverse()}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item id="coroitems">
          <Row xs={1} md={4} className="g-4" id="forwindow">
            {alltablets
              .map((viewproduct) => (
                <Col key={viewproduct._id}>
                  <FeaturedSlideCard
                    productData={viewproduct}
                    deleteproduct={deleteProduct}
                    GetAllLaptops={GetAllLaptops}
                  />
                </Col>
              ))
              .reverse()}
          </Row>

          {/**For mobile */}
          <Row xs={1} md={4} className="g-4" id="formobile">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                {alltablets
                  .map((viewproduct) => (
                    <Col key={viewproduct._id}>
                      <FeaturedSlideCard
                        productData={viewproduct}
                        deleteproduct={deleteProduct}
                        GetAllLaptops={GetAllLaptops}
                      />
                    </Col>
                  ))
                  .reverse()}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item id="coroitems">
          <Row xs={1} md={4} className="g-4" id="forwindow">
            {allsmartphones
              .map((viewproduct) => (
                <Col key={viewproduct._id}>
                  <FeaturedSlideCard
                    productData={viewproduct}
                    deleteproduct={deleteProduct}
                    GetAllLaptops={GetAllLaptops}
                  />
                </Col>
              ))
              .reverse()}
          </Row>

          {/**For mobile */}
          <Row xs={1} md={4} className="g-4" id="formobile">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                {allsmartphones
                  .map((viewproduct) => (
                    <Col key={viewproduct._id}>
                      <FeaturedSlideCard
                        productData={viewproduct}
                        deleteproduct={deleteProduct}
                        GetAllLaptops={GetAllLaptops}
                      />
                    </Col>
                  ))
                  .reverse()}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item id="coroitems">
          <Row xs={1} md={4} className="g-4" id="forwindow">
            {allelectronics
              .map((viewproduct) => (
                <Col key={viewproduct._id}>
                  <FeaturedSlideCard
                    productData={viewproduct}
                    deleteproduct={deleteProduct}
                    GetAllLaptops={GetAllLaptops}
                  />
                </Col>
              ))
              .reverse()}
          </Row>

          {/**For mobile */}
          <Row xs={1} md={4} className="g-4" id="formobile">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                {allelectronics.map((viewproduct) => (
                  <Col key={viewproduct._id}>
                    <FeaturedSlideCard
                      productData={viewproduct}
                      deleteproduct={deleteProduct}
                      GetAllLaptops={GetAllLaptops}
                    />
                  </Col>
                ))}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FeaturedProduct;
