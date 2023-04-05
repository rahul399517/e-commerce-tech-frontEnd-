/*
                          Thought Note 
Here I am  creating a Redux store. 

It imports createStore and applyMiddleware from the 'redux' library, composeWithDevTools 
from the 'redux-devtools-extension' library, and combineReducer from a custom 'combineReducer' module. 


I also  imported 'thunk' middleware from the 'redux-thunk' library.


I  created an array called 'middleware' that contains the 'thunk' middleware.


I  created a constant called 'cartFromLocalStorage' that retrieves cart items from the browser's local 
storage if they exist, and sets an empty array as the default value.


It creates an initial state object called 'INITIAL_STATE' that has a 'cart' property with a 'cartItems'
property set to the 'cartFromLocalStorage' value.

It exports a 'store' constant that calls createStore, passing in the 'combineReducer' function 
and 'INITIAL_STATE', and also passes in 'composeWithDevTools' with 'applyMiddleware' and 'middleware' as
arguments to enhance the store with the ability to use Redux DevTools and handle asynchronous actions with
'thunk'.                         




*/

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducer } from "../redux/combineReducer";

const middleware = [thunk]; //for async request which can't don with redux

const cartFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const INITIAL_STATE = {
  //intial state so that we do not loose value on refresh
  cart: {
    cartItems: cartFromLocalStorage,
  },
};
export const store = createStore(
  combineReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);
