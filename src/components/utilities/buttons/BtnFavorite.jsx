import React, { useState } from "react";
import styles from "./BtnFavorite.module.css";
import FavoriteSvg from "../../../svg/cover/FavoriteBtnCover";
import { Link } from "react-router-dom";

const BtnFavorite = () => {
  const [over, setOver] = useState(false);

  return (
    <>
      <Link
        to="/"
        className={styles.button__favorite}
        onMouseOver={() => {
          setOver(true);
        }}
        onMouseLeave={()=>{setOver(false)}}
      >
        <FavoriteSvg over={over} />
       
      </Link>
    </>
  );
};

export default BtnFavorite;
