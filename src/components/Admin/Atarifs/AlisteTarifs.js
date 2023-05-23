import React, { useState } from "react";
import Buttons from "../../Global/Buttons";
import axios from "axios";
import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import AupdateTarifs from "./AupdateTarifs";

const AlisteTarifs = ({ tarifs, getTarifs,setForm }) => {
  const [updateForm, setUpdateForm] = useState(false);
  const [tarif, setTarif] = useState({title:"",image_couvert:"",descreption:"",tarif:""})

  // suprimer une image de la galerie
  const deleteImage = (index) => {
    axios
      .delete(`http://localhost:8080/api/v1/tarifs/${index}`)
      .then((response) => {
        getTarifs();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateForms = (index) => {
    setUpdateForm(true);
    setForm(false)
    axios
      .get(`http://localhost:8080/api/v1/tarifs/${index}`)
      .then((response) => {
       setTarif(response.data.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <>
    {updateForm? <AupdateTarifs setUpdateForm={setUpdateForm}  getTarifs={getTarifs} myTarif={tarif} /> : ""}

    <div className="conteiner-categories">
      <table id="categories">
        <tr>
          <th>Id</th>
          <th>Titre</th>
          <th>Tarif</th>
          <th>Descreption</th>
          <th>Image</th>
          <th>Modifier</th>
          <th>Suprimer</th>
        </tr>
        {tarifs &&
          tarifs.map((tarif) => {
            return (
              <tr key={tarif.id}>
                <td>{tarif.id}</td>
                <td>{tarif.title}</td>
                <td>{tarif.descreption}</td>
                <td>{tarif.tarif}</td>
                <td>
                  <img
                    width="40"
                    height="40"
                    src={tarif.image_couvert}
                    alt="img-categorie"
                  />
                </td>
                <td>
                  <Buttons
                    handleBtn={updateForms}
                    color="light"
                    idx={tarif.id}
                  >
                    <BsPencilSquare />
                  </Buttons>
                </td>
                <td>
                  <Buttons
                    handleBtn={deleteImage}
                    idx={tarif.id}
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

export default AlisteTarifs;
