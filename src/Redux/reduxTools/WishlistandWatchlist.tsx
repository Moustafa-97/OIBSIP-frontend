import { createSlice } from "@reduxjs/toolkit";

const User: Object | null | any = localStorage.getItem("user");
const parsedWishlist: any = JSON.parse(User);
const parsedWatchlist: any = JSON.parse(User);

const initialState = {
  loged: false,
  wishMovie: User ? parsedWishlist.wishlist : [],
  wishnumber: User ? parsedWishlist.wishlist?.length : 0,
  watchMovie: User ? parsedWatchlist.watched : [],
  watchnumber: User ? parsedWatchlist.watched?.length : 0,
  message: "please login",
  page: 1,
};
const WishlistandWatchlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    LoginHandler: (state, action) => {
      state.watchMovie = action.payload.data.user.watched;
      state.wishMovie = action.payload.data.user.wishlist;
      state.watchnumber = action.payload.data.user.watched?.length;
      state.wishnumber = action.payload.data.user.wishlist?.length;
    },
    AddRemoveMovieWish: (state, action) => {
      if (!state.loged) {
        let movieIndex = state.wishMovie?.findIndex(
          (i: any) => i === action.payload.id
        );
        if (movieIndex >= 0) {
          // remove from array
          state.wishMovie.splice(movieIndex, 1);
          state.wishnumber -= 1;
        } else {
          // add to array
          const newItem = action.payload.id;
          state.wishMovie.push(newItem);
          state.wishnumber += 1;
        }
      } else {
        alert(state.message);
      }
    },
    AddRemoveMovieWatch: (state, action) => {
      if (!state.loged) {
        let movieIndex = state.watchMovie?.findIndex(
          (i: any) => i === action.payload.id
        );
        if (movieIndex >= 0) {
          // remove the movie from the array
          state.watchMovie.splice(movieIndex, 1);
          state.watchnumber -= 1;
        } else {
          // add the movie to the array
          const newItem = action.payload.id;
          state.watchMovie.push(newItem);
          state.watchnumber += 1;
        }
      } else {
        alert(state.message);
      }
    },
    RefreshPage: (state, action) => {
      state.page = action.payload;
    },
    Logout: (state, action) => {
      state.watchnumber = 0;
      state.wishnumber = 0;
      state.watchMovie = [];
      state.wishMovie = [];
    },
  },
});
export const {
  AddRemoveMovieWish,
  AddRemoveMovieWatch,
  RefreshPage,
  Logout,
  LoginHandler,
} = WishlistandWatchlist.actions;

export default WishlistandWatchlist.reducer;
