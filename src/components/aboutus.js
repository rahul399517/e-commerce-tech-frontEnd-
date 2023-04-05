/*
                        Thought Note

This is just a component that create " About us " Devision in Home page (Home page call About us component)
*/
import Carousel from "react-bootstrap/Carousel";
import Mainslide1 from "../images/Mainslide1.png";
function AboutUs() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <div className="row" style={{ backgroundColor: "white" }}>
          <div className="col-md-4 col-sm-12">
            <img
              style={{ width: "100%", height: "auto" }}
              src={Mainslide1}
              alt=" not available"
            />
          </div>
          <div className="col-md-8 col-sm-12 p-3">
            <h1 style={{ color: "black" }}>About Us</h1>
            <p
              style={{
                color: "black",
                fontWeight: "600",
                textAlign: "justify",
              }}
            >
              {" "}
              Welcome to our premium tech e-commerce site, where you can find
              the latest and greatest technology products to enhance your
              lifestyle. Our company was founded with a passion for technology
              and a commitment to providing our customers with the best possible
              shopping experience. We understand the importance of having access
              to cutting-edge products that can simplify your life, improve your
              productivity, and bring you closer to the world around you. That's
              why we have curated a selection of the most innovative and
              high-quality tech products available on the market today. Our team
              is made up of tech enthusiasts who are dedicated to staying
              up-to-date with the latest trends and innovations in the tech
              industry. We take pride in providing our customers with expert
              advice and personalized service, so you can make informed
              decisions about the products you choose to buy. At our premium
              tech e-commerce site, we strive to create a seamless and enjoyable
              shopping experience for our customers. From the moment you visit
              our site, you will be greeted with a user-friendly interface that
              makes it easy to browse and compare products. We offer competitive
              pricing, fast and reliable shipping, and hassle-free returns, so
              you can shop with confidence. We believe in building lasting
              relationships with our customers, and we are committed to
              providing exceptional service at every step of the way. If you
              have any questions or concerns, our customer service team is
              always available to assist you. Thank you for choosing our premium
              tech e-commerce site. We look forward to helping you discover the
              latest and greatest tech products that will enhance your life.
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutUs;
