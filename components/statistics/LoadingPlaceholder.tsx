import styles from "./LoadingPlaceholder.module.css";

const LoadingPlaceholder = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["loading-wrapper"]}>
        <div className={styles.loading}></div>
      </div>
    </div>
  );
};

export default LoadingPlaceholder;
