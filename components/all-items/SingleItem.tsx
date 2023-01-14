import styles from "./SingleItem.module.css";
import { useAppDispatch } from "../../store";
import { addItemToCart } from "../../store/cart-actions";
import { detailsPaneActions } from "../../store/details-pane-slice";

type Item = { name: string };
const SingleItem: React.FC<{ item: Item; category: string }> = (props) => {
  const dispatch = useAppDispatch();

  const addItemToCartHandler = () => {
    const result = addItemToCart(
      dispatch,
      props.item.name,
      props.category
    );
    if (!result) {
      console.log("error");
      return;
    }
  };

  function setSelectedHandler() {
    dispatch(detailsPaneActions.setCurrentItem(props.item.name));
  }

  return (
    <div className={styles.card}>
      <p onClick={setSelectedHandler} className={styles.name}>
        {props.item.name}
      </p>
      <div onClick={addItemToCartHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles["plus-icon"]}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </div>
  );
};

export default SingleItem;
