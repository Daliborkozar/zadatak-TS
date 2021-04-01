import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header className="navbar">
      <div className="navbar__searchbox">
        <form>
          <input
            type="text"
            placeholder="Search recipe.."
            onSubmit={submitHandler}
          />
        </form>
      </div>
      <div className="navbar__right">
        <FaRegUserCircle size={40} />
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
