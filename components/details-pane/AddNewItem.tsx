import { useState } from "react";
import { DUMMY_LIST } from "../../store/items";
import Button from "../ui/buttons/Button";
import styles from "./AddNewItem.module.css";

const DUMMY_CATEGORIES = Object.keys(DUMMY_LIST);
const AddNewItem = () => {
  const [showCategories, setShowCategories] = useState(false);
  const categoriesStyle = `${styles["categories-wrapper"]} ${
    showCategories ? "" : styles.hide
  }`;
  return (
    <form className={styles.wrapper}>
      <h3 className={styles.heading}>Add a new item</h3>
      <div className={styles["entry-wrapper"]}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          required
          name="name"
          id="name"
          className={styles.input}
          type="text"
          placeholder="enter a name"
        />
      </div>
      <div className={styles["entry-wrapper"]}>
        <label htmlFor="note" className={styles.label}>
          Note (optional)
        </label>
        <textarea
          id="note"
          name="note"
          className={`${styles.input} ${styles["note-input"]}`}
          placeholder="enter a note"
        />
      </div>

      <div className={styles["entry-wrapper"]}>
        <label htmlFor="image" className={styles.label}>
          Image (optional)
        </label>
        <input
          id="image"
          name="image"
          className={styles.input}
          type="text"
          placeholder="enter a url"
        />
      </div>

      <div className={styles["entry-wrapper"]}>
        <label htmlFor="category" className={styles.label}>
          Category
        </label>
        <input
          required
          id="category"
          name="category"
          className={styles.input}
          type="text"
          placeholder="select a category"
          //   TODO: Check on how to tell when an input is active and when it is not
          onClick={() => {
            setShowCategories(true);
          }}
        />
      </div>
      <div className={categoriesStyle}>
        {DUMMY_CATEGORIES.map((category) => {
          return (
            <p key={category} className={styles.category}>
              {category}
            </p>
          );
        })}
      </div>
      <div className={styles.buttons}>
        <Button type="button" category="cancel">
          cancel
        </Button>
        <Button type="submit" category="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddNewItem;
