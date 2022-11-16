import React from "react";
import "./tag.scss";
import { useParams } from "react-router-dom";
import data from "../../data/logements.json";

function Tag() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  return (
    <ul className="tag_list">
      {logement.tags.map((tag) => (
        <li className="tag" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tag;
