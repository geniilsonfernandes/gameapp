import React, { useState, useEffect } from "react";
import global from "../../styles/global.module.css";
import categorie from "./Categorie.module.css";
import Skeleton from "../../components/utilities/skeleton/Skeleton";
import { useParams } from "react-router-dom";
import CardGame from "../../components/utilities/cardGame/CardGame";

const apiKey = "key=2f93b9a7bffb481a9ab214dcdb9530f0";

const fetchBasic = async (id) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?genres=${id}&${apiKey}`
  );

  const dados = await response.json();
  console.log(dados);
  return dados;
};

const Categorie = () => {
  const params = useParams();
  const [gamelist, setGamelist] = useState([]);
  // eslint-disable-next-line
  const [next, setNext] = useState("");
  const [loading, setLoading] = useState(true);
  //
  useEffect(() => {
    async function fetchData() {
      const response = await fetchBasic(params.id);
      setLoading(false);
      setNext(response.next);
      setGamelist(response.results);
    }
    fetchData();
  }, [params]);
  //

  return (
    <section className={global.mwfix}>
      <h1>{params.id}</h1>
      <div className={categorie.grid}>
        {loading
          ? [...new Array(8)].map((item,id) => {
            return (
              <Skeleton key={id} width={100} mw={"%"} height={250} mh={"px"} />
            )})
          : gamelist.map((item) => (
              <CardGame
                key={item.id}
                name={item.name}
                img={item.background_image}
              />
            ))}
      </div>
      <div className={categorie.seemore}>
        <div className={categorie.seemoreBtn}>See more</div>
      </div>
    </section>
  );
};

export default Categorie;
