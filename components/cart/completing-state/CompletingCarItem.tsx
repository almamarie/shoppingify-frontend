import styles from "./CompletingCartItem.module.css";
import {
  cartActions,
  CartSliceItem,
  CurrentCartUploadType,
} from "../../../store/cart-slice";
import { useAppDispatch, useAppSelector } from "../../../store";
import { updateCart } from "../../../public/utils/update-cart";

const CompletingCartItem: React.FC<{
  item: CartSliceItem;
  category: string;
}> = (props) => {
  const dispatch = useAppDispatch();
  const { itemId, quantity, isCompleted } = props.item;
  const [cartTitle, items, totalQuantity, cartState, isEditingCart] =
    useAppSelector((state) => {
      return [
        state.cart.cartTitle,
        state.cart.items,
        state.cart.totalQuantity,
        state.cart.cartState,
        state.cart.isEditingCart,
      ];
    });

  async function toggleItemIsCompletedState() {
    dispatch(
      cartActions.toggleIsCompletedState({
        itemId,
        categoryName: props.category,
      })
    );

    // update cart in firebase
    // ================================================

    // For some

    const cartData: CurrentCartUploadType = {
      cartTitle,
      items,
      totalQuantity,
      cartState,
      isEditingCart,
    };
    console.log("CartData: ", cartData);
    const response = updateCart(cartData);

    // ================================================
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
