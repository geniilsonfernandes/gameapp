import React from "react";
import styles from "./Skeleton.module.css";
export const Skeleton = (props) => {
  const { width } = props;
  const { height } = props;
  const {mw} = props
  const {mh} = props
  const { ml } = props;
  const { mr } = props;
  const style = {
    width: `${width}${mw}`,
    height: `${height}${mh}`,
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
