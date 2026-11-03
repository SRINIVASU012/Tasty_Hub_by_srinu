import { createSlice } from "@reduxjs/toolkit";

const orderslice = createSlice({
  name: "order",

  initialState: {
    order: [],
    myorder: [],
  },

  reducers: {
    addtoorder: (state, action) => {
      state.order.push(action.payload);

      state.myorder = state.order.filter(
        (obj) => obj.username == action.payload.username,
      );
    },

    orderbyusername: (state, action) => {
      state.myorder = state.order.filter(
        (obj) => obj.username == action.payload,
      );
    },

    cancelorder: (state, action) => {
      var ind = state.order.findIndex(
        (obj) =>
          obj.orderid == action.payload.orderid &&
          obj.username == action.payload.username,
      );

      if (ind != -1) {
        state.order.splice(ind, 1);
      }

      state.myorder = state.order.filter(
        (obj) => obj.username == action.payload.username,
      );
    },
  },
});

export const { addtoorder, orderbyusername, cancelorder } = orderslice.actions;

export default orderslice.reducer;
