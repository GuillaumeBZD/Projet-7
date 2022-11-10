import React from "react";

function Apropos() {
  return (
    <main className="main_apropos">
      <img
        src="photodemontagne"
        alt="vu de l'horizon sur une chaine de montagne"
      />
      <dl id="dispositionApropos">
        <dt className="apropos_liste--titre">Fiabilité</dt>
        <dd className="apropos_liste--paragraphe">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </dd>

        <dt className="apropos_liste--titre">Respect</dt>
        <dd className="apropos_liste--paragraphe">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </dd>

        <dt className="apropos_liste--titre">Service</dt>
        <dd className="apropos_liste--paragraphe">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </dd>

        <dt className="apropos_liste--titre">Responsabilité</dt>
        <dd className="apropos_liste--paragraphe">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </dd>
      </dl>
    </main>
  );
}

export default Apropos;
