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
    addItem(state, action) {
      let tmp: ItemsType;
      try {
        tmp = {
          name: action.payload.name,
          note: action.payload.note,
          image: action.payload.image,
          category: action.payload.category,
        };
      } catch (error) {
        return;
      }
      state.items = [...state.items, tmp];
    },
  },
});

export default itemsSlice;

export const itemsActions = itemsSlice.actions;
