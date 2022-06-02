import React, {useState,useEffect} from 'react'
import {NavLink,Link } from 'react-router-dom'
import Logo from "../Logo.svg"
import { FaInstagram, FaFacebook} from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import "./Header.css"


const Header = () => {
  
  const [screenWith, setScreenWith] = useState(window.innerWidth)
  const [showBtnMenu, setShowBtnMenu] = useState(false)



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
    <header>
      <div className='logos'>
        <Link to="/"><img  src={Logo} alt="logo" /></Link>
        {screenWith < 900 && <FaBars onClick={()=>setShowBtnMenu(!showBtnMenu)}  className='btn-menu' />}
      </div>
      
      {(showBtnMenu || screenWith > 900) && (<ul>
        <li><NavLink className='lien'  to="/">Accueil</NavLink></li>
        <li><NavLink className='lien' to="Galerie">Galerie</NavLink></li>
        <li><NavLink className='lien' to="Tarifs">Tarifs et Prestations</NavLink></li>
        <li><NavLink className='lien' to="Contact">Contact</NavLink></li>
      </ul>)}
      {screenWith > 900 && <div className='social-icones'>
        <a href='http://facebook.com'><FaFacebook /></a>
        <a href='http://instagrame.com'><FaInstagram /></a>
    </div>}
   
    </header>
  )
}

export default Header