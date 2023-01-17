import styles from "./DataFetchError.module.css";

const DataFetchError = () => {
  return (
    <>
      <div className={styles.icon}>
        <span>!</span>
      </div>
      <p className={styles["centered-text"]}>
        Failed to load data
        <br />
        Please try again
      </p>
    </>
  );
};

export default DataFetchError;
