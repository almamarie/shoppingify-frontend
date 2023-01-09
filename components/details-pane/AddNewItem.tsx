import {
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../store";
import { detailsPaneActions } from "../../store/details-pane-slice";
import { DUMMY_LIST } from "../../store/items";
import Button from "../ui/buttons/Button";
import styles from "./AddNewItem.module.css";

const DUMMY_CATEGORIES = Object.keys(DUMMY_LIST);
const AddNewItem = () => {
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

  const categoryRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const categoriesStyle = styles["categories-wrapper"]; // `${styles["categories-wrapper"]} ${showCategories ? "" : styles.hide}`;
  const [currentCategory, setCurrentCategory] = useState("");
  const categoryChangeHandler = () => {
    const value = categoryRef.current?.value || "";
    setCurrentCategory(value);
  };

  const selectCategoryHandler: MouseEventHandler = (event) => {
    const category = event.currentTarget.getAttribute("data-value") || "";
    setCurrentCategory(category);
  };

  const formSubmitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    dispatch(detailsPaneActions.setShowing("show selected item"));
  };
  return (
    <form className={styles.wrapper} onSubmit={formSubmitHandler}>
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
          ref={categoryRef}
          onChange={categoryChangeHandler}
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
