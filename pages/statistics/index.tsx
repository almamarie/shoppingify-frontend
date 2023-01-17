import React, { useEffect, useState } from "react";
import Graph, { ExpectedChartData } from "../../components/statistics/Graph";
import TopCategories, {
  ExpectedTopCategoryFormat,
} from "../../components/statistics/TopCategories";
import TopItems, {
  ExpectedTopItemFormat,
} from "../../components/statistics/TopItems";
import styles from "./index.module.css";

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

  const monthlySpending: ExpectedChartData = {
    January: 35,
    February: 120,
    March: 35,
    April: 10,
    May: 35,
    June: 45,
    July: 95,
    August: 65,
    September: 22,
    October: 10,
    November: 55,
    December: 200,
  };

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

export default Home;
