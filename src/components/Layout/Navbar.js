import React, { useState } from "react";
import { FaRegUserCircle,FaSearch, FaBars } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const [show,setShow] = useState(false)
  const [search, setSearch] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${search}`)
    setSearch('')
  };
  
  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <header className="navbar">
      <div className="navbar__searchbox">
        <form className='navbar-form' onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search recipe.."
            value={search}
            onChange={onSearchChange}
          />
          <span className='navbar-form__icon'><FaSearch size={20}/></span>
        </form>
      </div>
      <div className="navbar__right">
        <div className='hamburger'>
          <FaBars />
        </div>
       
        <div className='tooltip'>
        {show ? (<form className='tooltip-form' >
            <input className='tooltip-input' type='text' placeholder="Username"/>
            <input className='tooltip-input' type='text' placeholder='Password'/>
            <button className='tooltip-button'>Login</button>
          </form>) : null}
          
        <FaRegUserCircle size={40} onClick={() => setShow(prev => !prev)} />
        </div>
        <ul className="navbar-list">
          {location.pathname === "/" ? null : (
            <Link to="/">
              <li className="navbar-list__item">Home</li>
            </Link>
          )}
          <Link to="/">
            <li className="navbar-list__item">About us</li>
          </Link>
          <Link to="/">
            <li className="navbar-list__item">Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
