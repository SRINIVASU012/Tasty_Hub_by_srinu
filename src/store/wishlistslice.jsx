import { createSlice } from "@reduxjs/toolkit";

const wishlistslice = createSlice({
  name: "wishlist",

  initialState: {
    wishlist: [],
    mywishlist: [],
  },

  reducers: {
    addtowishlist: (state, action) => {
      var ind = state.wishlist.findIndex(
        (obj) =>
          obj.id == action.payload.id &&
          obj.username == action.payload.username,
      );

      if (ind == -1) {
        state.wishlist.push(action.payload);
      }

      state.mywishlist = state.wishlist.filter(
        (obj) => obj.username == action.payload.username,
      );
    },

    removefromwishlist: (state, action) => {
      var ind = state.wishlist.findIndex(
        (obj) =>
          obj.id == action.payload.id &&
          obj.username == action.payload.username,
      );

      if (ind != -1) {
        state.wishlist.splice(ind, 1);
      }

      state.mywishlist = state.wishlist.filter(
        (obj) => obj.username == action.payload.username,
      );
    },

    getwishlistbyuser: (state, action) => {
      state.mywishlist = state.wishlist.filter(
        (obj) => obj.username == action.payload,
      );
    },
  },
});

export const { addtowishlist, removefromwishlist, getwishlistbyuser } =wishlistslice.actions;

export default wishlistslice.reducer;
