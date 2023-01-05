import React, { Fragment, ReactElement } from "react";
import DetailsPane from "./DetailsPane";
import FlexiblePane from "./FlexiblePane";
import NavigationPane from "./NavigationPane";
import styles from "./Layout.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className={styles.layout}>
      <section className={styles["navigation-pane"]}>
        <NavigationPane className={styles.navigation} />
      </section>
      <section className={styles["flexible-pane"]}>
        <FlexiblePane>{props.children}</FlexiblePane>
      </section>
      <section className={styles["details-pane"]}>
        <DetailsPane />
      </section>
    </div>
  );
};

export default Layout;
