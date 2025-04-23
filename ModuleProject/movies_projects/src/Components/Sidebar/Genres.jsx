import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterGenres } from "../../actions/filters";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Genres() {
  const theme = useTheme();
  const [genreName, setGenreName] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenreName(value);
  };

  const { genres } = useSelector((state) => state.filtersReducer);

  useEffect(() => {
    dispatch(filterGenres([]));
    dispatch(filterGenres(genreName));
  }, [genreName]);
  return (
    <Paper
      elevation={3}
      sx={{
        margin: "30px 5px 5px 0",
      }}
    >
      <div>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel>Genres</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={genreName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {genres.map((genre) => (
              <MenuItem
                key={genre.id}
                value={genre.name}
                style={getStyles(genre.name, genreName, theme)}
              >
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Paper>
  );
}
