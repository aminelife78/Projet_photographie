import React from 'react'
import "./Footer.css"
import Logo from "../Logo.svg"
import { FaInstagram, FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <span>©2022 Charles Cantin. All rights reserved.</span>
      <div className='logo'>
      <img src={Logo} alt="logo"  />
      </div>
      
     <div className='social-icones'>
        <FaFacebook />
        <FaInstagram />
     </div>
    
    </footer>
  )
}

export default Footer
