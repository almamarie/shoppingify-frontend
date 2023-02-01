import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartSlice from "./cart-slice";
import detailsPaneSlice from "./details-pane-slice";
import itemsSlice from "./items-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    detailsPane: detailsPaneSlice.reducer,
    cart: cartSlice.reducer,
    items: itemsSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
