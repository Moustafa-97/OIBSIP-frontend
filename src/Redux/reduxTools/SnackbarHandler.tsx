import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  isOpen: false,
};

const SnackbarHandler = createSlice({
  name: "snackhandler",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload.message;
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setMessage, setOpen } = SnackbarHandler.actions;
export default SnackbarHandler.reducer;
