import React from "react";
import global from "../../styles/global.module.css";
import categorie from "./Categorie.module.css";


import { useParams } from "react-router-dom";
import CardGame from "../../components/utilities/cardGame/CardGame";

const Categorie = () => {
  const params = useParams();

  return (
    <section className={global.mwfix}>
      <h1>{params.id}</h1>
      <div  className={categorie.grid}>
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
        <CardGame />
       
      </div>
      <div className={categorie.seemore}>
          <div className={categorie.seemoreBtn}>
                  See more
          </div>
      </div>
    </section>
  );
};

export default Categorie;
