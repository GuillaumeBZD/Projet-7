import React from "react";
import "./apropos.scss";
import image from "../../images/backApr.png";
import Dropdown from "../../components/dropdown/dropdown";



function Apropos() {
  return (
    <main className="main_apropos">
      <img src={image} alt="vu de l'horizon sur une chaine de montagne" className="img_apropos" />
      <Dropdown />
    </main>
  );
}

export default Apropos;
