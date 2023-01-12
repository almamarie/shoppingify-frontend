import Image from "next/image";
import logo from "../../public/svgs/shopping-cart.svg";
import { useAppSelector } from "../../store";
import styles from "./CartIcon.module.css";
const CartIcon = () => {
  const totalItems = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <div className={styles.wrapper}>
      <Image className={styles.logo} src={logo} alt="shopping cart logo" />

      <p>{totalItems}</p>
    </div>
  );
};

export default CartIcon;
