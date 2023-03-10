import Image from "next/image";
import React from "react";
import logo from "../../public/resources/logo.svg";
import styles from "./NavigationPane.module.css";
import listBullet from "../../public/svgs/list-bullet.svg";
import CartIcon from "../cart/CartIcon";
import { useAppSelector } from "../../store";
import Link from "next/link";

const NavigationPane: React.FC<{ className: React.ReactNode }> = () => {
  const currentTab = useAppSelector((state) => state.ui.currentTab);
  console.log("Current Tab: ", currentTab);
  return (
    <div className={styles.wrapper}>
      <div className={styles.ele}>
        <Image src={logo} alt="Logo of shoppingify" />
      </div>
      <div>
        <nav>
          <Link
            href="/"
            className={`${styles["nav-ele"]} ${styles["items"]} `}
            title="items"
          >
            <div
              className={`${styles["active-border"]} ${
                currentTab === "items" ? styles["active-border-active"] : ""
              }`}
            ></div>
            <Image
              className={styles["nav-logo"]}
              src={listBullet}
              alt="list image icon"
            />
          </Link>

          <Link
            href="/history"
            className={`${styles["nav-ele"]} ${styles["items"]}`}
            title="history"
          >
            <div
              className={`${styles["active-border"]}  ${
                currentTab === "history" ? styles["active-border-active"] : ""
              }`}
            ></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles["history-logo"]}
            >
              <path d="M12 8v5h5v-2h-3V8z"></path>
              <path d="M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z"></path>
            </svg>
          </Link>

          <Link
            href="/statistics"
            className={`${styles["nav-ele"]} ${styles["items"]}`}
            title="statistics"
          >
            <div
              className={`${styles["active-border"]}  ${
                currentTab === "statistics"
                  ? styles["active-border-active"]
                  : ""
              }`}
            ></div>
            <Image
              className={styles["nav-logo"]}
              src={listBullet}
              alt="list image icon"
            />
          </Link>
        </nav>
      </div>

      <div className={styles.ele}>
        <CartIcon />
      </div>
    </div>
  );
};

export default NavigationPane;
