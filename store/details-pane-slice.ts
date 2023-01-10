import { createSlice } from "@reduxjs/toolkit";
import { DetailsPaneSliceType } from "../public/utils/types";

const currentShowingStates = [
  "add new item",
  "show selected item",
  "show current cart",
];

interface DetailsPaneState {
  currentShowing: string;
  cartId: string;
  itemId: string;
}

const initialState: DetailsPaneState = {
  currentShowing: "show selected item",
  cartId: "001",
  itemId: "watermelon",
};

const detailsPaneSlice = createSlice({
  name: "detailsPane",
  initialState,
  reducers: {
    setShowing(state, action) {
      if (
        !currentShowingStates.find((states) => {
          return states === action.payload;
        })
      ) {
        return;
      }
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

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default detailsPaneSlice;

export const detailsPaneActions = detailsPaneSlice.actions;
