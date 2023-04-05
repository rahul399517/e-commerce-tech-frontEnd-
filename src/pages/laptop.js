/**
                           Thought Note 

  This code is  similar to the previous code for the Electronic component, 
  with some changes to the API endpoint and the component name.
  

  The code  retrieving data from an API and rendering it using a card component,
   similar to the Electronic component. 
   

   It also includes a function to delete a product and update the view accordingly.
   
   
   
  The code follows the same structure and conventions as the previous code, making 
  it easy to maintain and understand.
 */
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import axios from "axios";
import { API_BASE_URL } from "../config";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import LaptopCard from "../cards/laptopcard";
function Laptops() {
  //creating config_obj to configure the authorized user
  const CONFIG_OBJ = {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const [allproducts, setAllProducts] = useState([]);
  const GetAllLaptops = async () => {
    const response = await axios.get(`${API_BASE_URL}/laptop`);
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
            <div className="row">
              {allproducts
                .map((viewproduct) => {
                  return (
                    <div className="col-md-3 mb-2">
                      <LaptopCard
                        productData={viewproduct}
                        deleteproduct={deleteProduct}
                        GetAllLaptops={GetAllLaptops}
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
export default Laptops;
