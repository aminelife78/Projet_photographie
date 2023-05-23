import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Atarifs.css";

const AupdateTarifs = ({ getTarifs, setUpdateForm, myTarif }) => {
  const [title, setTitle] = useState("");
  const [descreption, setDescreption] = useState("");
  const [tarif, setTarif] = useState("");
  const [image_couvert, setImage_couvert] = useState("");

  useEffect(() => {
    setTitle(myTarif.title);
    setDescreption(myTarif.descreption);
    setTarif(myTarif.tarif);
    setImage_couvert(myTarif.image_couvert);
  }, [
    myTarif.title,
    myTarif.image_couvert,
    myTarif.descreption,
    myTarif.tarif,
  ]);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeDescreption = (e) => {
    setDescreption(e.target.value);
  };
  const changeTarif = (e) => {
    setTarif(e.target.value);
  };
  const changeImage = (e) => {
    setImage_couvert(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image_couvert", image_couvert);
    formData.append("descreption", descreption);
    formData.append("tarif", tarif);
    formData.append("title", title);

    axios
      .put(`http://localhost:8080/api/v1/tarifs/${myTarif.id}`, formData)
      .then((response) => {
        getTarifs();
        setTitle("");
        setUpdateForm(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className="form_tarifs" onSubmit={onSubmit}>
        <caption className="title-form-tarifs">Modifier tarif</caption>
        <div>
          <input
            type="text"
            onChange={changeTitle}
            value={title}
            placeholder="Entrer une title"
          ></input>
        </div>
        <div>
          <input
            type="text"
            onChange={changeDescreption}
            value={descreption}
            placeholder="Entrer une descreption"
          ></input>
        </div>
        <div>
          <input
            type="text"
            onChange={changeTarif}
            value={tarif}
            placeholder="Entrer une tarif"
          ></input>
        </div>
        <div>
          <input type="file" onChange={changeImage}></input>
        </div>
        <button type="submit"> Modifier </button>
      </form>
    </>
  );
};

export default AupdateTarifs;
