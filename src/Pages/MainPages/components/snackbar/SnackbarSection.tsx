import React, { useState } from "react";
import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { setOpen } from "../../../redux/reduxTools/SnackbarHandler";

export default function SnackbarSection() {
  const dispatch = useDispatch();
  const message = useSelector((state: unknown | any) => state.snackbar.message);
  const open = useSelector((state: unknown | any) => state.snackbar.isOpen);
  // const [wishWatchresp, setwishWatchresp] = useState(Object);
  // const [snackOpen, setSnackOpen] = useState(open);
  //  mui
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: String
  ) => {
    if (reason === "clickaway") {
      return;
    }
    // dispatch(setOpen(false));
  };
  return (
    <div key={Math.random()}>
    <Snackbar
      message={message}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={handleClose}
    />
    </div>
  );
}
