import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouter({ children }) {
  const { userName } = useSelector((store) => store.userReducer);
  if (!userName.userName) {
    return <Navigate to="/login" />;
  }
  return children;
}
