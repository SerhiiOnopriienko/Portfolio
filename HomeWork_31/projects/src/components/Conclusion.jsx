import React, { useContext, useState } from "react";
import { FormContext } from "./Context/Context";
import ButtonComponent from "./UI/ButtonConmponent";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { changeNum } from "./Reducer/Reducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Conclusion() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [{ conclusionData, num }, dispatch] = useContext(FormContext);
  const greettings = `Dear ${conclusionData.firstName} ${conclusionData.surname}, welcome to our space, verification link was sent on your email ${conclusionData.email}, your password is ${conclusionData.password}.`;

  return (
    <>
      <h1>Conclusion</h1>
      <div>
        <p>
          <b>First name:</b> {conclusionData.firstName}
        </p>
        <p>
          <b>Surname:</b> {conclusionData.surname}
        </p>
        <p>
          <b>E-mail:</b> {conclusionData.email}
        </p>
        <p>
          <b>Password: </b>
          {conclusionData.password}
        </p>
        <p>
          <b>Avatar: </b>
          <img style={{ maxWidth: 200 }} src={conclusionData.src} alt="icon" />
        </p>
      </div>
      <div>
        <ButtonComponent
          onClick={() => dispatch(changeNum(--num))}
          type="button"
        >
          Previsious Button
        </ButtonComponent>
        <ButtonComponent type="submit" onClick={handleOpen} sx={{ ml: 29.5 }}>
          Finish
        </ButtonComponent>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Congratulations!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {greettings}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
