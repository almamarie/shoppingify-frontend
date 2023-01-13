import styles from "./CartItem.module.css";
import { CartSliceItem } from "../../../store/cart-slice";
import { useRef, useState } from "react";
import { useAppDispatch } from "../../../store";
import {
  addItemToCart,
  decreaseItemInCart,
  removeItemFromCart,
} from "../../../store/cart-actions";

const CartItem: React.FC<{ item: CartSliceItem; category: string }> = (
  props
) => {
  const [hover, setHover] = useState(false);
  const dispatch = useAppDispatch();
  const quantityRef = useRef<HTMLInputElement>(null);
  //   const [newQuantity, setNewQuantity] = useState(0);
  const { itemId, quantity } = props.item;
  function increaseItem() {
    console.log("increase item");
    const tmpQuantity: number = +quantityRef.current?.value!;
    addItemToCart(dispatch, itemId);
  }

  function decreaseItem() {
    decreaseItemInCart(dispatch, itemId, props.category);
  }

  function removeItem() {
    removeItemFromCart(dispatch, itemId, props.category);
  }

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       if (newQuantity === 0) return;
  //       console.log(newQuantity);
  //       addItemToCart(dispatch, itemId, newQuantity);
  //     }, 2000);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [newQuantity, itemId, dispatch]);

  function generateQuantityAndControl() {
    if (hover) {
      return (
        <div className={styles["icons-wrapper"]}>
          <div className={styles["bin-wrapper"]}>
            <svg
              onClick={removeItem}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={styles.bin}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
          <svg
            onClick={decreaseItem}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.decrease}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
          <p className={styles.quantity}>{`${quantity} pcs`}</p>

          <svg
            onClick={increaseItem}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.increase}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      );
    } else {
      return <p className={styles.quantity}>{`${quantity} pcs`}</p>;
    }
  }
  return (
    <li
      className={styles.item}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <h3 className={styles.name}>{itemId}</h3>
      {generateQuantityAndControl()}
    </li>
  );
};

export default CartItem;
