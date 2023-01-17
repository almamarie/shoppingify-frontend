import { useEffect, useState } from "react";
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

  useEffect(() => {
    setIsloading(false);
  }, [setIsloading]);

  return (
    <section className={styles["top-part"]}>
      <TopItems fetchingData={isloading} data={topItemsData} />
      <TopCategories fetchingData={isloading} data={topCategoriesData} />
    </section>
  );
};

export default Home;
