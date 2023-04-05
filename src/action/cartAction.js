//                       Thought Note :
/*  This code show how to use Redux and local storage 
    to manage a shopping cart in a React application,
    and how to use axios to fetch data from an API endpoint.*/
import axios from "axios";
import { API_BASE_URL } from "../config";
import * as actionTypes from "../constant/cartconstant";

export const addToCart = (_id, qty) => async (dispatch, getState) => {
  // The function uses the axios library to make an HTTP request to
  // an API endpoint to retrieve the product details based on the provided _id.
  const { data } = await axios.get(`${API_BASE_URL}/products/${_id}`);
  console.log(data);

  // the dispatch function is called with an object containing two properties: type and payload.
  dispatch({
    // The type property is a string that identifies the type of action being dispatched.
    // In this case, it is set to actionTypes
    // .ADD_TO_CART, which suggests that the action is adding an item to the cart.
    type: actionTypes.ADD_TO_CART,

    // The payload property is an object that contains the data associated with the action being dispatched.
    // In this case,
    //  it contains the product details that were retrieved from the API endpoint using axios
    payload: {
      product: data._id,
      ProductName: data.ProductName,
      Cost: data.Cost,
      Image: data.Image,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (_id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: _id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
