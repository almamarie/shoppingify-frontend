import styles from "./CompletingCartItem.module.css";
import { cartActions, CartSliceItem } from "../../../store/cart-slice";
import { useAppDispatch } from "../../../store";

const CompletingCartItem: React.FC<{
  item: CartSliceItem;
  category: string;
}> = (props) => {
  const dispatch = useAppDispatch();

  const { itemId, quantity, isCompleted } = props.item;

  function toggleItemIsCompletedState() {
    dispatch(
      cartActions.toggleIsCompletedState({
        itemId,
        categoryName: props.category,
      })
    );
  }

  return (
    <li className={styles.item} onClick={toggleItemIsCompletedState}>
      <div className={styles["check-plus-text"]}>
        <div className={styles["check-box"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${styles["check-icon"]} ${
              isCompleted ? "" : styles.hide
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3
          className={`${styles.name} ${
            isCompleted ? styles.strikethrough : ""
          }`}
        >
          {itemId}
        </h3>
      </div>
      <p className={styles.quantity}>{`${quantity} pcs`}</p>
    </li>
  );
};

export default CompletingCartItem;
