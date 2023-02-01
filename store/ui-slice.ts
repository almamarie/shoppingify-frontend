import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTab: "items",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
});

export default uiSlice;
export const uiActions = uiSlice.actions;
