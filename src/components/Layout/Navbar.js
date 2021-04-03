import React, { useState } from "react";
import { FaRegUserCircle, FaSearch, FaBars,FaTimes } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [menuShow, setMenuShow] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${search}`);
    setSearch("");
    setShow(!show)
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar__searchbox">
        <form className="navbar-form" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search recipe.."
            value={search}
            onChange={onSearchChange}
          />
          <span className="navbar-form__icon">
            <FaSearch size={20} />
          </span>
        </form>
      </div>
      <div className="navbar__right">
        <div className="tooltip">
          {show ? (
            <form className="tooltip-form">
              <input
                className="tooltip-input"
                type="text"
                placeholder="Username"
              />
              <input
                className="tooltip-input"
                type="text"
                placeholder="Password"
              />
              <button className="tooltip-button">Login</button>
            </form>
          ) : null}

          <FaRegUserCircle size={40} onClick={() => setShow((prev) => !prev)} />
        </div>
        <div className="hamburger" onClick={()=> setMenuShow(prev => !prev)}>
          {menuShow ? <FaTimes size={30}/> : <FaBars size={30} />}
        </div>
        <div className={`navbar-wrapper ${menuShow ? 'active' : null }`}>
          <ul className="navbar-list" onClick={()=> setMenuShow(prev => !prev)}>
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
      </div>
    </nav>
  );
};

export default Navbar;
