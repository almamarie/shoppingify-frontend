import React from "react";
import styles from "./FlexiblePane.module.css";

const FlexiblePane: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={styles.wrapper}> {props.children}</div>;
};

export default FlexiblePane;
