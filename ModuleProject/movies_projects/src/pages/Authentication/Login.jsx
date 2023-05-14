import React from "react";
import Box from "@mui/material/Box";
import Input from "../../Components/UI/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Buttons from "../../Components/UI/Buttons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUserName } from "../../actions/user";
import { Link } from "react-router-dom";

let userSchema = yup.object({
  userName: yup.string().required(),
  password: yup.string().required(),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function onSubmit(userName) {
    dispatch(loadUserName(userName));
    navigate("/main");
  }

  return (
    <div className="auth-container">
      <h1 className="auth-header">Login</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "0 auto",
        }}
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Input {...register("userName")} label="Enter your user name" />
        <p style={{ color: "red" }}>{errors.userName?.message}</p>
        <Input
          {...register("password")}
          type="password"
          label="Choose password"
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <Buttons sx={{ mb: "20px" }} type={"submit"}>
          Login
        </Buttons>
        <Link to="/register">Don`t have an account? Register Here.</Link>
      </Box>
    </div>
  );
}
