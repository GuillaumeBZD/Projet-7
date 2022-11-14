import React from "react";
import "./dropdown.scss";
import data from "../../ressources/dropdown";

function Dropdown() {
  return (
    <dl className="dispo_apropos">
      {data.map((item) => {
        return (
          <>
            <dt key={item.id} className="apropos_liste--titre">
              {item.title}
            </dt>
            <dd className="apropos_liste--paragraphe">{item.description}</dd>
          </>
        );
      })}
    </dl>
  );
}

export default Dropdown;
