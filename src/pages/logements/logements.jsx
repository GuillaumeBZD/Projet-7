import React from "react";
import "./logements.scss";
// import { useState } from "react";
import data from "../../data/logements.json";
import TagList from "../../components/tag/tag";
import Slider from "../../components/slider/slider";
// import Dropdown from "../../components/dropdown/dropdown"
import { useParams, Navigate } from "react-router-dom";

function Logements() {
  const {id} = useParams();
  const logement = data.find((item) => item.id === id);
  if (!logement) return <Navigate to="/error" />;

  // const dropdowns = logement.data.map((item) => {
  //   return (
  //     <Dropdown key={item.id} title={item.title} content={item.description} />
  //   );
  // });

  return (
    <main className="main_loc">
      <Slider slides={logement.pictures} />
      <article className="location_info">
        {/* <h2 className="location_titre">{nomdelaloc}</h2> */}
        {/* <span className="location_lieu">{emplacementloc}</span> */}
        <TagList items={logement.tags} />
        <div className="location_review">
          <span className="location_review--etoile">
            <i class="fas fa-star colored"></i>
            <i class="fas fa-star"></i>
          </span>
          <div className="location_review--client">
            <span>variablenomClient</span>
            <img src="photoduclien" alt="client" />
          </div>
        </div>
        <dl className="location_info--liste">
          {/* {dropdowns} */}
        </dl>
      </article>
    </main>
  );
}

export default Logements;
