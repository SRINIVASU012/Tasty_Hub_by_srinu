import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",

  initialState: {
    carts: [],
    mycard: [],
  },

  reducers: {
    addtocart: (state, action) => {
      var ind = state.carts.findIndex(
        (obj) =>
          obj.id == action.payload.id &&
          obj.username == action.payload.username,
      );

      if (ind == -1) {
        state.carts.push(action.payload);
      } else {
        state.carts[ind].quantity = state.carts[ind].quantity + 1;
      }

      state.mycard = state.carts.filter(
        (obj) => obj.username == action.payload.username,
      );
    },

    removefromcart: (state, action) => {
      var ind = state.carts.findIndex(
        (obj) =>
          obj.id == action.payload.id &&
          obj.username == action.payload.username,
      );

      if (ind != -1) {
        state.carts.splice(ind, 1);
      }

      state.mycard = state.carts.filter(
        (obj) => obj.username == action.payload.username,
      );
    },

    getcartbyuser: (state, action) => {
      state.mycard = state.carts.filter(
        (obj) => obj.username == action.payload,
      );
    },
  },
});

export const { addtocart, getcartbyuser, removefromcart } = cartslice.actions;

export default cartslice.reducer;
