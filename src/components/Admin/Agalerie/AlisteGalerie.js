import React, { useState } from "react";
import Buttons from "../../Global/Buttons";
import axios from "axios";
import { BsTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import AupdateGalerie from "./AupdateGalerie";
import "./Agalerie.css";

const AlisteGalerie = ({ galerie, getGalerie, setForm }) => {
  const [updateForm, setUpdateForm] = useState(false);
  const [selectedGalerie, setSelectedGalerie] = useState({ title: "", image: "" });
console.log(selectedGalerie)
  // supprimer une image de la galerie
  const deleteImage = (index) => {
    axios
      .delete(`http://localhost:8080/api/v1/galerie/${index}`)
      .then((response) => {
        getGalerie();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateFormHandler = (index) => {
    setUpdateForm(true);
    setForm(false);
    axios
      .get(`http://localhost:8080/api/v1/galerie/${index}`)
      .then((response) => {
        setSelectedGalerie(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {updateForm ? (
        <AupdateGalerie
          setUpdateForm={setUpdateForm}
          getGalerie={getGalerie}
          galery={selectedGalerie}
        />
      ) : (
        ""
      )}

      <div className="container-galerie">
        <table id="galerie">
          <thead>
            <tr>
              <th>Id</th>
              <th>Titre</th>
              <th>Image</th>
              <th>categorie</th>
              <th>Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {galerie &&
              galerie.map((galery) => {
                return (
                  <tr key={galery.id}>
                    <td>{galery.id}</td>
                    <td>{galery.title}</td>
                    
                    <td>
                      <img
                        width="40"
                        height="40"
                        src={galery.image}
                        alt="img-galery"
                      />
                    </td>
                    <td>{galery.title_categorie}</td>
                    <td>
                      <Buttons
                        handleBtn={updateFormHandler}
                        color="light"
                        idx={galery.id}
                      >
                        <BsPencilSquare />
                      </Buttons>
                    </td>
                    <td>
                      <Buttons
                        handleBtn={deleteImage}
                        idx={galery.id}
                        color="primary"
                      >
                        <BsTrashFill />
                      </Buttons>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AlisteGalerie
