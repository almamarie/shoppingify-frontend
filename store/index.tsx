import { configureStore } from "@reduxjs/toolkit";
import detailsPaneSlice from "./details-pane-store";

const store = configureStore({
  reducer: {
    detailsPane: detailsPaneSlice.reducer,
  },
});

export default store;
