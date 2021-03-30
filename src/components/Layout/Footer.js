import React from "react";
import logo from '../../assets/food-lover-logo.svg'
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    let year = new Date().getFullYear()
  return (
    <div className="footer">
      <div className='footer__container'>
        <img className='footer__image' src={logo} alt='footerimage' />
        <div>
          <FaFacebookF size={25}/>
          <FaInstagram size={25}/>
        </div>
      </div>
      <p className='footer-text'>Challenge by <a href='https://www.thinksmart.rs/'>Think Smart</a> Coded by Dalibor Kozar {year} </p>
    </div>
  );
};

export default Footer;
