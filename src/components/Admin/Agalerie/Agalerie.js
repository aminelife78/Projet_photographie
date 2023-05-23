import React, { useState, useEffect } from "react";
import AaddGalerie from "./AaddGalerie";
import "./Agalerie.css";
import axios from "axios";
import AlisteGalerie from "./AlisteGalerie";

const AGalerie = () => {
  const [form, setForm] = useState(false);
  const [galerie, setGalerie] = useState([]);
  const getGalerie = () => {
    axios
      .get(`http://localhost:8080/api/v1/galerie`)
      .then((response) => {
        setGalerie(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGalerie();
  }, []);
  return (
    <>
      <button onClick={() => setForm(!form)} type="button" className="btn_add">
        Ajouter images
      </button>
      {form ? <AaddGalerie getGalerie={getGalerie} setForm={setForm} /> : ""}
      <AlisteGalerie
        setForm={setForm}
        galerie={galerie}
        getGalerie={getGalerie}
      />
    </>
  );
};

export default AGalerie;
