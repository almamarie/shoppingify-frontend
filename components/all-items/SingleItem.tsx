import styles from "./SingleItem.module.css";
import SingleItemCard from "../ui/cart/SingleItemCard";
import { useAppDispatch } from "../../store";
import { addItemToCart } from "../../store/cart-actions";
import { detailsPaneActions } from "../../store/details-pane-slice";

type Item = { name: string };
const SingleItem: React.FC<{ item: Item }> = (props) => {
  const dispatch = useAppDispatch();

  const addItemToCartHandler = () => {
    console.log("adding item to database");
    const result = addItemToCart(dispatch, props.item.name, false);
    if (!result) {
      console.log("error");
      return;
    }
    console.log("Item added successfully");
  };

  function setSelectedHandler() {
    dispatch(detailsPaneActions.setItemId(props.item.name));
  }

  return (
    // <SingleItemCard itemId={props.item.name}>
    // <div className={styles.wrapper}>
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
    // </div>

    // </SingleItemCard>
  );
};

export default SingleItem;
