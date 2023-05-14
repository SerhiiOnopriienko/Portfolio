import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { filterLanguage } from "../../actions/filters";

export default function Languages() {
  const { languages } = useSelector((state) => state.filtersReducer);
  const optionLanguages = languages.map((language) => language.english_name);
  let [selectedLanguage, setSelectedLanguage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterLanguage(selectedLanguage));
  }, [selectedLanguage]);

  return (
    <Paper
      elevation={3}
      sx={{
        margin: "30px 5px 5px 0",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={optionLanguages}
        renderInput={(params) => (
          <TextField {...params} label="Language">
            {setSelectedLanguage(params.inputProps.value)}
          </TextField>
        )}
      />
    </Paper>
  );
}
