import React from "react";
import styles from "./SingleItemCard.module.css";

const SingleItemCard: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default SingleItemCard;
