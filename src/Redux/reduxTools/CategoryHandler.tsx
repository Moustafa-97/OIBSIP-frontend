import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "All",
};
const ThisCurrentCategory = createSlice({
  name: "currentCategory",
  initialState,
  reducers: {
    CurrentCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});
export const { CurrentCategory } = ThisCurrentCategory.actions;

export default ThisCurrentCategory.reducer;
