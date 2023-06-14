import React from "react";
import Paper from "@mui/material/Paper";
import FormContextComponent from "./Context/Context";
import ShowElement from "./UI/ShowElement";

export default function ShowStep() {
  return (
    <FormContextComponent>
      <div className="wrapper">
        <Paper
          elevation={12}
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
          }}
        >
          <ShowElement />
        </Paper>
      </div>
    </FormContextComponent>
  );
}
