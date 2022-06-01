import React from 'react'
import { FaScroll } from 'react-icons/fa';

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
      <FaScroll  className='scroll' onClick={scrollTop}/>
    </div>
  )
}

export default Scroll