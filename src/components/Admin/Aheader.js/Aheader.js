import React from "react";
import { NavLink } from "react-router-dom";
import "./Aheader.css"

const Aheader = () => {
  const logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
    
    <div className="sidebar">
    
      <NavLink to="/admin/dashboard">Home</NavLink>
      <NavLink to="/admin/Acategories">Categories</NavLink>
      <NavLink to="/admin/Agalerie">Galerie</NavLink>
      <NavLink to="/admin/Atarifs">Tarifs_Prestations</NavLink>
  
      <NavLink onClick={logout} className="logout" to="/">
        Deconnexion
      </NavLink>
    </div>
    </>
  );
};

export default Aheader;
