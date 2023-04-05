/* 
                            Thought Note 

  This page show all the electronics products.

  It imports various components and libraries such as "react-bootstrap", 
   "react-router-dom", "axios", "sweetalert2", etc.  

  The page has a state variable named "allproducts" initialized as an
  empty array.
  
  
  I have also created a function named "GetAllElectronic" which is an asynchronous
  function that makes a GET request to the API endpoint "/electronics" and updates
  the "allproducts" state variable with the response data.


There is  a function named "deleteProduct" which is also an asynchronous function 
that makes a DELETE request to the API endpoint "/deletepost" with the productId and
 the CONFIG_OBJ headers.
 
 
 If the response status is 200, the "GetAllElectronic" function is called to update the 
 "allproducts" state variable with the updated data.

Lastly, the component has a useEffect hook that calls the "GetAllElectronic" function when
 the component mounts.

The component seems to be rendering electronic products as cards and providing the 
functionality to delete the products using the "deleteProduct" function. It also utilizes 
a "TabletCard" component to render individual product cards.




*/

import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import TabletCard from "../cards/tabletcard";
function Electronic() {
  //creating config_obj to configure the authorized user
  const CONFIG_OBJ = {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const [allproducts, setAllProducts] = useState([]);
  const GetAllElectronic = async () => {
    const response = await axios.get(`${API_BASE_URL}/electronics`);
    //debugger;
    if (response.status === 200) {
      setAllProducts(response.data.posts);
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };
  useEffect(() => {
    GetAllElectronic();
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
      GetAllElectronic();
    } else {
      Swal.fire({
        icon: "error",
        title: "Some error occured",
      });
    }
  };

  return (
    /*creating a row with three colounms ,first and last coloumn contain advertisement slides,
     while middle coloumn contains the all products*/
    <div className="row">
      <div className="col-md-2 col-sm-12" id="menu">
        <Card
          className=""
          style={{
            width: "100%",
            backgroundColor: "white",
           
          }}
        >
          <Card.Body>
            {/**First slide advertisment */}
            <Carousel style={{ width: "100%", display: "inlineBlock" }}>
              <Carousel.Item interval={1000}>
                <img
                  style={{ width: "450px", height: "210px", float: "left" }}
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/86117e9d-4079-4231-9854-21bbc04852d0._CR0,0,1200,628_SX460_QL70_.png"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  style={{ width: "450px", height: "210px", float: "left" }}
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/1d3109c1-b616-4519-813d-5ab3907c9fef._CR0,0,1200,628_SX460_QL70_.jpg"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "450px", height: "210px", float: "left" }}
                  src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/c4b70438-7f2b-4e61-a5bd-f9d34145e3f6._CR0,0,1200,628_SX460_QL70_.jpg"
                  alt="Advertisement here"
                ></img>
              </Carousel.Item>
            </Carousel>
            <Card.Title style={{ color: "black" }}>
              Search by Category
            </Card.Title>
            <Link to="/allproduct">
              {" "}
              <Button
                className="form-control btn btn-light mb-1"
                style={{ borderColor: "black" }}
              >
                All Product&nbsp;
              </Button>
            </Link>
            <Link to="/laptop">
              {" "}
              <Button
                className="form-control btn btn-light mb-1"
                style={{ borderColor: "black" }}
              >
                Latest Laptops&nbsp;
              </Button>
            </Link>
            <Link to="/watches">
              {" "}
              <Button
                className="form-control btn btn-light mb-1"
                style={{ borderColor: "black" }}
              >
                Latest Watches&nbsp;
              </Button>
            </Link>
            <Link to="/tablets">
              {" "}
              <Button
                className="form-control btn btn-light mb-1"
                style={{ borderColor: "black" }}
              >
                Latest Tablets
              </Button>
            </Link>
            <Link to="/smartphones">
              {" "}
              <Button
                className="form-control btn btn-light mb-1"
                style={{ borderColor: "black" }}
              >
                Latest Smart Phones
              </Button>
            </Link>
            <Link to="/electronics">
              {" "}
              <Button
                className="form-control btn btn-light mb-1"
                style={{ borderColor: "black" }}
              >
                Latest Electronics
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-10 col-sm-12">
        <Card style={{ marginBottom: "300px" }}>
          <Card.Body>
            {/**All product looping card */}
            {/*
            
            the map function here is used  to loop through an array of products 
            and render a TabletCard component for each product. 
            
            The allproducts array is created using the useState hook and 
            is initially empty. 
            
            The GetAllElectronic function is called using the useEffect 
            hook when the component mounts to fetch electronic products
             from an API and update the allproducts state with the 
             response data. 
             
             */}
            <div className="row">
              {allproducts
                .map((viewproduct) => {
                  return (
                    <div className="col-md-3 mb-2">
                      <TabletCard
                        productData={viewproduct}
                        deleteproduct={deleteProduct}
                        GetAllElectronic={GetAllElectronic}
                      />
                    </div>
                  );
                })
                .reverse()}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default Electronic;
