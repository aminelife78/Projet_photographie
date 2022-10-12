import React, {memo} from 'react'

import "./Galerie.css"


const GalerieArticle = ({img,title,index,show}) => {

 
  console.log("je suis dans galerie article")
  return (
 
      <article onClick={show} className= {`article${index} card-galerie`}  >
      
        <div className='card-container'>
          <div className='card-img'>
            <img className='myImg' src={img} alt="couple" />
          </div>
          <div className='card-title'>
            <h3>{title}</h3>
          </div>
        </div>
      </article>
   
  )
}

export default memo(GalerieArticle)
