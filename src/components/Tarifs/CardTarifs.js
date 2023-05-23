import React, { useEffect, useState } from "react";
import "./Tarifs.css";

const CardTarifs = () => {
  const [isloading, setIsloading] = useState(true);
  const [tarifs, setTarifs] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8080/api/v1/tarifs`,
      {
        method: "GET",
        headers: {
          Accept: "Application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setTarifs(response.data);
       
        setIsloading(false);
      });
  }, []);


  return (
    <>
      {!isloading &&
        tarifs.map((tarif, index) => {
          return (
            <article
              key={index}
              className={`tarifs${index} card-container-tarifs`}
            >
              <div className="card-img-tarifs">
                <img
                  className="myImg-tarifs"
                  src={
                    tarif.image_couvert
                  }
                  alt="couple"
                />
              </div>
              <div className="card-body-tarifs">
                <h3>{tarif.title}</h3>
                <p>{tarif.descreption}</p>

                <div className="prix-tarifs">
                  <h4>{tarif.tarif} </h4>
                </div>
              </div>
            </article>
          );
        })}
    </>
  );
};

export default CardTarifs;
