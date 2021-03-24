import React, { useState, useEffect } from "react";

// css
import styles from "./Coversingle.module.css";
import global from "../../../styles/global.module.css";
// svg

import WinSvg from "../../../svg/cover/WinSvg";
import PsSvg from "../../../svg/cover/PsSvg";
import XboxSvg from "../../../svg/cover/XboxSvg";
import MoreSvg from "../../../svg/cover/MoreSvg";
//import RemoveFavorite from "../../svg/cover/RemoveFavorite";
import FavoriteSvg from "../../../svg/nav/FavoriteSvg";
import Skeleton from "../../utilities/skeleton/Skeleton";

import rawg from "../../../data/rawg";

//418467
const Coversingle = () => {
  const [gamelist, setGamelist] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await rawg.gameSigle(418467);
      // ...
      setGamelist(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (gamelist.length === 0) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [gamelist]);

  return (
    <div className={global.mwfix}>
      <div className={styles.categories__title}>
        <h2>
          <span>Special</span> this week
        </h2>
        <div className={styles.divisor1}></div>
      </div>
      <div className={styles.cover__photo}>
        <div className={styles.game__info}>
          <div className={styles.info__name}>
            <h1>{loading?<Skeleton width={300} height={36} />:gamelist.publishers[0].name}</h1>
          </div>
          <div className={styles.info__publisher}>
            <p>xczxczxcz</p>

            <div className={styles.info__platforms}>
              <PsSvg />
              <WinSvg />
              <XboxSvg />
            </div>
          </div>
          <div className={styles.divisor}> </div>
          <div className={styles.description}>
            <p>czxczczcz</p>
          </div>
          <div className={styles.info__buttons}>
            <button className={styles.button__more}>
              <p>View more</p>
              <MoreSvg />{" "}
            </button>

            <button className={styles.button__favorite}>
              <p>Add favorite</p>
              <FavoriteSvg />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coversingle;
