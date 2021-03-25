import React from "react";
//styles
import styles from "./CategoriesHome.module.css";
import global from "../../styles/global.module.css";
import { categoriesId } from "../../data/config.js";
//conps
import CategorieBtnSmall from "../utilities/buttons/CategorieBtnSmall";
import Head from "../utilities/categorieHead/Head";
//img
import CategorieImg from "../../img/categoriaActionsSmal.png";

const CategoriesHome = () => {
  return (
    <section className={global.mwfix}>
      <div className={styles.categories__grid}>
        <Head title={"we think you’ll like"} titleSpan={"Categories"} />
        <div className={styles.categories__containerGrid}>
          {categoriesId.map((item) => (
            <CategorieBtnSmall
              key={item.id}
              categorie={`${item.name}`}
              id={item.id}
              img={CategorieImg}
              classStyles={`${item.name + item.id}`}
            ></CategorieBtnSmall>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesHome;
