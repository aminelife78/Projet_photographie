import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Acategories.css";

const AupdateCategories = ({ getCategories, setUpdateForm, categorie }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setTitle(categorie.title);
    setImage(categorie.image_couvert);
  }, [categorie.title, categorie.image_couvert]);

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
      .put(`http://localhost:8080/api/v1/categories/${categorie.id}`, formData)
      .then((response) => {
        getCategories();
        setTitle("");
        setUpdateForm(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className="form_categories" onSubmit={onSubmit}>
      <caption className="title-form-categories">Modifier categorie</caption>
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

export default AupdateCategories;
