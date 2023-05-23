import React, { Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import Accueil from './Accueil/Accueil';
import Galerie from './Galerie/Galerie';
import Photo from './Galerie/Photo';
import Tarifs from './Tarifs/Tarifs';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const RoutePublic = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="Galerie" element={<Galerie />} />
        <Route path="Galerie/:photoId" element={<Photo />} />
        <Route path="Tarifs" element={<Tarifs />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default RoutePublic
