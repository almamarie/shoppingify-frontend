import { createSlice } from "@reduxjs/toolkit";
export type ItemsType = {
  name: string;
  note: string;
  image: string;
  category: string;
};

type InitialStateType = {
  items: ItemsType[];
  categories: [];
  itemsByCategories: [];
};

const initialState: InitialStateType = {
  items: [],
  categories: [],
  itemsByCategories: [],
};
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    initialize(state, action) {
      if (
        !action.payload.items ||
        !action.payload.categories ||
        !action.payload.itemsByCategories
      )
        return;

      state.categories = action.payload.categories;

      state.items = action.payload.items;

      state.itemsByCategories = action.payload.itemsByCategories;
    },
  },
});

export default itemsSlice;

export const itemsActions = itemsSlice.actions;
