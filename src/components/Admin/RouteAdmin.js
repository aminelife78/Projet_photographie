import React from 'react'
import { Routes, Route } from "react-router-dom";
import Acategories from './Acategories/Acategories';
import Alayaout from './Alayaout';
import Dashboard from './Dashbord/Dashboard';
import Agalerie from './Agalerie/Agalerie';
import Atarifs from './Atarifs/Atarifs';

const RouteAdmin = () => {
  return (
    <Routes >

      <Route  element={<Alayaout/>} >
      
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Acategories' element={<Acategories />} />
        <Route path='/Agalerie' element={<Agalerie />} />
        <Route path='/Atarifs' element={<Atarifs />} />
      </Route>
    </Routes>
  )
}

export default RouteAdmin
