import ShoppingCartIcon from "../../public/svgs/ShoppingCartIcon";
import styles from "./EmptyCart.module.css";

const EmptyCart = () => {
  return (
    <div className={styles.wrapper}>
      <h3>No Items</h3>
      <div className={styles["cart-icon"]}>
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default EmptyCart;
