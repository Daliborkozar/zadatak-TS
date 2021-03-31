import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__searchbox">
        <form>
          <input type="text" placeholder="Search recipe.." />
        </form>
      </div>
      <div className="navbar__right">
        <FaRegUserCircle size={40}/>
        <ul className='navbar-list'>
          <li className='navbar-list__item'>About us</li>
          <li className='navbar-list__item'>Contact</li>
          
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
