import React from "react";
import Box from "@mui/material/Box";
import Input from "../../Components/UI/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Buttons from "../../Components/UI/Buttons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUserName } from "../../actions/user";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

let userSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  userName: yup
    .string()
    .matches(
      /^[a-z][a-zA-Z0-9_.]*$/g,
      "User name have to start from lower cse and can only contain Latin letters, numbers or symbols '.' and '_'."
    )
    .required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(5, "Password length must be not less than 5")
    .required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const navigate = useNavigate();

  const dispatch = useDispatch((state) => state.useReducer);

  function onSubmit(userName) {
    dispatch(loadUserName(userName));
    navigate("/main");
  }

  return (
    <div className="auth-container">
      <h1 className="auth-header">Registration</h1>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "0 auto",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Input {...register("firstName")} label="Enter your first name" />
        <p style={{ color: "red" }}>{errors.firstName?.message}</p>
        <Input {...register("lastName")} label="Enter your last name" />
        <p style={{ color: "red" }}>{errors.lastName?.message}</p>
        <Input {...register("userName")} label="Enter your user name" />
        <p style={{ color: "red" }}>{errors.userName?.message}</p>
        <Input {...register("email")} label="Enter your e-mail" />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <label className="birth-label">Choose your birth date</label>
        <input
          {...register("birthDate")}
          className="birth-input"
          type="date"
        ></input>
        <FormControl sx={{ mb: "20px" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              {...register("gender")}
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              {...register("gender")}
              value="male"
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              {...register("gender")}
              value="other"
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
        <Input
          {...register("password")}
          type="password"
          label="Choose password"
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <Input
          {...register("confirmPassword")}
          type="password"
          label="Confirm password"
        />
        <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        <Buttons sx={{ mb: "20px" }} type={"submit"}>
          Register
        </Buttons>
        <Link to="/login">Already have an account? Login Here.</Link>
      </Box>
    </div>
  );
}
