import React from "react";
import "./card.scss";
import data from  "../../ressources/logements.json"
import { Link } from "react-router-dom";

function Card () {
return (
    <ul className="dispo_accueil">
        {data.map((item) => {
        return (
        <li className="carte_li">
            <Link to={`/accueil/${item.id}`} className="lien_carte"  key={item.id}>
                <img 
                src={item.cover} alt={item.title} className="carte_img"/>
                <h4 className="carte_titre">{item.title}</h4>
            </Link>
            </li>
        );
        })}
    </ul>
);
}
export default Card;
