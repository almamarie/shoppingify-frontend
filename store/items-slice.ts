import { createSlice } from "@reduxjs/toolkit";
export type ItemsType = {
  name: string;
  notes: string;
  image: string;
  category: string;
};

const initialState = {
  items: [],
  categories: [],
  categoriesItems: [],
};
const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    initialize(state, action) {
      if (
        !action.payload.allItems ||
        !action.payload.allCategories ||
        !action.payload.categoriesItems
      )
        return;

      state.categories = action.payload.allCategories;

      state.items = action.payload.allItems;

      state.categoriesItems = action.payload.categoriesItems;
    },
  },
});

export default itemsSlice;

export const itemsActions = itemsSlice.actions;
