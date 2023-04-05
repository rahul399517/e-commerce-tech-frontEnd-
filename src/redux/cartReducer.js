/*
                                      Thought Note 
I created this function to be used as part of a larger Redux store in a web application to
manage the state of the cart. 

It is  connected to other components using the connect function from the react-redux library.

Here I created Redux reducer function that manages the cart state of a web application.


The cartReducer function takes two arguments, state and action. 


state is initialized as an object with an empty array for cartItems, which represents 
the items currently in the cart.


action is an object that describes an action to be performed on the state.

The switch statement handles two actions: ADD_TO_CART and REMOVE_FROM_CART.

In the ADD_TO_CART case, the function checks if the item being added to the cart already
exists in the cart by checking the product property of each item. 


If it does, the function creates a new state object with cartItems replaced by a new array 
where the existing item is replaced with the new item.


If it doesn't, the function creates a new state object with cartItems replaced by a new array
with the new item added to the end.


In the REMOVE_FROM_CART case, the function creates a new state object with cartItems replaced
by a new array where the item with the product property matching action.payload is removed.


If the action.type does not match any of the cases, the function returns the current state unchanged.







*/
import * as actionTypes from "../constant/cartconstant";
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload; //if item , save in payload
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
