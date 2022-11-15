import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

function Card (props) {
  return (   
    <>  
        <li className="carte_li">
            <Link to={`/logements/${props.id}`} className="lien_carte"  key={props.id}>
                <img 
                src={props.cover} alt={props.title} className="carte_img"/>
                <h4 className="carte_titre">{props.title}</h4>
            </Link>
            </li>
    </> 
  );
  }
export default Card;
