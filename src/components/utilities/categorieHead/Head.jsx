import React from "react";
import styles from "./Head.module.css";

const Head = (props) => {
  const { title } = props;
  const { titleSpan } = props;
  return (
    <div className={styles.categories__title}>
      <h2>
        <span>{titleSpan}</span> {title}
      </h2>
      <div className={styles.divisor1}></div>
    </div>
  );
};

export default Head;
