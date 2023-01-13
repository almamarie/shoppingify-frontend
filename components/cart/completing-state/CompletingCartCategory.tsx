import styles from "./CompletingCartCategory.module.css";
import { CartSliceCategory } from "../../../store/cart-slice";
import CompletingCartItem from "./CompletingCarItem";

const CompletingCartCategory: React.FC<{ category: CartSliceCategory }> = (
  props
) => {
  function generateItems() {
    return props.category.items.map((item, index) => {
      return (
        <CompletingCartItem
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

export default CompletingCartCategory;
