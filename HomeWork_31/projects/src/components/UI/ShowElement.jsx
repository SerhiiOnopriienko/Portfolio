import React, { useContext } from "react";
import BasicInformation from "../BasicInformation";
import Password from "../Password";
import Conclusion from "../Conclusion";
import { FormContext } from "../Context/Context";
import Avatar from "../Avatar";

export default function ShowElement() {
  let [{ num }] = useContext(FormContext);

  if (num === 1) {
    return <BasicInformation />;
  } else if (num === 2) {
    return <Password />;
  } else if (num === 3) {
    return <Avatar />;
  }
  return <Conclusion />;
}
