import React, { useState } from "react";
import axios from "axios";
import "./Acategories.css";

const AaddCategorie = ({ setForm, getCategories }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);

    axios
      .post("http://localhost:8080/api/v1/categories", formData)
      .then((response) => {
        setTitle("");
        getCategories();
      })
      .catch((error) => {
        console.log(error);
      });
    setForm(false);
  };

  return (
    <>
      <form className="form_categories" onSubmit={onSubmit}>
        <caption className="title-form-categories">Ajouter categorie</caption>
        <div>
          <input
            type="text"
            onChange={changeTitle}
            value={title}
            placeholder="Entrer une categorie"
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

export default AaddCategorie;
