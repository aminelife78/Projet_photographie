import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"
import Logo from "../Logo.svg"
import { FaInstagram, FaFacebook} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <span>©2022 Charles Cantin. All rights reserved.</span>
      <div className='logos'>
      <Link to="/"><img  src={Logo} alt="logo" /></Link>
      </div>
      
     <div className='social-icones'>
     <a href='http://facebook.com'><FaFacebook /></a>
     <a href='http://instagrame.com'><FaInstagram /></a>
     </div>
    
    </footer>
  )
}

export default Footer
