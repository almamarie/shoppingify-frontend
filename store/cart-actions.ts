import { createActions } from "./cart-slice";
import { DUMMY_ITEMS } from "./items";
import { ExpectedAddItemToCartFormat } from "./cart-slice";

// TODO: find the type of dispatch
export function addItemToCart(
  dispatch: any,
  itemId: string,
  quantity: number | false
) {
  //   console.log({ dispatch: dispatch, itemId: itemId, quantity: quantity });
  try {
    // fetch item from database
    const item = DUMMY_ITEMS.find((item) => {
      //   console.log(`${item.name.toLowerCase()} === ${itemId}`);
      return item.name.toLowerCase() === itemId.toLowerCase();
    });

    if (!item) {
      //   console.log("item not found");
      return false;
    }

    //   The add item reducer of the cart-slice expects data in a particular formart.
    //   I am going to import the type and use it here it here
    const cartItemDetails: ExpectedAddItemToCartFormat = {
      itemId: itemId,
      categoryName: item.category,
      quantity: quantity || 1,
    };

    dispatch(createActions.addItem(cartItemDetails));
    return true;
  } catch (error) {
    // console.error(error);
    return false;
  }
}
