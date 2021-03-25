import React from "react";
import styles from "./GameInfo.module.css";
//svg
import Skeleton from "../../utilities/skeleton/Skeleton";
import GamePlatforms from "./GamePlatforms";

const GameInfo = (props) => {
  const { loading } = props;
  const { name } = props;
  const { developers } = props;
  const { description } = props;
  const { platforms } = props;
  return (
    <>
      <div className={styles.info__name}>
        {loading ? <Skeleton width={300} height={36} mw={'px'} mh={'px'}/> : <h1>{name}</h1>}
      </div>
      <div className={styles.info__publisher}>
        {loading ? <Skeleton width={150} height={18} mw={'px'} mh={'px'}/> : <p>{developers}</p>}

        <div className={styles.info__platforms}>
          {loading ? (
            <Skeleton width={16} height={18} />
          ) : (
            <GamePlatforms platforms={loading ? [] : platforms} />
          )}
        </div>
      </div>
      <div className={styles.divisor}> </div>
      <div className={styles.description}>
        {loading ? (
          <Skeleton width={300} height={36} mw={'px'} mh={'px'}/>
        ) : (
          <p>{description.substring(0, 150)}...</p>
        )}
      </div>
    </>
  );
};

export default GameInfo;
