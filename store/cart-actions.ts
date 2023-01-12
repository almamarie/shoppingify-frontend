import { cartActions, CartSliceCategory, CartSliceItem } from "./cart-slice";
import { DUMMY_ITEMS } from "./items";
import { ExpectedAddItemToCartFormat } from "./cart-slice";
import { useAppDispatch } from ".";

// TODO: find the type of dispatch
export function addItemToCart(
  dispatch: any,
  itemId: string,
  quantity: number | false = false
) {
  try {
    // fetch item from database
    const item = DUMMY_ITEMS.find((item) => {
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

    dispatch(cartActions.addItem(cartItemDetails));
    return true;
  } catch (error) {
    return false;
  }
}

export function decreaseItemInCart(
  dispatch: any,
  itemId: string,
  category: string
) {
  console.log("decrease item");
  try {
    dispatch(
      cartActions.decreaseItem({
        itemId,
        categoryName: category,
      })
    );
  } catch (error) {
    console.log(error);
    return false;
  }
}
