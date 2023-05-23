import React, { useState } from "react";
import axios from "axios";
import "./Atarifs.css";

const AaddTarifs = ({ setForm, getTarifs }) => {
  const [title, setTitle] = useState("");
  const [descreption, setDescreption] = useState("");
  const [tarif, setTarif] = useState("");
  const [image_couvert, setImage_couvert] = useState("");

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
      .post("http://localhost:8080/api/v1/tarifs", formData)
      .then((response) => {
        setTitle("");
        getTarifs();
      })
      .catch((error) => {
        console.log(error);
      });
    setForm(false);
  };

  return (
    <>
      <form className="form_tarifs" onSubmit={onSubmit}>
        <caption className="title-form-tarifs">Ajouter tarifs</caption>
        <div>
          <input
            type="text"
            onChange={changeTitle}
            value={title}
            placeholder="Entrer un titre"
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
        <button type="submit"> Ajouter </button>
      </form>
    </>
  );
};

export default AaddTarifs;
