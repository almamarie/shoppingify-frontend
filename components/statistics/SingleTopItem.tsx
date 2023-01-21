import styles from "./SingleTopItem.module.css";

export type ExpectedSingleTopItemFormat = {
  name: string;
  percentage: number;
};

const SingleTopItem: React.FC<{ data: ExpectedSingleTopItemFormat }> = (
  props
) => {
  return (
    <li>
      <div className={styles.head}>
        <span>{props.data.name}</span>
        <span className={styles.percentage}>{`${Math.floor(
          props.data.percentage
        )}%`}</span>
      </div>
      <div className={styles.bar}>
        <div
          className={styles["bar-percentage"]}
          style={{ width: `${props.data.percentage}%` }}
        ></div>
      </div>
    </li>
  );
};

export default SingleTopItem;
