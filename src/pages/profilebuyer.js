/*
                       Thought Note 
   It includes information about the user's cart, account details, personal information, and address. 
   
   It also provides links to update the user's address and go to the cart page.

  Here I imported several modules from the react-bootstrap library and react-redux, as well as a
   link from react-router-dom.

  I defined a variable called "user" using the useSelector hook from react-redux, 
  which selects the user data from the Redux store.

  Also included Card component from react-bootstrap, which displays the user's cart and an 
  update button that takes the user to the update address page. 
  
  The Card component also displays the user's account details, including a profile picture, name, and email.

*/
import Card from "react-bootstrap/Card";
import "../pages/profilebuyer.css";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function BuyerProfilePage() {
  //useselector // react hook used to select the data
  const user = useSelector((state) => state.user);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 p-2">
          <Card
            body
            className="m-2 shadow"
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontFamily: "georgia",
            }}
          >
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <i
                  style={{
                    color: "black",
                    display: "inline",
                    fontSize: "small",
                    fontWeight: "700",
                  }}
                  className="fa-solid fa-cart-shopping"
                ></i>
                <h5
                  style={{
                    color: "black",
                    display: "inline",
                    fontSize: "small",
                    fontWeight: "700",
                  }}
                >
                  <a href="/cart">&nbsp; My Cart{"   "}</a>{" "}
                </h5>

                <i
                  style={{
                    color: "black",
                    display: "inline",
                    fontSize: "small",
                    fontWeight: "700",
                  }}
                  className="fa-solid fa-arrow-right"
                ></i>
              </div>
              <div className="col-md-4 col-sm-12">
                {/**update  button */}
                <i
                  style={{
                    color: "black",
                    display: "inline",
                    fontSize: "small",
                    fontWeight: "700",
                  }}
                  className="fa-solid fa-arrow-right"
                ></i>
                <Link to={`/update/` + `${user._id}`}>
                  <h5
                    style={{
                      color: "black",
                      display: "inline",
                      fontSize: "small",
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    &nbsp;Update Your Address{"   "}
                  </h5>
                </Link>
                <i
                  style={{ color: "blue", display: "inline" }}
                  className="fa-solid fa-pen-to-square"
                ></i>
              </div>
            </div>

            <hr></hr>
            <i
              style={{ color: "#878787", display: "inline" }}
              className="fa-solid fa-user"
            ></i>
            {/**ACCOUNT SETTING DEVISION */}
            <h5 style={{ color: "#878787", display: "inline" }}>
              &nbsp;&nbsp;&nbsp;Account Details
            </h5>
            {/**CREATED CARD FOR PROFILE OPTIONS FOR THE user  */}
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <Card
                  body
                  className="shadow m-2"
                  style={{ textAlign: "center" }}
                >
                  {/*Profile pic  division */}

                  <img
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "30px",
                      marginLeft: "20px",
                    }}
                    src={user.ProfileImg}
                    alt="Profile pic not available"
                  />
                  <p
                    style={{
                      color: "black",
                      display: "inline",
                      fontWeight: "400",
                      fontFamily: "geogria",
                    }}
                  >
                    {" "}
                    Hello!
                  </p>
                  <p
                    style={{
                      color: "black",
                      display: "inline",
                      fontWeight: "400",
                      fontFamily: "geogria",
                    }}
                  >
                    {" "}
                    {user.FullName},Welcome to your account setting's
                  </p>
                </Card>
                {/**Personal information card  */}
                <Card className="text-center shadow" id="personalinformation">
                  <Card.Header>Personal Information</Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name : </Form.Label>
                        <Form.Label>{user.FullName}</Form.Label>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>E-mail : {user.Email}</Form.Label>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-8 col-sm-12">
                {/**UPDATE ADDRESS CARD  */}
                <Card className="shadow " id="manageaddress">
                  <Card.Header>Address</Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>City/Town/village : {user.City}</Form.Label>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>
                          Appartment/Suite//Home Address : {user.HomeAddress}
                        </Form.Label>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>State/Province : {user.State}</Form.Label>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Country : {user.Country}</Form.Label>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>
                          Pin/Zip/Postal code : {user.Pin}{" "}
                        </Form.Label>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </div>

            {/**F A Q */}
            <Card className="shadow mt-2">
              <Card.Header>FAQ's</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ fontWeight: "400" }}>
                    What happens when I update my email address (or mobile
                    number)?
                  </p>
                  <br></br>
                  <p style={{ fontSize: "small" }}>
                    {" "}
                    Your login email id (or mobile number) changes, likewise.
                    You'll receive all your account related communication on
                    your updated email address (or mobile number).
                  </p>
                  <p style={{ fontWeight: "400" }}>
                    <br></br> When will my Debacle account be updated with the
                    new email address (or mobile number)?
                  </p>
                  <br></br>
                  <p style={{ fontSize: "small" }}>
                    {" "}
                    It happens as soon as you confirm the verification code sent
                    to your email (or mobile) and save the changes.
                  </p>
                  <br></br>
                  <p style={{ fontWeight: "400" }}>
                    {" "}
                    What happens to my existing Debacle account when I update my
                    email address (or mobile number)?
                  </p>
                  <br></br>
                  <p style={{ fontSize: "small" }}>
                    {" "}
                    Updating your email address (or mobile number) doesn't
                    invalidate your account. Your account remains fully
                    functional. You'll continue seeing your Order history, saved
                    information and personal details.
                  </p>
                  <br></br>{" "}
                  <p style={{ fontWeight: "400" }}>
                    {" "}
                    Does my Seller account get affected when I update my email
                    address?
                  </p>
                  <p style={{ fontSize: "small" }}>
                    Debacle has a 'single sign-on' policy. Any changes will
                    reflect in your Seller account also.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous India <cite title="Source Title"></cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default BuyerProfilePage;
