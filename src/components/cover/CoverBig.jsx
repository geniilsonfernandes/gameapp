import React, { useState, useEffect } from "react";

//css
import styles from "./CoverBig.module.css";
import global from "../../styles/global.module.css";
//svg
import WinSvg from "../../svg/cover/WinSvg";
import PsSvg from "../../svg/cover/PsSvg";
import XboxSvg from "../../svg/cover/XboxSvg";
import MoreSvg from "../../svg/cover/MoreSvg";
//import RemoveFavorite from "../../svg/cover/RemoveFavorite";
import FavoriteSvg from "../../svg/nav/FavoriteSvg";
import BackSvg from "../../svg/cover/BackSvg";
import NextSvg from "../../svg/cover/NextSvg";
//
import Skeleton from "../utilities/skeleton/Skeleton";
import ThumbnailSlider from "./thumbnailSlider/ThumbnailSlider";
import { Link } from "react-router-dom";

import rawg from "../../data/rawg";

//comp
const CoverBig = () => {
  //states
  const [countGame, setCountGame] = useState(0);
  // eslint-disable-next-line
  const [gamesID, setGameID] = useState([364806, 51325, 42187, 5563, 41494]);
  //games

  //const gamesID = [418467, 418467, 418467]
  const [gamelist, setGamelist] = useState([]);
  const [loading, setLoading] = useState(true);
  //
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await rawg.gamelist(gamesID);
      // ...
      setGamelist(response);
    }
    fetchData();
  }, [gamesID]);
  //
  useEffect(() => {
    if (gamelist.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
      console.log("tem coisa", gamelist);
    }
  }, [gamelist]);
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
      <div
        className={styles.cover__photo}
        style={
          loading
            ? { background: "#1e2325" }
            : {
                backgroundImage: `url(${gamelist[countGame].background_image})`
              }
        }
      >
        <div className={styles.thumbnailSlider}>
          <ThumbnailSlider index={countGame} />
        </div>

        <div className={styles.game__info}>
          <div className={styles.info__name}>
            <h1>
              {loading ? (
                <Skeleton width={250} height={22} />
              ) : (
                gamelist[countGame].name
              )}
            </h1>
          </div>
          <div className={styles.info__publisher}>
            {loading ? (
              <Skeleton width={100} height={16} />
            ) : (
              <p>{gamelist[countGame].publishers[0].name}</p>
            )}
            <div className={styles.info__platforms}>
              {loading ? (
                <Skeleton width={30} height={16} />
              ) : (
                gamelist[countGame].parent_platforms.map(
                  (pltr, id) =>
                    pltr.platform.id === 2 && (
                      <div key={id}>
                        <PsSvg color={"#f2f2f2"} />
                      </div>
                    )
                )
              )}
              {loading ? (
                <Skeleton width={30} height={16} />
              ) : (
                gamelist[countGame].parent_platforms.map(
                  (pltr, id) =>
                    pltr.platform.id === 1 && (
                      <div key={id}>
                        <WinSvg color={"#f2f2f2"} />
                      </div>
                    )
                )
              )}
              {loading ? (
                <Skeleton width={30} height={16} />
              ) : (
                gamelist[countGame].parent_platforms.map(
                  (pltr, id) =>
                    pltr.platform.id === 3 && (
                      <div key={id}>
                        <XboxSvg color={"#f2f2f2"} />
                      </div>
                    )
                )
              )}
            </div>
          </div>
          <div className={styles.divisor}> </div>
          <div className={styles.description}>
            {loading ? (
              <Skeleton width={200} height={72} />
            ) : (
              <p>
                {gamelist[countGame].description_raw
                  .substring(0, 150)+'...'}
              </p>
            )}
          </div>
          <div className={styles.info__buttons}>
            {loading ? (
              <Skeleton width={170} height={38} marginL={0} marginR={8} />
            ) : (
              <Link to="categorie/3424234" className={styles.button__more}>
                {" "}
                <p>View more</p>
                <MoreSvg />{" "}
              </Link>
            )}
            {loading ? (
              <Skeleton width={170} height={38} marginL={0} marginR={8} />
            ) : (
              <Link to="categorie/342rewrw" className={styles.button__favorite}>
                {" "}
                <p>Add favorite</p>
                <FavoriteSvg />{" "}
              </Link>
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
