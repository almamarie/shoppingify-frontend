import { DUMMY_LIST } from "../../store/category-list";
import styles from "./AllItems.module.css";
import ItemsList from "./ItemsList";

const DUMMY_CATEGORIES = DUMMY_LIST;
const AllItems = () => {
  return (
    <section>
      {Object.keys(DUMMY_CATEGORIES).map((item) => {
        console.log(item);
        return (
          <ItemsList
            key={item}
            category={item}
            items={DUMMY_CATEGORIES[item as keyof typeof DUMMY_CATEGORIES]}
          />
        );
      })}
    </section>
  );
};

export default AllItems;
