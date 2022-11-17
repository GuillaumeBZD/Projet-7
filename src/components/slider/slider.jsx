import React from "react";
import "./slider.scss";
import { useState } from "react";


function Slider(props) {
    //constante pour l'useState et pour recuperer l'ID dans l'URL
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;

    //gestion du suivant / precedent 
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current +1);  
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1);  
    };

    //gestion du cas ou il n'y a pas d'image
    if (!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null;
    }
    return (
    <section className="slider_base">
      <i class="fa-sharp fa-solid fa-chevron-left" onClick={prevSlide}></i>
      <i class="fa-sharp fa-solid fa-chevron-right"onClick={nextSlide}></i>
        {props.slides.map((slide, index) => {
          return (
          <div
          className={index === current ? "slide_active" : "slide"} key={index}>
          {index === current && ( 
          <img src={slide} alt={slide} />
          )}
          </div>
          );
        })}
        <span>{current + 1}/{length}</span>
    </section>
  );
}

export default Slider;
