import React from "react";
import "./logements.scss";
// import { useState } from "react";
import data from "../../data/logements.json";
import Tag from "../../components/tag/tag";
import { useParams, Navigate } from "react-router-dom";

function Logements() {
  const {id} = useParams();
  const logement = data.find((item) => item.id === id);
  if (!logement) return <Navigate to="/error" />;

  return (
    <main className="main_loc">
      <figure className="caroussel">
        {/* <img src="{jesaispas}" alt="{objectAlt}" /> */}
      </figure>
      <article className="location_info">
        {/* <h2 className="location_titre">{nomdelaloc}</h2> */}
        {/* <span className="location_lieu">{emplacementloc}</span> */}
        <Tag />
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
        <ul className="location_info--liste">
          <li>
            <h2 className="location_info--titre">Description</h2>
            {/* <p className="location_info--texte">{descloc}</p> */}
          </li>
          <li>
            <h2 className="location_info--titre">Équipement</h2>
            {/* <span className="location_info--texte">{equiploc1}</span> */}
            {/* <span className="location_info--texte">{equiploc2}</span> */}
          </li>
        </ul>
      </article>
    </main>
  );
}

export default Logements;
