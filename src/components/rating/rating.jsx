import React from "react";
import "./rating.scss";


function Rating (props) {
    //creer un tableau
    let array = new Array(props.total);

    //pour remplir le tableau qui est vide pour avoir une key unique pour le map
    for(let i = 0; i < array.length; i++) {
        array[i] = i;
    }
    //Iteration des etoiles en fonction de leur valeur
    const stars = array.map(x => {
        return (<i key={x} className={`fas fa-star ${x < props.starValue ? 'active' : 'inactive'}`}></i>);
    });
    return (
        <div className="rating_box">
            {stars}
        </div>
    );
}

export default Rating