import React from "react";

function Logements() {
  return (
    <main className="main_loc">
      <figure className="caroussel">
        {/* <img src="{jesaispas}" alt="{objectAlt}" /> */}
      </figure>
      <article className="location_info">
        {/* <h2 className="location_titre">{nomdelaloc}</h2> */}
        {/* <span className="location_lieu">{emplacementloc}</span> */}
        <ul className="location_ville">
          {/* <li>{ville}</li> */}
          {/* <!-- a iterer en fonction --> */}
        </ul>
        <div className="location_review">
          <span className="location_review--etoile">
            <i class="fas fa-star colored"></i>
            <i class="fas fa-star"></i>
          </span>
          <div className="location_review--client">
            <span>variablenomClient</span>
            <img src="{photoClient}" alt="photo du client" />
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
