import React, { useState, useEffect } from "react";

// css
import styles from "./Coversingle.module.css";
import global from "../../../styles/global.module.css";
// svg



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
      <div className={styles.title}>
        <Head title={"this week"} titleSpan={"Special"} />
      </div>

      <div className={styles.cover__photo}>
        <div className={styles.game__info}>
          <div className={styles.game__container}>
            <GameInfo
              name={loading ? false : gamelist.name}
              developers={loading ? false : gamelist.publishers[0].name}
              description={loading ? false : gamelist.description_raw}
              platforms={loading ? false : gamelist.parent_platforms}
              loading={loading}
            />
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
