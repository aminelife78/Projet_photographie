import React from "react";
import "./Tarifs.css";

const CardTarifs = ({ img, title, text, prix, index }) => {
  return (
    <article className={`tarifs${index} card-container-tarifs`}>
      <div className="card-img-tarifs">
        <img className="myImg-tarifs" src={img} alt="couple" />
      </div>
      <div className="card-body-tarifs">
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="prix-tarifs">
          <h4>{prix}</h4>
        </div>
      </div>
    </article>
  );
};

export default CardTarifs;
