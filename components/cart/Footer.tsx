import { Fragment, useState } from "react";
import { POST_AJAX, PUT_AJAX } from "../../public/utils/http";
import { updateCart } from "../../public/utils/update-cart";
import { useAppDispatch, useAppSelector } from "../../store";
import { cartActions, CurrentCartUploadType } from "../../store/cart-slice";
import Button from "../ui/buttons/Button";
import styles from "./Footer.module.css";

const Footer: React.FC<{ isEditingCart: boolean }> = (props) => {
  const dispatch = useAppDispatch();
  const [cartIsEmpty, cartTitle, totalQuantity, cartState, items] =
    useAppSelector((state) => {
      return [
        state.cart.items.length === 0,
        state.cart.cartTitle,
        state.cart.totalQuantity,
        state.cart.cartState,
        state.cart.items,
      ];
    });
  const [currentCartName, setCurrentCartName] = useState(cartTitle);
  const disableCart: boolean = cartIsEmpty || !props.isEditingCart;

  //   functions
  async function saveCartHandler() {
    dispatch(cartActions.setCartTitle({ cartName: currentCartName }));
    dispatch(cartActions.toggleIsEditingCart());

    const cartData: CurrentCartUploadType = {
      cartTitle: currentCartName,
      items,
      totalQuantity,
      cartState,
      isEditingCart: false,
    };

    console.log("CartData: ", cartData);
    const response = await updateCart(cartData);

    console.log(response);
  }

  function cartNameChangeHandler(event: React.FormEvent<HTMLInputElement>) {
    const newName = event.currentTarget.value;
    setCurrentCartName(newName);
  }

  function generateBtnCategory() {
    if (disableCart) {
      return "empty";
    }
    return "submit";
  }

  const actionStyles = `${styles["input-wrapper"]} ${
    disableCart ? styles["empty-cart"] : ""
  }`;

  const cartName =
    cartTitle === "New Shopping List" ? "enter a name" : cartTitle;

  function generateButton() {
    return (
      <Fragment>
        <input
          onChange={cartNameChangeHandler}
          type="text"
          placeholder="enter new name"
          disabled={disableCart ? true : false}
        />
        <div onClick={saveCartHandler}>
          <Button type="button" category={generateBtnCategory()}>
            Save
          </Button>
        </div>
      </Fragment>
    );
  }

  const cartChangehandler = async (change: string) => {
    // generate the expected cart history data
    const cartData = {
      items,
      totalQuantity,
      cartTitle: currentCartName,
      cartState: change,
      date: new Date(),
    };

    console.log("Cart title: ", cartTitle);

    // POST the data to the database
    let response = await POST_AJAX("cart-history", cartData);

    console.log("Post cart history: ", response);

    // clear cart data in database.
    const clearData = {
      items: [],
      totalQuantity: 0,
      cartTitle: "New Shopping List",
      cartState: "in progress",
      isEditingCart: true,
    };

    response = await PUT_AJAX("current-cart", clearData);

    console.log("Put: ", response);

    // clear the cart
    dispatch(cartActions.clearCart());
  };

  const cartCancelHandler = async () => {
    cartChangehandler("canceled");
  };

  const cartCompleteHandler = async () => {
    cartChangehandler("completed");
  };

  if (!props.isEditingCart) {
    return (
      <div className={styles["wrapper"]}>
        <div className={styles["complete-wrapper"]}>
          <div className={styles.cancel} onClick={cartCancelHandler}>
            <Button type="button" category="cancel">
              cancel
            </Button>
          </div>

          <div className={styles.complete} onClick={cartCompleteHandler}>
            <Button type="button" category="complete">
              Complete
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.actions}>
      <div className={actionStyles}>{generateButton()}</div>
    </div>
  );
};

export default Footer;
