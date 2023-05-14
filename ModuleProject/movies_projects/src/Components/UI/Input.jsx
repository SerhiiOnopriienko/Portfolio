import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";

const Input = forwardRef((props, ref) => (
  <TextField
    {...props}
    id="outlined-basic"
    variant="outlined"
    color="primary"
    inputRef={ref}
    sx={{ mb: 1 }}
  />
));

export default Input;
