import { useAppSelector } from "../../store";
import styles from "./CurrentItem.module.css";

const ItemDetails = () => {
  // fetch item id from store
  const currentItemId = useAppSelector((state) => state.detailsPane.itemId);
  return <h1>showing item {currentItemId}</h1>;
};

export default ItemDetails;
