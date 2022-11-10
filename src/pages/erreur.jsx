import React from "react";

function Erreur() {
  return (
    <main className="main_404">
      <h1 className="404">404</h1>
      <span className="404_texte">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <a href="#accueil">Retourner sur la page d'accueil</a>
    </main>
  );
}

export default Erreur;
