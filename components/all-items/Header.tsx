import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.wrapper}>
      <h1>
        <span className={styles["first-text"]}>Shoppingify</span> allows you to
        take your
        <br /> shopping list wherever you go
      </h1>
    </section>
  );
};

export default Header;
