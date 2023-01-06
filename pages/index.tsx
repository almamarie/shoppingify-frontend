import Head from "next/head";

import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/all-items/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>All Items</title>
        <meta name="description" content="All items in the shopping list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
    </>
  );
}
