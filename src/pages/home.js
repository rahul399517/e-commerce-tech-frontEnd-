//                  Thought Note for Home Page

/*

=>	Reasons behind the layout and design of the Home page :


o	Make the page look good and easy to use

o	Show users what products are available and what they look like

o	Use pictures and graphics to make the page more interesting

o	Organize the page in sections to help users find what they're looking for

o	Show a slideshow of featured products and promotions

o	Display categories of products so users can quickly find what they need

o	Highlight popular and high-quality items

o	Share information about the company and its values

o	Use a modern and simple design with neutral colors

o	Make sure the text is easy to read and understand.

*/

import AboutUs from "../components/aboutus";
import CategoryCardMobile from "../components/categorycardsmobile";
import CategoryIntro from "../components/categoryintro";
import CategoryIntromobile from "../components/categoryintromobile";
import FeaturedProduct from "../components/featuredslide";

import MainSlider from "../components/mainslider";

import "./home.css";

function Home() {
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* In Home Page , I'm calling different compnents together from the component folder  */}

      <MainSlider />

      <CategoryCardMobile />
      <div id="categoryintroforbigscreen">
        <CategoryIntro />
      </div>
      <div id="categoryintroforsmallscreen">
        <CategoryIntromobile />
      </div>
      <FeaturedProduct />

      <AboutUs />
    </div>
  );
}
export default Home;

