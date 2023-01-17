import LoadingPlaceholder from "./LoadingPlaceHolder";
import SingleTopItem, { ExpectedSingleTopItemFormat } from "./SingleTopItem";
import styles from "./TopItems.module.css";

export type ExpectedTopItemFormat = ExpectedSingleTopItemFormat[];

const TopItems: React.FC<{
  fetchingData: boolean;
  data: ExpectedTopItemFormat;
}> = (props) => {
  function generateItems() {
    return (
      <ul className={styles.ul}>
        {props.data.map((item, index) => {
          return <SingleTopItem key={index} data={item} />;
        })}
      </ul>
    );
  }
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>Top Items</h3>
      {props.fetchingData ? <LoadingPlaceholder /> : generateItems()}
    </div>
  );
};

export default TopItems;
