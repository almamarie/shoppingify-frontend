import styles from "./SingleHistory.module.css";
import { HistoryCategoryType } from "../../public/utils/types";

const SingleHistory: React.FC<{ data: HistoryCategoryType }> = (props) => {
  const statusClasses = `${styles.status} ${
    props.data.status === "canceled" ? styles.canceled : ""
  }`;
  return (
    <li
      className={styles.wrapper}
      title={`${props.data.name} | ${props.data.date}`}
    >
      <h3 className={styles.heading}>{props.data.name}</h3>
      <div className={styles["actions"]}>
        <div className={styles.date}>
          <span>icon</span>
          <span>{props.data.date}</span>
        </div>
        <div className={statusClasses}>{props.data.status}</div>
        <span>&gt;</span>
      </div>
    </li>
  );
};

export default SingleHistory;
