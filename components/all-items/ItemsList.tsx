import SingleItem from "./SingleItem";
import styles from "./ItemsList.module.css";

type Item = {
  name: string;
};
const ItemsList: React.FC<{ category: string; items: Item[] }> = (props) => {
  const generateItems = () => {
    return props.items.map((item, index) => {
    return <SingleItem key={index} item={item} category={props.category}/>;
    });
  };
  return (
    <div>
      <h3 className={styles.heading}>{props.category}</h3>
      <div className={styles.items}>{generateItems()}</div>
    </div>
  );
};

export default ItemsList;
