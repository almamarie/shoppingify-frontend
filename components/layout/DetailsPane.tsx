import { useState } from "react";
import AddNewItem from "../details-pane/AddNewItem";
import CurrentCart from "../details-pane/CurrentCart";
import ItemDetails from "../details-pane/ItemDetails";
import styles from "./DetailsPane.module.css";
import { RootState, useAppSelector } from "../../store";

const DetailsPane = () => {
  const currentShowing = useAppSelector((state: RootState) => {
    return state.detailsPane.currentShowing;
  });

  if (currentShowing === "add new item") {
    return <AddNewItem />;
  }

  if (currentShowing === "show selected item") {
    return <ItemDetails />;
  }

  if (currentShowing === "show current cart") {
    return <CurrentCart />;
  }

  return (
    <h3 className={styles.heading}>
      An error occured.
      <br />
      Please refresh page
    </h3>
  );
};

export default DetailsPane;
