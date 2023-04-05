/*
                               Thought  Note 
Here I created a reducer function for handling user-related actions in a Redux store.

It defines an initial state object that only contains an empty user object. 

The reducer function takes two arguments: state and action.

The switch statement inside the function checks the type of the incoming action and 
performs the corresponding state update based on that.

If the action type is "LOGIN_SUCCESS", it returns a new state object with the user 
property updated with the payload of the action.

If the action type is "LOGOUT", it returns the initial state object.

If the action type is "LOGIN_ERROR", it also returns the initial state object.

If the action type is not recognized, it returns the current state object as is.



*/
const initialState = {
  //user: {},
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        // user: action.payload,
        ...action.payload,
      };
    //break;
    case "LOGOUT":
      return initialState;
    //break
    case "LOGIN_ERROR":
      return initialState;
    //break;
    default:
      return initialState;
  }
};
