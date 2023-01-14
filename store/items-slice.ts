import { createSlice } from "@reduxjs/toolkit";
export type ItemsType = {
  name: string;
  notes: string;
  image: string;
  category: string;
};
const initialState: ItemsType[] = [];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
});

export default itemsSlice;

export const itemsActions = itemsSlice.actions;
