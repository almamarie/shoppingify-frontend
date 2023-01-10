import styles from "./SingleItem.module.css";

import SingleItemCard from "../ui/cart/SingleItemCard";
import { useAppDispatch } from "../../store";
type Item = { name: string };
const SingleItem: React.FC<{ item: Item }> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <SingleItemCard
    // onClickHandler={() => {
    //   dispatch();
    // }}
    >
      <div className={styles.card}>
        <p className={styles.name}>{props.item.name}</p>
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
    </SingleItemCard>
  );
};

export default SingleItem;
