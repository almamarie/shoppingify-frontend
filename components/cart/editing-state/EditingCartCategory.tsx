import styles from "./EditingCartCategory.module.css";
import { CartSliceCategory } from "../../../store/cart-slice";
import CartItem from "./EditingCarItem";

const EditingCartCategory: React.FC<{ category: CartSliceCategory }> = (
  props
) => {
  function generateItems() {
    return props.category.items.map((item, index) => {
      return (
        <CartItem
          key={index}
          category={props.category.categoryName}
          item={item}
        />
      );
    });
  }
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>{props.category.categoryName}</h3>
      <ul className={styles.ul}>{generateItems()}</ul>
    </div>
  );
};

export default EditingCartCategory;
