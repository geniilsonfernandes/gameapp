import React, { useState, useEffect } from "react";

// css
import styles from "./Coversingle.module.css";
import global from "../../../styles/global.module.css";
// svg

import MoreSvg from "../../../svg/cover/MoreSvg";
//import RemoveFavorite from "../../svg/cover/RemoveFavorite";
import FavoriteSvg from "../../../svg/nav/FavoriteSvg";

import rawg from "../../../data/rawg";
import Head from "../../utilities/categorieHead/Head";
import GameInfo from "../coverInfo/GameInfo";

//418467
const Coversingle = () => {
  const [gamelist, setGamelist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await rawg.gameSigle(418467);
      // ...
      setGamelist(response);
      console.log(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (gamelist.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [gamelist]);

  return (
    <div className={global.mwfix}>
      <Head title={"this week"} titleSpan={"Special"} />

      <div className={styles.cover__photo}>
        <div className={styles.game__info}>
          <GameInfo
            name={loading ? false : gamelist.name}
            developers={loading ? false : gamelist.publishers[0].name}
            description={loading ? false : gamelist.description_raw}
            platforms={loading ? false : gamelist.parent_platforms}
            loading={loading}
          />

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

        <img
          className={styles.coverbackground}
          src={gamelist.background_image}
          alt={gamelist.name}
        />
      </div>
    </div>
  );
};

export default Coversingle;
