import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTab: "items",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setCurrentTab(state, action) {
      const newTab = action.payload;
      //   ensure that the incoming tab is one of the tabs in the navigation pane
      if (
        newTab !== "items" &&
        newTab !== "history" &&
        newTab !== "statistics"
      ) {
        console.log("new tab error");
        return;
      }

      state.currentTab = newTab;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
