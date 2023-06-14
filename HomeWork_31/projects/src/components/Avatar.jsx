import React, { createRef, useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ButtonComponent from "./UI/ButtonConmponent";
import { useForm } from "react-hook-form";
import { FormContext } from "./Context/Context";
import { showConclusion } from "./Reducer/Reducer";
import { changeNum } from "./Reducer/Reducer";

export default function Avatar() {
  let [{ conclusionData, num }, dispatch] = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fileInputRef = createRef();
  const [image, setImage] = useState({
    src: "",
    name: "",
  });

  function updateImage(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
    }

    reader.onloadend = () => {
      setImage({
        src: reader.result,
        name: file.name,
      });
    };
  }

  function onSubmit() {
    dispatch(changeNum(++num));
    dispatch(showConclusion(image));
  }

  function choseFile() {
    fileInputRef.current.click();
  }

  return (
    <>
      <h1>Avatar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button
          {...register("avatar")}
          fullWidth
          sx={{ marginBottom: "10px" }}
          color="primary"
          onClick={choseFile}
        >
          Choose File
        </Button>
        <label>
          <TextField
            sx={{ display: "none" }}
            type="file"
            onChange={updateImage}
            ref={fileInputRef}
          />
        </label>
        <img
          style={{ maxWidth: 400 }}
          src={!conclusionData.src ? image.src : conclusionData.src}
          alt={image.name}
        />
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
      </form>
    </>
  );
}
