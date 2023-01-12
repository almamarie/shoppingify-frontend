import { createSlice } from "@reduxjs/toolkit";
export type CartSliceItem = { itemId: string; quantity: number };

export type CartSliceCategory = {
  categoryName: string;
  items: CartSliceItem[];
};

export type ExpectedAddItemToCartFormat = {
  itemId: string;
  categoryName: string;
  quantity: number;
};

type InitialState = {
  items: CartSliceCategory[];
  totalQuantity: number;
  cartId: string;
  cartTitle: string;
};

const initialState: InitialState = {
  items: [],
  totalQuantity: 0,
  cartId: "001",
  cartTitle: "Shopping List",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartId(state, action) {
      // sets the current cart and the currentShowing flag
      state.cartId = action.payload;
    },

    addItem(state, action) {
      //   console.log("Received: ", {
      //     itemId: action.payload.itemId,
      //     category: action.payload.categoryName,
      //     quantity: action.payload.quantity,
      //   });
      //   check if all required valus are included
      if (
        !action.payload.itemId ||
        !action.payload.categoryName ||
        !action.payload.quantity
      ) {
        // console.log("not all data provided");
        return;
      }

      //   console.log("here");

      // check if the category is in state
      const category = state.items.findIndex((item) => {
        return (
          item.categoryName.toLowerCase() ===
          action.payload.categoryName.toLowerCase()
        );
      });

      // if category is not in items, add it and add the item to it
      if (category === -1) {
        // console.log("category not found: ", category);
        const entry: CartSliceCategory = {
          categoryName: action.payload.categoryName,
          items: [
            {
              itemId: action.payload.itemId,
              quantity: action.payload.quantity,
            },
          ],
        };
        state.items = [...state.items, entry];
        // update the totalQuantity Field
        // TODO: updating state items does not allows add to the previous item.
        // in state, to solve this, u always use a function (prev)=>{}.
        // find out how to do that here
        state.totalQuantity = state.totalQuantity + action.payload.quantity;
        return;
      }

      //   console.log("category found: ", category);
      // check if item is in category
      const item = state.items[category].items.findIndex((item) => {
        // console.log(
        //   `${item.itemId.toLowerCase()} === ${action.payload.itemId.toLowerCase()}`
        // );
        return (
          item.itemId.toLowerCase() === action.payload.itemId.toLowerCase()
        );
      });

      // if item is not in category, add it

      if (item === -1) {
        // console.log("item not found: ", item);
        const newItem: CartSliceItem = {
          itemId: action.payload.itemId,
          quantity: action.payload.quantity,
        };
        state.items[category].items = [...state.items[category].items, newItem];

        return;
      } else {
        // if item is in category, update it
        // console.log("item found: ", item);

        // console.log(`${state.items[category].items[item].quantity} =
        // ${state.items[category].items[item].quantity} + ${action.payload.quantity};`);
        state.items[category].items[item].quantity =
          state.items[category].items[item].quantity + action.payload.quantity;
      }

      // update the totalQuantity Field
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
    },
  },
});

export default cartSlice;

export const createActions = cartSlice.actions;
