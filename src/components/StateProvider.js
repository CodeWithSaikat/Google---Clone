import React, { createContext, useContext, useReducer } from "react";

// data layer preparing hobe
export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  // const state = {
  //   name: "Saikat",
  //   lastName: "Das Das",
  // };
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// this hook allows to pull the information from the data layer
export const useStateValue = () => useContext(StateContext);
