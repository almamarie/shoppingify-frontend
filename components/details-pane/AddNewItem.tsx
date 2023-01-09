import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import { DUMMY_LIST } from "../../store/items";
import Button from "../ui/buttons/Button";
import styles from "./AddNewItem.module.css";

const DUMMY_CATEGORIES = Object.keys(DUMMY_LIST);
const AddNewItem = () => {
  const categoriesStyle = styles["categories-wrapper"]; // `${styles["categories-wrapper"]} ${showCategories ? "" : styles.hide}`;
  const [currentCategory, setCurrentCategory] = useState("");
  const categoryChangeHandler: ChangeEventHandler = (event) => {
    console.log("Category change handler: ", event);
  };
  //   const [showCategories, setShowCategories] = useState(true);
  //   const categoryRef;
  //   const showCategoriesDiv = () => {
  //     setShowCategories((prev) => {
  //       return true;
  //     });
  //   };
  //   const removeCategoriesDiv = () => {
  //     setShowCategories((prev) => {
  //       return false;
  //     });
  //   };

  const selectCategoryHandler: MouseEventHandler = (event) => {
    const category = event.currentTarget.getAttribute("data-value") || "";
    setCurrentCategory(category);
  };
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
          value={currentCategory}
          onChange={categoryChangeHandler}
          //   TODO: Check on how to tell when an input is active and when it is not
          //   onFocus={showCategoriesDiv}
          //   onBlur={removeCategoriesDiv}
        />
      </div>
      <div
        className={categoriesStyle}
        // onFocus={showCategoriesDiv}
        // onBlur={removeCategoriesDiv}
      >
        <ul>
          {DUMMY_CATEGORIES.map((category) => {
            return (
              <li
                //   onFocus={showCategoriesDiv}
                //   onBlur={removeCategoriesDiv}
                onClick={selectCategoryHandler}
                key={category}
                className={styles.category}
                data-value={category}
              >
                {category}
              </li>
            );
          })}
        </ul>
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
