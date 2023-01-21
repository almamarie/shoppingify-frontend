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
import { GetStaticProps } from "next";
import { GET_AJAX } from "../../public/utils/http";
const Graph = dynamic(import("../../components/statistics/Graph"), {
  ssr: false,
});

const Home = () => {
  const [isloading, setIsloading] = useState(true);

  const topItemsData: ExpectedTopItemFormat = [
    {
      name: "Banana",
      percentage: 50,
    },

    {
      name: "Rice",
      percentage: 20,
    },

    {
      name: "Chicken 1kg",
      percentage: 8,
    },
  ];

  const topCategoriesData: ExpectedTopCategoryFormat = [
    {
      name: "Fruits and vegetables",
      percentage: 23,
    },

    {
      name: "Meat and Fish",
      percentage: 14,
    },

    {
      name: "Pets",
      percentage: 11,
    },
  ];

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
      <section className={styles["top-part"]}>
        <TopItems fetchingData={isloading} data={topItemsData} />
        <TopCategories fetchingData={isloading} data={topCategoriesData} />
      </section>
      <section>
        <Graph data={monthlySpending} />
      </section>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // fetch the current cart data from the backend
  const currentCart = await GET_AJAX("/current-cart");
  console.log("current cart: ", currentCart.message);
  return {
    props: {},
    revalidate: 1,
  };
};

export default Home;
