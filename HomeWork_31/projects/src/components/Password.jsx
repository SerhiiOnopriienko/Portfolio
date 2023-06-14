import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Input from "./UI/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContext } from "./Context/Context";
import { showConclusion } from "./Reducer/Reducer";
import * as yup from "yup";
import ButtonComponent from "./UI/ButtonConmponent";
import { changeNum } from "./Reducer/Reducer";

const userSchema = yup.object({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

export default function Password() {
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
      <h1>Password</h1>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Input
          defaultValue={!conclusionData ? "" : conclusionData.password}
          {...register("password")}
          type="password"
          label="Choose password"
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <Input
          defaultValue={!conclusionData ? "" : conclusionData.confirmPassword}
          {...register("confirmPassword")}
          type="password"
          label="Confirm password"
        />
        <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        <div>
          <ButtonComponent
            onClick={() => dispatch(changeNum(--num))}
            type="button"
          >
            Previsious Button
          </ButtonComponent>
          <ButtonComponent type="submit" sx={{ ml: 27 }}>
            Next Step
          </ButtonComponent>
        </div>
      </Box>
    </>
  );
}
