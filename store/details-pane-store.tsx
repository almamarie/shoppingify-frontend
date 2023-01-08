import { createSlice } from "@reduxjs/toolkit";
import { DetailsPaneSliceType } from "../public/utils/types";

const currentShowingStates = [
  "add new item",
  "show selected item",
  "show current cart",
];

const detailsPaneSlice = createSlice({
  name: "detailsPane",
  initialState: {
    currentShowing: "show current cart",
    cartId: "",
    itemId: "",
  },
  reducers: {
    setShowing(state, action) {
      if (!currentShowingStates.find(action.payload)) return;
      state.currentShowing = action.payload;
    },

    setCartId(state, action) {
      // sets the id of the current cart
      state.cartId = action.payload;
    },

    setItemId(state, action) {
      // sets the id of the current item
      state.itemId = action.payload;
    },

    setCurrentCart(state, action) {
      // sets the current cart and the currentShowing flag
      state.cartId = action.payload.cartId;
      state.currentShowing = "show current cart";
    },

    setCurrentItem(state, action) {
      // sets the current item and the show flag
      state.itemId = action.payload.itemId;
      state.currentShowing = "show selected item";
    },
  },
});

export const detailsPaneActions = detailsPaneSlice.actions;
export default detailsPaneSlice;
