/* eslint-disable @next/next/no-img-element */

import { useAppDispatch, useAppSelector } from "../../store";
import { addItemToCart } from "../../store/cart-actions";
import { detailsPaneActions } from "../../store/details-pane-slice";
import { DUMMY_ITEMS } from "../../store/items";
import { ItemsType } from "../../store/items-slice";
import Button from "../ui/buttons/Button";
import styles from "./CurrentItemDetails.module.css";

const CurrentItemDetails = () => {
  const dispatch = useAppDispatch();
  const goBackHandler = () => {
    dispatch(detailsPaneActions.historyPop());
  };
  // fetch item id from store
  const itemId = useAppSelector((state) => {
    return state.detailsPane.itemId;
  });

  // get id from database
  const itemDetails = DUMMY_ITEMS.find((item) => {
    return item.name.toLowerCase() === itemId.toLowerCase();
  });

  if (!itemDetails) return;

  function addItemToCartHandler() {
    addItemToCart(dispatch, itemId, itemDetails?.category!);
  }

  if (!itemDetails) {
    return <p className={styles["item-not-found"]}>Item not found</p>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.back} onClick={goBackHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles["back-icon"]}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <p>back</p>
      </div>
      <div className={styles["image-wrapper"]}>
        <img
          className={styles.image}
          src={itemDetails.image}
          alt={itemDetails.name}
        />
      </div>

      <div className={styles.detail}>
        <h3>name</h3>
        <p>{itemDetails.name}</p>
      </div>

      <div className={styles.detail}>
        <h3>category</h3>
        <p>{itemDetails.category}</p>
      </div>

      <div className={styles.detail}>
        <h3>note</h3>
        <p>{itemDetails.notes}</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles["delete-btn-wrapper"]}>
          <Button category="delete" type="button">
            delete
          </Button>
        </div>
        <div
          className={styles["submit-btn-wrapper"]}
          onClick={addItemToCartHandler}
        >
          <Button category="submit" type="button">
            Add to list
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CurrentItemDetails;
