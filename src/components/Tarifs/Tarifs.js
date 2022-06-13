import React from 'react'
import "./Tarifs.css"
import CardTarifs from './CardTarifs'


const Tarifs = () => {
  return (
    <main className='container-tarifs'>
      <h2 className='title'>TARIFS ET PRESTATIONS</h2>
      <div className='separator'></div>
      <div className='content-tarifs'>
        <CardTarifs />
      </div>
    </main>
  )
}

export default Tarifs