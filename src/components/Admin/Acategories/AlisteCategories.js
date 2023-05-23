import React, { useState } from "react";
import Buttons from "../../Global/Buttons";
import axios from "axios";
import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import AupdateCategories from "./AupdateCategories";

const AlisteCategories = ({ categories, getCategories,setForm }) => {
  const [updateForm, setUpdateForm] = useState(false);
  const [categorie, setCategorie] = useState({title:"",image_couvert:""})

  // suprimer une image de la galerie
  const deleteImage = (index) => {
    axios
      .delete(`http://localhost:8080/api/v1/categories/${index}`)
      .then((response) => {
        getCategories();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateForms = (index) => {
    setUpdateForm(true);
    setForm(false)
    axios
      .get(`http://localhost:8080/api/v1/categories/${index}`)
      .then((response) => {
       setCategorie(response.data.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <>
    {updateForm? <AupdateCategories setUpdateForm={setUpdateForm}  getCategories={getCategories} categorie={categorie} /> : ""}
   
    <div className="conteiner-categories">
      <table id="categories">
        <tr>
          <th>Id</th>
          <th>Titre</th>
          <th>Image</th>
          <th>Modifier</th>
          <th>Suprimer</th>
        </tr>
        {categories &&
          categories.map((categorie) => {
            return (
              <tr key={categorie.id}>
                <td>{categorie.id}</td>
                <td>{categorie.title}</td>
                <td>
                  <img
                    width="40"
                    height="40"
                    src={categorie.image_couvert}
                    alt="img-categorie"
                  />
                </td>
                <td>
                  <Buttons
                    handleBtn={updateForms}
                    color="light"
                    idx={categorie.id}
                  >
                    <BsPencilSquare />
                  </Buttons>
                </td>
                <td>
                  <Buttons
                    handleBtn={deleteImage}
                    idx={categorie.id}
                    color="primary"
                  >
                    <BsTrashFill />
                  </Buttons>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
    </>
  );
};

export default AlisteCategories;
