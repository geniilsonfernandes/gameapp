import React from "react";
import card from "./CardGame.module.css";

//svg
import WinSvg from "../../../svg/cover/WinSvg";
import PsSvg from "../../../svg/cover/PsSvg";
import XboxSvg from "../../../svg/cover/XboxSvg";

import MoreSvg from "../../../svg/cover/MoreSvg";
import FavoriteSvg from "../../../svg/nav/FavoriteSvg";

import { Link } from "react-router-dom";

const CardGame = (props) => {

  const {name} = props;
  const {img} = props;

  return (
    <div className={card.cardgame}>
      <div className={card.cardImage}>
        <img className={card.card__background} src={img} alt={name} />
      </div>
      <div className={card.info}>
        <h2>{name}</h2>
        <div className={card.descrip}>
          <div className={card.platforms}>
            <WinSvg color={"#B7B7B7"} />
            <PsSvg color={"#B7B7B7"} />
            <XboxSvg color={"#B7B7B7"} />
          </div>
          <div className={card.dev}>
            <p> Electronic Arts, 2018</p>
          </div>
        </div>
      </div>
      <div className={card.info__buttons}>
        <Link to="categorie/3424234" className={card.button__more}>
          <p>View more</p>
          <MoreSvg />{" "}
        </Link>

        <Link to="categorie/342rewrw" className={card.button__favorite}>
          <p>Add favorite</p>
          <FavoriteSvg />{" "}
        </Link>
      </div>
      <div className={card.Action4}></div>
    </div>
  );
};

export default CardGame;
