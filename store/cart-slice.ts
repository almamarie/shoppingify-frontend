import { createSlice } from "@reduxjs/toolkit";
export type CartSliceItem = {
  itemId: string;
  quantity: number;
  isCompleted: boolean;
};

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
  // cartId: string;
  cartTitle: string;
  cartState: "in progress" | "completed" | "canceled";
  isEditingCart: boolean;
};

const initialState: InitialState = {
  items: [],
  totalQuantity: 0,
  // cartId: "001",
  cartTitle: "New Shopping List",
  cartState: "in progress",
  isEditingCart: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initialize(state, action) {
      if (
        !action.payload.items ||
        !action.payload.totalQuantity ||
        !action.payload.cartTitle ||
        !action.payload.cartState ||
        action.payload.isEditingCart === undefined
      )
        return;

      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.cartTitle = action.payload.cartTitle;
      state.cartState = action.payload.cartState;
      state.isEditingCart = action.payload.isEditingCart;
    },
    // setCartId(state, action) {
    //   // sets the current cart and the currentShowing flag
    //   state.cartId = action.payload;
    // },

    addItemToCart(state, action) {
      if (!action.payload.itemId || !action.payload.categoryName) {
        console.log("I was here");

        return;
      }

      if (!state.isEditingCart) {
        console.log("error was here");
        return;
      }

      // check if the category is in state
      const category = state.items.findIndex((item) => {
        return (
          item.categoryName.toLowerCase() ===
          action.payload.categoryName.toLowerCase()
        );
      });

      // if category is not in items, add it and add the item to it
      if (category === -1) {
        const entry: CartSliceCategory = {
          categoryName: action.payload.categoryName,
          items: [
            {
              itemId: action.payload.itemId,
              quantity: 1,
              isCompleted: false,
            },
          ],
        };
        state.items = [...state.items, entry];
        // update the totalQuantity Field
        // TODO: updating state items does not allows add to the previous item.
        // in state, to solve this, u always use a function (prev)=>{}.
        // find out how to do that here
        state.totalQuantity = state.totalQuantity + 1;
        return;
      }

      // check if item is in category
      const item = state.items[category].items.findIndex((item) => {
        return (
          item.itemId.toLowerCase() === action.payload.itemId.toLowerCase()
        );
      });

      // if item is in category, return
      console.log(item);
      if (item !== -1) return;

      // if item is not in category, add it
      if (item === -1) {
        const newItem: CartSliceItem = {
          itemId: action.payload.itemId,
          quantity: 1,
          isCompleted: false,
        };
        state.items[category].items = [...state.items[category].items, newItem];
        // update the total quantities
        state.totalQuantity = state.totalQuantity + 1;

        return;
      }
    },

    incrementItem(state, action) {
      // Increases the quantity of the item in the cart
      // expects the itemId and category
      if (!action.payload.itemId || !action.payload.categoryName) {
        return;
      }

      if (!state.isEditingCart) {
        return;
      }

      // check if the category is in state
      const category = state.items.findIndex((item) => {
        return (
          item.categoryName.toLowerCase() ===
          action.payload.categoryName.toLowerCase()
        );
      });

      // if category is not in items
      if (category === -1) {
        return;
      }

      // check if item is in category
      const item = state.items[category].items.findIndex((item) => {
        return (
          item.itemId.toLowerCase() === action.payload.itemId.toLowerCase()
        );
      });

      // if item is not in category

      if (item === -1) {
        return;
      }

      // if item is in category, update it
      // add 1 from it
      state.items[category].items[item].quantity =
        state.items[category].items[item].quantity + 1;

      // update the total quantity
      state.totalQuantity = state.totalQuantity + 1;
    },

    decrementItem(state, action) {
      // Decreases the quantity of the item in the cart
      // expects the itemId and category
      if (!action.payload.itemId || !action.payload.categoryName) {
        return;
      }

      if (!state.isEditingCart) {
        return;
      }

      // check if the category is in state
      const category = state.items.findIndex((item) => {
        return (
          item.categoryName.toLowerCase() ===
          action.payload.categoryName.toLowerCase()
        );
      });

      // if category is not in items
      if (category === -1) {
        return;
      }

      // check if item is in category
      const item = state.items[category].items.findIndex((item) => {
        return (
          item.itemId.toLowerCase() === action.payload.itemId.toLowerCase()
        );
      });

      // if item is not in category

      if (item === -1) {
        return;
      }

      // if item is in category, update it
      if (state.items[category].items[item].quantity === 1) {
        // check if item quanty is 1, remove the item from the items
        state.items[category].items = state.items[category].items.filter(
          (item) => {
            return (
              item.itemId.toLowerCase() !== action.payload.itemId.toLowerCase()
            );
          }
        );

        // check if category is empty and remove it.
        console.log(`State item: ${state.items[category].items}`);
        if (state.items[category].items.length === 0) {
          const tmpItems = state.items;
          tmpItems.splice(category, 1);
          state.items = tmpItems;
        }

        // update the total quantity
        state.totalQuantity = state.totalQuantity - 1;

        return;
      }
      // remove 1 from it
      state.items[category].items[item].quantity =
        state.items[category].items[item].quantity - 1;

      // update the total quantity
      state.totalQuantity = state.totalQuantity - 1;
    },

    removeItemFromCart(state, action) {
      // removes item from cart
      // expects the id
      if (!action.payload) return;

      if (!state.isEditingCart) {
        return;
      }

      // find the item
      // check if the category is in state
      const category = state.items.findIndex((item) => {
        return (
          item.categoryName.toLowerCase() ===
          action.payload.categoryName.toLowerCase()
        );
      });

      // if category is not in items list
      if (category === -1) {
        return;
      }
      // check if item is in category
      const item = state.items[category].items.findIndex((item) => {
        return (
          item.itemId.toLowerCase() === action.payload.itemId.toLowerCase()
        );
      });

      // if item is not in category

      if (item === -1) {
        return;
      }

      // fetch the quantity of the item in the cart
      const itemQuantity = state.items[category].items[item].quantity;

      //  remove the item
      const tmpItems = state.items[category].items;
      tmpItems.splice(item, 1);
      state.items[category].items = tmpItems;

      // check if category is empty and remove it if it is.
      if (state.items[category].items.length === 0) {
        const tmpItems = state.items;
        tmpItems.splice(category, 1);
        state.items = tmpItems;
      }

      // update the total quantity
      state.totalQuantity = state.totalQuantity - itemQuantity;
    },
    toggleIsCompletedState(state, action) {
      // marks the item as completed or not
      // expects itemId and category
      if (!action.payload.itemId || !action.payload.categoryName) {
        return;
      }

      if (state.isEditingCart) {
        return;
      }

      // check if the category is in state
      const category = state.items.findIndex((item) => {
        return (
          item.categoryName.toLowerCase() ===
          action.payload.categoryName.toLowerCase()
        );
      });

      // if category is not in items
      if (category === -1) {
        return;
      }

      // check if item is in category
      const item = state.items[category].items.findIndex((item) => {
        return (
          item.itemId.toLowerCase() === action.payload.itemId.toLowerCase()
        );
      });

      // if item is not in category

      if (item === -1) {
        return;
      }

      // if item is in category, update it
      state.items[category].items[item].isCompleted =
        !state.items[category].items[item].isCompleted;
    },

    toggleIsEditingCart(state) {
      state.isEditingCart = !state.isEditingCart;
    },

    setCartTitle(state, action) {
      if (!action.payload.cartName || action.payload.cartName === "") return;

      state.cartTitle = action.payload.cartName;
    },
  },
});

export default cartSlice;

export const cartActions = cartSlice.actions;
