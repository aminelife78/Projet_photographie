import React,{Fragment} from 'react'
import "./Tarifs.css"
import CardTarifs from './CardTarifs'
import { card_Tarifs } from '../Data/Data'

const Tarifs = () => {
  return (
    <main className='container-tarifs'>
      <h2 className='title'>TARIFS ET PRESTATIONS</h2>
      <div className='separator'></div>
      <div className='content-tarifs'>
        {
          card_Tarifs.map((data,index)=>{
          
          return (
            <Fragment key={index}>
              <CardTarifs    img={data.image} title={data.title} text={data.text} prix={data.prix} index={index} />
            </Fragment>
            )
        })
      }
        
      </div>
    
    </main>
  )
}

export default Tarifs