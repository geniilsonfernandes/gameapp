import React, { useState, useEffect } from "react";

//css
import styles from "./CoverBig.module.css";
import global from "../../styles/global.module.css";
//svg

//import RemoveFavorite from "../../svg/cover/RemoveFavorite";

import BackSvg from "../../svg/cover/BackSvg";
import NextSvg from "../../svg/cover/NextSvg";
//
import Skeleton from "../utilities/skeleton/Skeleton";


import rawg from "../../data/rawg";
import GameInfo from "./coverInfo/GameInfo";
import BtnFavorite from "../utilities/buttons/BtnFavorite";

const CoverBig = () => {
  //states
  const [countGame, setCountGame] = useState(0);
  // eslint-disable-next-line
  const [gamesID, setGamesID] = useState([364806, 51325, 42187, 5563, 41494]);

  //const gamesID = [418467, 418467, 418467]
  const [gamelist, setGamelist] = useState([]);
  const [loading, setLoading] = useState(true);
  //
  useEffect(() => {
    async function fetchData() {
      const response = await rawg.gamelist(gamesID);

      setGamelist(response);
      setLoading(false);
    }

    fetchData();
  }, [gamesID]);
  //

  // index controle
  const nextClick = () => {
    countGame === gamesID.length - 1
      ? setCountGame(0)
      : setCountGame(countGame + 1);
  };
  //
  const nextBack = () => {
    countGame === 0
      ? setCountGame(gamesID.length - 1)
      : setCountGame(countGame - 1);
  };



  //
  return (
    <div className={global.mwfix}>
      <div className={styles.cover__photo}>
        <img
          className={styles.cover__background}
          src={loading ? "" : gamelist[countGame].background_image}
          alt={loading ? "" : gamelist[countGame].name}
        />

        <div className={styles.game__info}>
          <GameInfo
            name={loading ? false : gamelist[countGame].name}
            developers={loading ? false : gamelist[countGame].publishers[0].name}
            description={loading ? false : gamelist[countGame].description_raw}
            platforms={loading ? false : gamelist[countGame].parent_platforms}
            loading={loading}
          />

         
          <div className={styles.info__buttons}>
            {loading ? (
              <Skeleton width={170} height={38} mw={'px'} mh={'px'} marginL={0} marginR={8} />
            ) : (
              <BtnFavorite />
            )}
          </div>

        </div>
        <div className={styles.coverBtn}>
          <button
            disabled={loading}
            className={styles.button__back}
            onClick={nextBack}
          >
            <BackSvg />
          </button>
          <button
            disabled={loading}
            className={styles.button__next}
            onClick={nextClick}
          >
            <NextSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverBig;
