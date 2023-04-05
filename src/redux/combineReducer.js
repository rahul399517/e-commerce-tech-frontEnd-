/*
                          Thought Note 
  
 This page exports a combined reducer that combines the two reducers 
 userReducer and cartReducer using the combineReducers function from 
 the Redux library. 
 
 
 The userReducer handles the state related to the user.
 
 the cartReducer handles the state related to the cart.

 The combineReducers function returns a new reducer that uses each of the
 input reducers to manage a part of the overall state. 
 
  
 When an action is dispatched to the combined reducer, the input reducers are 
 called with the slice of state they manage and the action. 
 
 
 The resulting state updates are combined into a new state object, which becomes 
 the next state of the application.                        

*/
import { combineReducers } from "redux";
import { userReducer } from "../redux/userReducer";
import { cartReducer } from "./cartReducer";

export const combineReducer = combineReducers({
  //userReducer: userReducer,
  // user and cart are the keys in the state object that correspond
  //to the state managed by userReducer and cartReducer.

  user: userReducer,
  cart: cartReducer,
});
