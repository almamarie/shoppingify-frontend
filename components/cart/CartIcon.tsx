import Image from "next/image";
import logo from "../../public/svgs/shopping-cart.svg";
import { useAppDispatch, useAppSelector } from "../../store";
import { detailsPaneActions } from "../../store/details-pane-slice";
import styles from "./CartIcon.module.css";
const CartIcon = () => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector((state) => state.cart.totalQuantity);
  function showCart() {
    dispatch(detailsPaneActions.setShowing("show current cart"));
  }
  return (
    <div className={styles.wrapper} onClick={showCart}>
      <Image className={styles.logo} src={logo} alt="shopping cart logo" />

      <p>{totalItems}</p>
    </div>
  );
};

export default CartIcon;
