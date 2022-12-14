import React from "react";
import "./slider.scss";
import { useState } from "react";

function Slider(props) {
  //constante pour l'useState
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  //gestion du suivant / precedent
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //gestion du cas ou il n'y a pas d'image
  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider_base">
      <div
        className="arrow_position"
        style={{ display: length > 1 ? "flex" : "none" }}
      >
        <i className="fa-regular fa-chevron-left" onClick={prevSlide}></i>
        <i
          className="fa-sharp fa-solid fa-chevron-right"
          onClick={nextSlide}
        ></i>
      </div>
      {props.slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide_active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                className="slider_image"
                src={slide}
                alt="intérieur du logement à louer"
              />
            )}
          </div>
        );
      })}
      <span className="count_image">
        {current + 1}/{length}
      </span>
    </section>
  );
}

export default Slider;
