import React,{Fragment} from 'react'
import GalerieArticle from './GalerieArticle'

import {card_galerie} from "../Data/Data"
import "./Galerie.css"
import { useNavigate } from 'react-router-dom'

const Galerie = () => {
const navigate = useNavigate()




  const showIndex = (titre)=>{
    navigate(`/Galerie/${titre.toLowerCase()}`)
  }

  
  
  return (
   <main className='container'>
    <h2 className='title'>GALERIE</h2>
    <div className='separator'></div>
    <div className='body-container'>
    <div className='contents' >
      {
        card_galerie.map((data,index)=>{
          
          return (
            <Fragment key={index}>
              <GalerieArticle show={()=>showIndex(data.title)}   img={data.image} title={data.title} index={index} />
            </Fragment>
            )
        })
      }
    </div>
    </div>

   
   </main>
  )
}

export default Galerie
