import Image from "next/image";
import logo from "../../public/svgs/shopping-cart.svg";
import styles from "./CartIcon.module.css";
const CartIcon = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.logo} src={logo} alt="shopping cart logo" />

      <p>3</p>
    </div>
  );
};

export default CartIcon;
