import React from "react";
import "./erreur.scss";
import { Link } from "react-router-dom";

function Erreur() {
  return (
    <main className="main_404">
      <h1 className="titre_404">404</h1>
      <span className="texte_404">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to="/" className="link_404">Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default Erreur;
