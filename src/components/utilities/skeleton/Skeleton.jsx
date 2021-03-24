import React from "react";
import styles from "./Skeleton.module.css";
export const Skeleton = (props) => {
  const { width } = props;
  const { height } = props;
  const { ml } = props;
  const { mr } = props;
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: "4px",
    marginLeft: `${ml}px`,
    marginRight: `${mr}px`,
  };

  return (
    <>
      <div className={styles.skeleton} style={style}>
        </div>
    </>
  );
};

export default Skeleton;
