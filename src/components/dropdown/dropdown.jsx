import React from "react";
import "./dropdown.scss";
import { useState } from "react";

function Dropdown(props) {
  const [opened, setOpened] = useState(false);

  let content = (
    <dd className={`apropos_liste--paragraphe ${opened ? "open" : "close"}`}>
      {props.content}
    </dd>
  );

  // let chevron = (<
  //   className="fa-solid fa-chevron-up"> )
  return (
    <>
      <dt className="apropos_liste--titre">
        {props.title}
        <i
          className="fa-solid fa-chevron-up"
          onClick={() => setOpened(!opened)}
        ></i>
      </dt>

      {content}
    </>
  );
}

export default Dropdown;
