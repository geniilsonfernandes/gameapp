import React, { useState, useEffect } from "react";
import global from "../../styles/global.module.css";
import categorie from "./Categorie.module.css";
import Skeleton from "../../components/utilities/skeleton/Skeleton";
import { useParams } from "react-router-dom";
import CardGame from "../../components/utilities/cardGame/CardGame";

const apiKey = "key=2f93b9a7bffb481a9ab214dcdb9530f0";
//fetch
const fetchBasic = async (id) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?genres=${id}&${apiKey}`
  );

  const dados = await response.json();
  console.log(dados);
  return dados;
};

//comp
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
      <div className={categorie.title}>
        <h2>Action Games</h2>
        <p>
          Trabalhe de dia e arrisque tudo à noite no Need for Speed™ Heat, corra
          contra a polícia corrupta da cidade, em eventos das corridas de rua.
        </p>

        <div className={categorie.listControl}>
          <div className={categorie.order}>
            <h3>Order</h3>

            <select className={categorie.orderOption} id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>

          </div>
        </div>
      </div>
  
      <div className={categorie.grid}>
        {loading
          ? [...new Array(8)].map((item, id) => {
              return (
                <Skeleton
                  key={id}
                  width={100}
                  mw={"%"}
                  height={250}
                  mh={"px"}
                />
              );
            })
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
