import Head from "next/head";
import AllItems from "../components/all-items/AllItems";
import Header from "../components/all-items/Header";
import ItemsList from "../components/all-items/ItemsList";
import { AJAX } from "../public/utils/http";
import { API_BASE_URL } from "../public/utils/types";
import { DUMMY_ITEMS } from "../store/items";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shopingify - All Items</title>
        <meta name="description" content="All items in the shopping list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <AllItems />
    </>
  );
}
