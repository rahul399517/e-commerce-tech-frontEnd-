/*                          Thought Note 


This code exports a Caraousal effect  called MainSlider that renders a carousel 
using the Carousel component from the react-bootstrap library. 


The carousel displays three slides, each containing an image sourced from three 
different image files imported at the beginning of the code.


The fade property of the Carousel component makes the transition between slides 
fade in and out rather than sliding horizontally.


The CSS file mainslider.css is imported to style the carousel.



 */
import Carousel from "react-bootstrap/Carousel";
import Mainslide1 from "../images/Mainslide1.png";
import Mainslide2 from "../images/Mainslide2.png";
import Mainslide3 from "../images/Mainslide3.png";

import "./mainslider.css";

function MainSlider() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={Mainslide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Mainslide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Mainslide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MainSlider;
