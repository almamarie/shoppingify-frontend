import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/all-items/Header";
import { GET_AJAX } from "../public/utils/http";
import { itemsActions, ItemsType } from "../store/items-slice";
import styles from "./Index.module.css";
import AllItems from "../components/all-items/AllItems";
import { useAppDispatch } from "../store";
import { groupItems } from "../public/utils/group-items";
import { uiActions } from "../store/ui-slice";

type ExpectedData = {
  items: ItemsType[];
  categories: [];
  currentCart: {};
  itemsByCategories: [];
  error: boolean;
};

const Home: NextPage<ExpectedData> = (props) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState(props.error);

  useEffect(() => {
    dispatch(uiActions.setCurrentTab("items"));
  }, [dispatch]);

  if (!error) {
    dispatch(itemsActions.initialize(props));
  }
  let errorMessage = (
    <p className={styles.error}>
      Error loading data
      <br />
      Please check your network and try again
    </p>
  );
  return (
    <>
      <Head>
        <title>Shopingify - All Items</title>
        <meta name="description" content="All items in the shopping list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />

      {!error ? <AllItems items={props.itemsByCategories} /> : errorMessage}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allItems = await GET_AJAX("all-items");
  const allCategories = await GET_AJAX("categories");
  const categoriesItems = await GET_AJAX("categories-items-list");
  const currentCart = await GET_AJAX("current-cart");

  let error: boolean;

  if (
    allCategories.success === false ||
    allItems.success === false ||
    categoriesItems.success === false ||
    currentCart.success == false
  ) {
    console.log("error occured here");
    error = true;
  } else {
    error = false;
  }

  console.log("Calling all items");
  const { items, itemsByCategories, categories } = groupItems(allItems.message);
  // console.log("length: ", allItems);

  return {
    props: {
      items,
      categories,
      itemsByCategories,
      currentCart: currentCart.message,
      error,
    },
    revalidate: 1,
  };
};

// export const getStaticProps: GetStaticProps = async () => {
//   // const categoriesItemsUrl = API_BASE_URL + "categories-items.json";

//   // const response = await fetch(categoriesItemsUrl);
//   // const data = await response.json();
//   // console.log(data);

//   const allItems = await GET_AJAX("all-items");
//   const allCategories = await GET_AJAX("categories");
//   const categoriesItems = await GET_AJAX("categories-items-list");

//   let error: boolean;

//   if (
//     allCategories.success === false ||
//     allItems.success === false ||
//     categoriesItems.success === false
//   ) {
//     console.log("error occured here");
//     error = true;
//   } else {
//     error = false;
//   }
//   console.log("error: ", error);

//   return {
//     props: {
//       allItems: allItems.message,
//       allCategories: allCategories.message,
//       categoriesItems: categoriesItems.message,
//       error,
//     },
//     revalidate: 1,
//   };
// };

export default Home;
