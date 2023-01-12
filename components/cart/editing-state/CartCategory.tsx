import { useAppSelector } from "../../../store";
import styles from "./CartCategory.module.css";
import { Category } from "../../../store/cart-slice";

const CartCategory: React.FC<{ category: Category }> = (props) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>{props.category.categoryName}</h3>
      <ul></ul>
    </div>
  );
};

export default CartCategory;
