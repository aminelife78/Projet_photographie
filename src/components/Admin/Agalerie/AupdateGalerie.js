import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Agalerie.css";

const AupdateGalerie = ({ getGalerie, setUpdateForm, galery }) => {
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [categorie,setCategorie] = useState("")

  useEffect(() => {
    setTitle(galery.title);
    setImage(galery.image);
  }, [galery.title, galery.image]);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeImage = (e) => {
    setImage(e.target.files[0]);
  };
  const changeCategorie = (e)=>{
    setCategorie(e.target.value)
  }
  const getCategories = ()=>{
    axios.get(`http://localhost:8080/api/v1/categories`).then(response=>{
      setCategories(response.data.data)
    }).catch(err=>console.log(err))
  }

  useEffect(() => {
   getCategories()
  
  }, [])
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("categorie_id", categorie);


    axios
      .put(`http://localhost:8080/api/v1/galerie/${galery.id}`, formData)
      .then((response) => {
        getGalerie();
        setTitle("");
        setUpdateForm(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className="form_galerie" onSubmit={onSubmit}>
      <caption className="title-form-galerie">Modifier image</caption>
        <div>
          <input
            type="text"
            onChange={changeTitle}
            value={title}
            placeholder="Entrer une image"
          ></input>
        </div>
        <div>
          <input type="file" onChange={changeImage}></input>
        </div>
        <div>
        <select on onChange={changeCategorie} id="categories" name="categories" form="categoriesForm">
        <option value="">Choisi categorie</option>
        { categories && categories.map(categorie=>{
          return (
            
            <option value={categorie.id}>{categorie.title}</option>
          )
        })}
         
        </select>
        </div>
        <button type="submit"> Ajouter </button>
      </form>
    </>
  );
};

export default AupdateGalerie;
