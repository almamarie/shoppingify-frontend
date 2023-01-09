import React from "react";
import styles from "./Button.module.css";

const Button: React.FC<{
  type: "button" | "submit" ;
  category: "complete" | "delete" | "submit" | "cancel";
  children: React.ReactNode;
}> = (props) => {
  return (
    <button
      type={props.type}
      className={`${styles.button} ${styles[props.category]}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
