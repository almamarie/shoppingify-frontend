import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import History from "../../components/history/History";
import Loader from "../../components/ui/loader/Loader";
import { GET_AJAX } from "../../public/utils/http";
import { HistoryType } from "../../public/utils/types";
import {
  DUMMY_HISTORY,
  HISTORY_FROM_DATABASE,
} from "../../store/dummy_history";

import styles from "./index.module.css";

function Home() {
  // TODO: try to save the carts history by date so they are easier to retrieve
  const [isLoading, setIsLoading] = useState(true);
  const [histories, setHistories] = useState<HistoryType>([]);
  useEffect(() => {
    // TODO: Fetch data
    setIsLoading(true);

    setTimeout(() => {
      setHistories(DUMMY_HISTORY);
      setIsLoading(false);
    }, 500);
  }, []);

  function generateHistories() {
    return histories.map((items, index) => {
      // console.log(index);
      return <History key={index} title={items.title} data={items.data} />;
    });
  }

  if (isLoading) {
    return (
      <section>
        <h1 className={styles.title}>Shopping History</h1>
        <div className={styles.loader}>
          <Loader />
        </div>
      </section>
    );
  }
  return (
    <section>
      <h1 className={styles.title}>Shopping History</h1>
      <ul className={styles.ul}>{generateHistories()}</ul>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // initialize the error flag.
  let error = false;
  let props: HistoryType[] = [];

  // fetch the history from the database

  // const history = await GET_AJAX("cart-history");
  // console.log("History: ", JSON.stringify(history.message));
  const history = HISTORY_FROM_DATABASE;

  return {
    props: { data: props, error },
    revalidate: 1,
  };
};

export default Home;
