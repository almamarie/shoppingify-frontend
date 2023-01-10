import React from "react";
import { useAppDispatch } from "../../../store";
import { detailsPaneActions } from "../../../store/details-pane-slice";
import styles from "./SingleItemCard.module.css";

const SingleItemCard: React.FC<{
  children: React.ReactNode;
  itemId: string;
}> = (props) => {
  const dispatch = useAppDispatch();
  function onClickHandler() {
    dispatch(detailsPaneActions.setItemId(props.itemId));
  }
  return (
    <div onClick={onClickHandler} className={styles.card}>
      {props.children}
    </div>
  );
};

export default SingleItemCard;
