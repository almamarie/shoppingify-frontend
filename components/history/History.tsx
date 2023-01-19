import { HistoryCategoryType } from "../../public/utils/types";
import styles from "./History.module.css";
import SingleHistory from "./SingleHistory";

const History: React.FC<{ title: string; data: HistoryCategoryType[] }> = (
  props
) => {
  console.log(props.data);
  function generateItems() {
    return props.data.map((history, index) => {
      return <SingleHistory key={index} data={history} />;
    });
  }
  return (
    <li className={styles.wrapper}>
      <h3 className={styles.header}>{props.title}</h3>
      <ul className={styles.ul}>{generateItems()}</ul>
    </li>
  );
};
export default History;
