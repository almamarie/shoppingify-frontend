import { Fragment, useState } from "react";
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

        // items: [],
        // totalQuantity: 0,
        // cartTitle: "New Shopping List",
        // cartState: "in progress"  ,
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

  const cartActionHandler = () => {
    // items: [],
    // totalQuantity: 0,
    // cartTitle: "New Shopping List",
    // cartState: "in progress"  ,
  };

  if (!props.isEditingCart) {
    return (
      <div className={styles["wrapper"]}>
        <div className={styles["complete-wrapper"]}>
          <div className={styles.cancel}>
            <Button type="button" category="cancel">
              cancel
            </Button>
          </div>

          <div className={styles.complete} onClick={cartActionHandler}>
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
