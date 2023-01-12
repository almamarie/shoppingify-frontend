import { stat } from "fs";
import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import Button from "../ui/buttons/Button";
import styles from "./Footer.module.css";

const Footer: React.FC<{ cartState: string }> = (props) => {
  const cartIsEmpty = useAppSelector((state) => {
    return state.cart.items.length === 0;
  });

  const actionStyles = `${styles["input-wrapper"]} ${
    cartIsEmpty ? styles["empty-cart"] : ""
  }`;

  function generateButton() {
    if (cartIsEmpty) {
      return (
        <Fragment>
          <input type="text" placeholder="enter a name" />
          <Button type="button" category="empty">
            Save
          </Button>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <input type="text" placeholder="enter a name" />
        <Button type="button" category="submit">
          Save
        </Button>
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
