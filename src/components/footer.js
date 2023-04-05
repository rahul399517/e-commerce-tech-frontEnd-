/**                        Thought Note 
 * 
 * 
 * This is a simple footer component for a website. 
 * 
 * It contains three sections, each containing a list of links or icons.
 * 
 *  The first section lists categories such as laptops, tablets, watches, 
 * smartphones, and electronics. The second section lists icons for social
 *  media sites like Instagram, Facebook, Twitter, and Tumblr. 
 * 
 * 
 * The last section contains links to careers, an affiliate program, and vouchers.
 * 
 * 
 *  There is also a search bar with a search button in this section.

 The component is built using React and React Bootstrap.
 
 
 The useNavigate hook from react-router-dom is used to handle navigation to the search page when the search button is clicked. The component is styled using an external CSS file.
 * 
 */
import "../components/footer.css";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

function Footer() {
  //navigate defining
  const navigate = useNavigate();
  //go to search API
  const ToSearch = () => {
    navigate("/searchpage");
  };
  return (
    <div id="footer">
      <div className="backtotop">
        <div
          className="col-sm-12"
          style={{
            backgroundColor: "black",
            color: "black",
            textAlign: "center",
          }}
        >
          <a style={{ color: "white", fontStyle: "none" }} href="#">
            Go Back To Top
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <ul>
            <h6 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              <u>Category</u>
            </h6>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                  listStyleType: "none",
                }}
              >
                <a style={{ color: "white" }} href="/laptop">
                  Laptop
                </a>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <a style={{ color: "white" }} href="/tablets">
                  Tablets
                </a>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <a style={{ color: "white" }} href="/watches">
                  watches
                </a>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <a style={{ color: "white" }} href="/smartphones">
                  Smart Phones
                </a>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <a style={{ color: "white" }} href="/electronics">
                  Electronic
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="col-sm-3">
          <ul>
            <h6 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              <u>Reach us at : </u>
            </h6>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <i
                  style={{ color: "white" }}
                  className="fa-brands fa-instagram"
                ></i>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <i
                  style={{ color: "white" }}
                  className="fa-brands fa-facebook"
                ></i>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <i
                  style={{ color: "white" }}
                  className="fa-brands fa-twitter"
                ></i>
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                <i
                  style={{ color: "white" }}
                  className="fa-brands fa-tumblr"
                ></i>
              </p>
            </li>
          </ul>
        </div>

        <div className="col-sm-6">
          <ul>
            <h6 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              <u>
                {" "}
                <br></br>
                <InputGroup className="mb-3" style={{ width: "80%" }}>
                  <InputGroup.Text
                    onClick={ToSearch}
                    id="basic-addon2"
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-magnifying-glass">&nbsp;SEARCH</i>
                  </InputGroup.Text>
                </InputGroup>
              </u>
            </h6>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                Careers
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                Affilate program
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                Vouchers
              </p>
            </li>
            <li>
              <p
                style={{
                  fontFamily: "gerogia",
                  textAllign: "centre",
                  textDecoration: "none",
                }}
              >
                People
              </p>
            </li>
          </ul>
        </div>

        <div className="row">
          <div className="col-sm-12">
            &copy;copyright E-commerce @Premium tech 2023-24
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
