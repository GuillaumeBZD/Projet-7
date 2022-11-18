import React from "react";
import "./logements.scss";
import data from "../../data/logements.json";
import TagList from "../../components/tag/tag";
import Slider from "../../components/slider/slider";
import Dropdown from "../../components/dropdown/dropdown";
import { useParams, Navigate } from "react-router-dom";

function Logements() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  if (!logement) return <Navigate to="/error" />;

  const listeEquipement = logement.equipments.map((item) => {
    return (
      
    <span className="equipments_item">{item}<br/></span>
    )
  });

  return (
    <main className="main_loc">
      <Slider slides={logement.pictures} />
      <article className="location_info">
        <h2 className="location_titre">{logement.title}</h2>
        <span className="location_lieu">{logement.location}</span>
        <TagList items={logement.tags} />
        <div className="location_review">
          <span className="location_review--etoile">
            <i class="fas fa-star colored"></i>
            <i class="fas fa-star"></i>
          </span>
          <div className="location_review--client">
            <span className="host_name">{logement.host.name}</span>
            <img
              className="host_picture"
              src={logement.host.picture}
              alt="portrait de l'hébergant"
            />
          </div>
        </div>
        
        <dl className="location_info--liste">
          <div className="location_info--liste--box"><Dropdown title="Description" content={logement.description} /></div>
          <div className="location_info--liste--box">
            <Dropdown
            title="Équipements"
            content={listeEquipement}
          /></div>
        </dl>
      </article>
    </main>
  );
}

export default Logements;
