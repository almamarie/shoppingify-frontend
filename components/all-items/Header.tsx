import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.wrapper}>
      <h1>
        <span className={styles["first-text"]}>Shoppingify</span> allows you to
        take your
        <br /> shopping list wherever you go
      </h1>
      
        <input className={styles.search} type="search" placeholder="search item" />
      
    </section>
  );
};

export default Header;
