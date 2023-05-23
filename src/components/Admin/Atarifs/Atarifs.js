import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Atarifs.css"
import AaddTarifs from "./AaddTarifs";
import AlisteTarifs from "./AlisteTarifs";

const Atarifs = () => {
  const [form, setForm] = useState(false);
  const [tarifs, setTarifs] = useState([]);
  const getTarifs = () => {
    axios
      .get(`http://localhost:8080/api/v1/tarifs`)
      .then((response) => {
        setTarifs(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTarifs();
  }, []);


  return (
    <>
      <button onClick={() => setForm(!form)} type="button" className="btn_add">
        Ajouter images
      </button>
      {form ? <AaddTarifs getTarifs={getTarifs} setForm={setForm} /> : ""}
      <AlisteTarifs
        setForm={setForm}
        tarifs={tarifs}
        getTarifs={getTarifs}
      />
    </>
  );
};

export default Atarifs;
