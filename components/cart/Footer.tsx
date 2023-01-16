import { stat } from "fs";
import { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { cartActions } from "../../store/cart-slice";
import Button from "../ui/buttons/Button";
import styles from "./Footer.module.css";

const Footer: React.FC<{ isEditingCart: boolean }> = (props) => {
  const dispatch = useAppDispatch();
  const [cartIsEmpty, cartTitle] = useAppSelector((state) => {
    return [state.cart.items.length === 0, state.cart.cartTitle];
  });
  const [currentCartName, setCurrentCartName] = useState(cartTitle);
  const [disableBtn, setDisableBtn] = useState(true);

  //   functions
  function saveCartHandler() {
    dispatch(cartActions.setCartTitle({ cartName: currentCartName }));
    dispatch(cartActions.toggleIsEditingCart());
  }

  function cartNameChangeHandler(event: React.FormEvent<HTMLInputElement>) {
    const newName = event.currentTarget.value;
    if (
      newName === "" ||
      newName === cartTitle ||
      newName === "New Shopping List"
    ) {
      setDisableBtn(true);
      return;
    }
    setCurrentCartName(newName);
    setDisableBtn(false);
  }

  function generateBtnCategory() {
    let btnCategory;
    if (disableCart || disableBtn) {
      return "empty";
    }
    return "submit";
  }

  const disableCart: boolean = cartIsEmpty || !props.isEditingCart;

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
          placeholder={cartName}
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
  return (
    <div className={styles.actions}>
      <div className={actionStyles}>{generateButton()}</div>
    </div>
  );
};

export default Footer;
