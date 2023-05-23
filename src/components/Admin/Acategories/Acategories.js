import React, { useState,useEffect } from "react";
import "./Acategories.css";
import AaddCategorie from "./AaddCategorie";
import axios from "axios";
import AlisteCategories from "./AlisteCategories";


const Acategories = () => {
  const [form, setForm] = useState(false);
  const [categories, setCategories] = useState([])
  const getCategories = ()=>{
    axios.get(`http://localhost:8080/api/v1/categories`).then(response=>{
      setCategories(response.data.data)
    }).catch(err=>console.log(err))
  }

  useEffect(() => {
   getCategories()
  
  }, [])
  return (
    <>
    
      <button onClick={() => setForm(!form)} type="button" className="btn_add">
        Ajouter Categorie
      </button>
      {form? <AaddCategorie getCategories={getCategories} setForm={setForm}/> : ""}
      <AlisteCategories  setForm={setForm} categories={categories} getCategories={getCategories}/>
    

    </>
  );
};

export default Acategories;
