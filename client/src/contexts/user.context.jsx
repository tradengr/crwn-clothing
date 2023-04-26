import { createContext, useEffect, useReducer } from "react";

import { httpGetUser } from "../api/serverAPI";

// Actual value/context
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

// First param: current state obj
// Second param: action is what we pass into the dispatch function
const userReducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      throw new Error(`Unhandled type ${type} In userReducer`);
  }
}

const INITIAL_STATE = {
  currentUser: null,
};

// Functional Component - Context Provider
export const UserProvider = ({ children }) => {
  // useReducer:
    // First param: a reducer function we perform on our state to create new state
    // Second param: initial value of our state
  // Return value (array):
    // First element: state: current value being stored in the reducer
      // value is either Initial State or Return value of reducer function
    // Second element: dispatch(): calls the reducer function to update state by passing the action obj
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
  }

  useEffect(() => {
    httpGetUser().then(res => setCurrentUser(res.data));
  }, [])

  const value = { currentUser, setCurrentUser };

  return(
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}