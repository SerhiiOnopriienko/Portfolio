import React, { createContext, useReducer } from "react";
import { formReducer, initialState } from "../Reducer/Reducer";

export const FormContext = createContext({});

export default function FormContextComponent({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider value={[state, dispatch]}>
      {children}
    </FormContext.Provider>
  );
}
