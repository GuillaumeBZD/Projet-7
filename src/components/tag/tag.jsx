import React from "react";
import "./tag.scss";

function TagList(props) {
  return (
    <ul className="tag_list">
      {props.items.map((tag) => (
        <li className="tag" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
