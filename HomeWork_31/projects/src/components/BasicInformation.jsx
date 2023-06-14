import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Input from "./UI/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormContext } from "./Context/Context";
import { showConclusion } from "./Reducer/Reducer";
import ButtonComponent from "./UI/ButtonConmponent";
import { changeNum } from "./Reducer/Reducer";

let userSchema = yup.object({
  firstName: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().email().required(),
});

export default function BasicInformation() {
  let [{ conclusionData, num }, dispatch] = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const onSubmit = (conclusionData) => {
    dispatch(changeNum(++num));
    dispatch(showConclusion(conclusionData));
  };

  return (
    <>
      <h1>Personal info</h1>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Input
          defaultValue={!conclusionData ? "" : conclusionData.firstName}
          {...register("firstName")}
          label="Enter your first name"
        />
        <p style={{ color: "red" }}>{errors.firstName?.message}</p>
        <Input
          defaultValue={!conclusionData ? "" : conclusionData.surname}
          {...register("surname")}
          label="Enter your surname"
        />
        <p style={{ color: "red" }}>{errors.surname?.message}</p>
        <Input
          defaultValue={!conclusionData ? "" : conclusionData.email}
          {...register("email")}
          label="Enter your e-mail"
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <ButtonComponent type="submit" sx={{ ml: 48 }}>
          Next Step
        </ButtonComponent>
      </Box>
    </>
  );
}
