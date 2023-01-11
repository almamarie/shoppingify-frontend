import styles from ",/CurrentCart.module.css";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store";

const CurrentCart = () => {
  // fetch cart id from store
  const cartId = useAppSelector((state) => state.cart.cartId);

  return <h1>CurrentCart {cartId}</h1>;
};

export default CurrentCart;
