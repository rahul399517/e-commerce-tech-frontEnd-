/*
                                 Thought  Note 


This code represents a basic web application with routes for user authentication,
profile pages, product listings, and shopping cart functionality. 

The Redux store is used for handling user and cart data, while react-use-cart is used
for handling shopping cart functionality within the application.


This is the code for the main App component of a web application. 

It includes the following:

Import statements for various components and dependencies such as react-router-dom,
 react-use-cart, and redux.


 A DynamicRouting component that is responsible for handling user data when the page \
 is refreshed. 
 
 
This component checks whether user data is available in local storage and dispatches 
relevant actions to the Redux store if needed. 

It also contains various routes for the application.


The main App component itself, which is wrapped in a CartProvider component for handling 
shopping cart data using react-use-cart. 

The App component renders the TopHeader, DynamicRouting, and Footer components within a 
Router component from react-router-dom.




*/
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopHeader from "./components/navbar";
import Footer from "./components/footer";
import Login from "./pages/login";
import SignUpasbuyer from "./pages/signupasbuyer";
import SignUpasSeller from "./pages/signupasseller";
import LogInAsSeller from "./pages/loginasseller";
import BuyerProfilePage from "./pages/profilebuyer";
import SellerProfilePage from "./pages/profileseller";
import PlaceOrder from "./pages/placeorder";
import UpdateAddressPage from "./pages/updatepage";
import AllProduct from "./pages/allproduct";
import Laptops from "./pages/laptop";
import Tablets from "./pages/tablets";
import Watches from "./pages/watches";
import SmartPhones from "./pages/smartphones";
import Electronic from "./pages/electronic";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchPage from "./pages/searchpage";
import Cart from "./pages/cart";
import { CartProvider } from "react-use-cart";
import ProductDetails from "./pages/productdetails";
import * as actionTypes from "./constant/cartconstant";
function App() {
  //Below DynamicRouting() component is created ,so that when we refresh the page ,the user data do not get lost .......
  //Also we used  DynamicRouting() component ,since App.js is first executed ,so we created a dynamic component to use 'useNavigate' function(as use Navigate function cannot be used in App.js ),
  function DynamicRouting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("user"));
      const cartData = JSON.parse(localStorage.getItem("cart"));
      if (userData) {
        dispatch({ type: "LOGIN_SUCCESS", payload: userData });
        if (cartData) {
          dispatch({ type: actionTypes.ADD_TO_CART, payload: cartData });
        } // navigate("/allproduct");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "LOGIN_ERROR" });
        navigate("/login");
      }
    }, []);
    return (
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/signupasbuyer" element={<SignUpasbuyer />}></Route>
        <Route
          exact
          path="/signupasseller"
          element={<SignUpasSeller />}
        ></Route>
        <Route exact path="/loginasseller" element={<LogInAsSeller />}></Route>
        <Route
          exact
          path="/profilebuyer"
          element={<BuyerProfilePage />}
        ></Route>
        <Route
          exact
          path="/profileseller"
          element={<SellerProfilePage />}
        ></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/placeorder/:id" element={<PlaceOrder />}></Route>
        <Route exact path="/allproduct" element={<AllProduct />}></Route>
        <Route exact path="/laptop" element={<Laptops />}></Route>
        <Route exact path="/tablets" element={<Tablets />}></Route>
        <Route exact path="/watches" element={<Watches />}></Route>
        <Route exact path="/electronics" element={<Electronic />}></Route>
        <Route exact path="/smartphones" element={<SmartPhones />}></Route>
        <Route exact path="/searchpage" element={<SearchPage />}></Route>
        <Route exact path="/update/:id" element={<UpdateAddressPage />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route
          exact
          path="/productdetails/:id"
          element={<ProductDetails />}
        ></Route>
      </Routes>
    );
  }
  return (
    <div className="App">
      <CartProvider>
        {/*wraping the router in cartProvider,from contextreducer */}
        <Router>
          <TopHeader />
          <DynamicRouting />
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
