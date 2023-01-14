import { createSlice } from "@reduxjs/toolkit";

const currentShowingStates = [
  "add new item",
  "show selected item",
  "show current cart",
];

interface History {
  actionType: string;
  value: string;
}

interface DetailsPaneState {
  currentShowing: string;
  itemId: string;
  history: History[];
  currentHistoryLocation: number;
}

const initialState: DetailsPaneState = {
  currentShowing: "show current cart",
  itemId: "watermelon",
  history: [{ actionType: "show current cart", value: "" }],
  currentHistoryLocation: -1,
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

      // // update history
      // const history: History = { actionType: action.payload, value: null };
      // state.history = [...state.history, history];
    },

    setCurrentItem(state, action) {
      // sets the current item and the show flag
      state.itemId = action.payload;
      state.currentShowing = "show selected item";

      // update history
      const history: History = {
        actionType: "show selected item",
        value: action.payload,
      };
      state.history = [...state.history, history];
      state.currentHistoryLocation = state.currentHistoryLocation + 1;
    },

    historyPop(state) {
      // retrieve the currentHistoryLocation
      const currentHistoryLocation = state.currentHistoryLocation;
      if (currentHistoryLocation === -1) return;

      // retrieve the last history
      const lastHistory = state.history[currentHistoryLocation];
      if (!lastHistory) return;

      console.log(lastHistory.actionType, lastHistory.value);

      // update the store with the last history
      state.currentShowing = lastHistory.actionType;

      if (lastHistory.actionType === "show selected item") {
        state.itemId = lastHistory.value;
      }

      // update the currentHistoryLocation flag
      state.currentHistoryLocation = state.currentHistoryLocation - 1;
    },
  },
});

export default detailsPaneSlice;

export const detailsPaneActions = detailsPaneSlice.actions;
