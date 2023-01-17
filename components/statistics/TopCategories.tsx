import LoadingPlaceholder from "./LoadingPlaceHolder";
import SingleTopItem, { ExpectedSingleTopItemFormat } from "./SingleTopItem";
import styles from "./TopCategories.module.css";

export type ExpectedTopCategoryFormat = ExpectedSingleTopItemFormat[];

const TopCategories: React.FC<{
  fetchingData: boolean;
  data: ExpectedTopCategoryFormat;
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
      <h3 className={styles.header}>Top Categories</h3>
      {props.fetchingData ? <LoadingPlaceholder /> : generateItems()}
    </div>
  );
};

export default TopCategories;
