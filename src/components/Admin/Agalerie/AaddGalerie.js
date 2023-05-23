import React, { useState,useEffect } from "react";
import axios from "axios";
import "./Agalerie.css";

const AaddGalerie = ({ setForm, getGalerie }) => {
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [categorie,setCategorie] = useState("")

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
      .post("http://localhost:8080/api/v1/galerie", formData)
      .then((response) => {
        setTitle("");
        getGalerie();
        setForm(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <form className="form_galerie" onSubmit={onSubmit}>
      <caption className="title-form-galerie">Ajouter image</caption>
      <div>
        <input
          type="text"
          value={title}
          onChange={changeTitle}
          placeholder="Entrer un titre"
        />
      </div>
      <div>
        <input type="file" onChange={changeImage} />
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
  );
};

export default AaddGalerie;
