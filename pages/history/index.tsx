import { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import History from "../../components/history/History";
import ChangeTab from "../../components/ui/control-navigation/ChangeTab";
import DataFetchError from "../../components/ui/data-fetch-error/DataFetchErrorSmall";
import { groupByDate } from "../../public/utils/history/group-by-date";
import { GET_AJAX } from "../../public/utils/http";
import { HistoryType } from "../../public/utils/types";
import { useAppDispatch } from "../../store";
import { uiActions } from "../../store/ui-slice";
import styles from "./index.module.css";

type ExpectedData = {
  data: HistoryType[];
  error: boolean;
};
const Home: NextPage<ExpectedData> = (props) => {
  // set the current tab
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(uiActions.setCurrentTab("history"));
  }, [dispatch]);

  function generateHistories() {
    return props.data.map((items, index) => {
      return <History key={index} title={items.title} data={items.data} />;
    });
  }

  if (props.error) {
    return (
      <div className={styles["centered-text"]}>
        <DataFetchError />
      </div>
    );
  }

  // if (isLoading) {
  //   return (
  //     <section>
  //       <h1 className={styles.title}>Shopping History</h1>
  //       <div className={styles.loader}>
  //         <Loader />
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section>
      <h1 className={styles.title}>Shopping History</h1>
      <ul className={styles.ul}>{generateHistories()}</ul>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // initialize the error flag.
  let error = false;
  let data: HistoryType[] = [];

  // fetch the history from the database
  try {
    const history = await GET_AJAX("cart-history");
    console.log(history.message);
    data = groupByDate();
  } catch (error) {
    error = true;
  }

  return {
    props: { data, error },
    revalidate: 1,
  };
};

export default Home;
