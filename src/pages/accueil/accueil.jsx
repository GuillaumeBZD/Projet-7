import React from "react";
import "./accueil.scss";
import Card from "../../components/card/card";

function Accueil() {
  return (
    <main className="main_accueil">
      <h1 className="chezVous">Chez vous, partout et ailleurs</h1>
      <Card />
    </main>
  );
}

export default Accueil;
