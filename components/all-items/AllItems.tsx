import { DUMMY_LIST } from "../../store/category-list";
import styles from "./AllItems.module.css";
import ItemsList from "./ItemsList";

const DUMMY_ITEMS = DUMMY_LIST;
const AllItems = () => {
  return (
    <section>
      {Object.keys(DUMMY_ITEMS).map((item) => {
        console.log(item);
        return (
          <ItemsList
            key={item}
            category={item}
            items={DUMMY_ITEMS["Fruits and vegetables"]}
          />
        );
      })}
    </section>
  );
};

export default AllItems;
