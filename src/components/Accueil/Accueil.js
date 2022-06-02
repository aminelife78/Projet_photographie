import React,{useEffect,useState} from 'react'
import "./Accueil.css"

const Accueil = () => {
  const [screenWith, setScreenWith] = useState(window.innerWidth)
  



  useEffect( ()=>{
  
    const changeScreenSize = ()=>{
     setScreenWith(window.innerWidth)
   }
   
   window.addEventListener("resize",changeScreenSize)
   
   return ()=>{
     window.removeEventListener("resize",changeScreenSize)
   }
 },[])
  return (

    <main>
      <div className='img'>
        <div className='filter'></div>
      </div>
      {screenWith > 900? <h1>Charles Cantin - Photographe</h1> : <h1 className='titleSize'>Charles Cantin <br /> <hr /> <span>Photographe</span></h1>  }
      
      
    </main>
    
  )
}

export default Accueil