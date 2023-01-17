import { useRouter } from "next/router";
import { FormEventHandler, MouseEventHandler, useRef, useState } from "react";
import { POST_AJAX } from "../../public/utils/http";
import { useAppDispatch, useAppSelector } from "../../store";
import { detailsPaneActions } from "../../store/details-pane-slice";
import { itemsActions, ItemsType } from "../../store/items-slice";
import Button from "../ui/buttons/Button";
import styles from "./AddNewItem.module.css";

const AddNewItem = () => {
  const categoryRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [categories, items] = useAppSelector((state) => {
    return [state.items.categories, state.items.items];
  });
  const categoriesStyle = styles["categories-wrapper"];
  const [currentCategory, setCurrentCategory] = useState("");
  const router = useRouter();
  const categoryChangeHandler = () => {
    const value = categoryRef.current?.value || "";
    setCurrentCategory(value);
  };

  const selectCategoryHandler: MouseEventHandler = (event) => {
    const category = event.currentTarget.getAttribute("data-value") || "";
    setCurrentCategory(category);
  };

  const formSubmitHandler: FormEventHandler = async (event) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      note: { value: string };
      image: { value: string };
      category: { value: string };
    };

    const newItem: ItemsType = {
      name: target.name.value.trim(),
      note: target.note.value.trim(),
      image: target.image.value.trim(),
      category: target.category.value.trim(),
    };

    console.log(newItem);

    // check if item is already in database
    const tmpItem = items.find((item) => {
      console.log(
        `item.name.toLowerCase() ${item.name.toLowerCase()} === newItem.name.toLowerCase() ${newItem.name.toLowerCase()} ${
          item.name.toLowerCase() === newItem.name.toLowerCase()
        }`
      );
      return item.name.toLowerCase() === newItem.name.toLowerCase();
    });

    if (tmpItem) {
      console.log("item found: ", tmpItem);
      return;
    }

    const response = await POST_AJAX("all-items", newItem);

    console.log(response);

    // dispatch(itemsActions.addItem(tmpItem));

    dispatch(detailsPaneActions.setShowing("show current cart"));
  };

  function routetoCart() {
    dispatch(detailsPaneActions.setShowing("show current cart"));
  }
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
        />
      </div>
      <div className={categoriesStyle}>
        <ul>
          {categories.map((category) => {
            return (
              <li
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
      <div className={styles.buttons} onClick={routetoCart}>
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
