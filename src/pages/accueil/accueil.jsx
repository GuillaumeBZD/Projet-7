import React from "react";
import "./accueil.scss";
import Card from "../../components/card/card";
import data from "../../ressources/logements.json";

function Accueil() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <main className="main_accueil">
      <div className="banner">
        <div className="fade_background"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <ul className="dispo_accueil">{cards}</ul>
    </main>
  );
}

export default Accueil;
