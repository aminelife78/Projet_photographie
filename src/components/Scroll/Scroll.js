import React from 'react'
import { FiArrowUp } from 'react-icons/fi';

import "./Scroll.css"



const Scroll = () => {

  
  const scrollTop = ()=>{
    window.scrollTo(
      {
        top:0,
        
      }
    )
  }

  

 

  return (
    <div className='myScroll'>
      <p className='scroll' onClick={scrollTop}>RETOUR EN HAUT <FiArrowUp className='scroll-icon' /></p>
      
    </div>
  )
}

export default Scroll