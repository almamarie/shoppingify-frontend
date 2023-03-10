import { cartActions } from "./cart-slice";
import { ExpectedAddItemToCartFormat } from "./cart-slice";

// TODO: find the type of dispatch
export function addItemToCart(dispatch: any, itemId: string, category: string) {
  try {
    //   The add item reducer of the cart-slice expects data in a particular formart.
    //   I am going to import the type and use it here it here
    const cartItemDetails: ExpectedAddItemToCartFormat = {
      itemId: itemId,
      categoryName: category,
      quantity: 1,
    };

    console.log("action function");

    dispatch(cartActions.addItemToCart(cartItemDetails));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function increaseItemInCart(
  dispatch: any,
  itemId: string,
  category: string
) {
  try {
    dispatch(
      cartActions.incrementItem({
        itemId,
        categoryName: category,
      })
    );
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function decreaseItemInCart(
  dispatch: any,
  itemId: string,
  category: string
) {
  try {
    dispatch(
      cartActions.decrementItem({
        itemId,
        categoryName: category,
      })
    );
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function removeItemFromCart(
  dispatch: any,
  itemId: string,
  category: string
) {
  console.log("delete item");
  try {
    dispatch(
      cartActions.removeItemFromCart({
        itemId,
        categoryName: category,
      })
    );
  } catch (error) {
    console.log(error);
    return false;
  }
}
