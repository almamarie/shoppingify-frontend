import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import TopCategories, {
  ExpectedTopCategoryFormat,
} from "../../components/statistics/TopCategories";
import TopItems, {
  ExpectedTopItemFormat,
} from "../../components/statistics/TopItems";
import styles from "./index.module.css";
import { ExpectedChartData } from "../../components/statistics/Graph";
import { GetStaticProps, NextPage } from "next";
import { GET_AJAX } from "../../public/utils/http";
import { generateTopItems } from "../../public/utils/statistics/generate-top-items";
import { generateTopCategories } from "../../public/utils/statistics/generate-top-categories";
import ChangeTab from "../../components/ui/control-navigation/ChangeTab";
const Graph = dynamic(import("../../components/statistics/Graph"), {
  ssr: false,
});

type ExpectedData = {
  topItemsData: ExpectedTopItemFormat;
  topCategoriesData: ExpectedTopCategoryFormat;
  monthlySpending: ExpectedChartData;
  error: boolean;
};

const Home: NextPage<ExpectedData> = (props) => {
  const [isloading, setIsloading] = useState(true);

  const monthlySpending: ExpectedChartData = [
    { name: "January", value: 35 },
    { name: "February", value: 120 },
    { name: "March", value: 35 },
    { name: "April", value: 200 },
    { name: "May", value: 35 },
    { name: "June", value: 45 },
    { name: "July", value: 95 },
    { name: "August", value: 65 },
    { name: "September", value: 22 },
    { name: "October", value: 10 },
    { name: "November", value: 55 },
    { name: "December", value: 200 },
  ];

  useEffect(() => {
    setIsloading(false);
  }, [setIsloading]);

  return (
    <React.Fragment>
      {/* change the current tab to statistics */}

      <section className={styles["top-part"]}>
        <ChangeTab tab="statistics" />
        <TopItems fetchingData={isloading} data={props.topItemsData} />
        <TopCategories
          fetchingData={isloading}
          data={props.topCategoriesData}
        />
      </section>
      <section>
        <Graph data={monthlySpending} />
      </section>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // initialize the error flag
  let error = false;

  // fetch the current cart data from the backend
  const currentCart = await GET_AJAX("/current-cart");
  // console.log("current cart: ", currentCart.message);

  if (!currentCart.success) {
    error = true;
  }
  // generate the "top items" data
  console.log("Current cart: ", currentCart.message);
  const topItemsData: ExpectedTopItemFormat = generateTopItems(
    currentCart.message.items,
    currentCart.message.totalQuantity
  );

  const topCategoriesData: ExpectedTopCategoryFormat = generateTopCategories(
    currentCart.message.items,
    currentCart.message.totalQuantity
  );

  const props: ExpectedData = {
    topItemsData,
    topCategoriesData,
    monthlySpending: [],
    error,
  };

  return {
    props,
    revalidate: 1,
  };
};

export default Home;
