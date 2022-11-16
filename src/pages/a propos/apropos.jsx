import React from "react";
import "./apropos.scss";
import image from "../../images/backApr.png";
import Dropdown from "../../components/dropdown/dropdown";
import data from "../../data/dropdown";

function Apropos() {
  const dropdowns = data.map((item) => {
    return (
      <Dropdown key={item.id} title={item.title} content={item.description} />
    );
  });

  return (
    <main className="main_apropos">
      <img
        src={image}
        alt="vu de l'horizon sur une chaine de montagne"
        className="img_apropos"
      />
      <dl className="dispo_apropos">{dropdowns}</dl>
    </main>
  );
}

export default Apropos;
