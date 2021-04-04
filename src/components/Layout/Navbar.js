import React, { useState } from "react";
import { FaRegUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";


const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [menuShow, setMenuShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)

  const users = [
    { id: "1", username: "dalibor", password: "123456" },
    { id: "2", username: "user2", password: "654321" },
  ];

  const checkedUser = () => {
    const filtered = users.find(
      (user) => userName === user.username && password === user.password
    );
    return typeof filtered === "object" ? true : false;
  };

  const userHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onLoggingHandler = (e) => {
    e.preventDefault();
    if (checkedUser()) {
      setStatus(true);
      setShow(false);
      setPassword("");
      setUserName("");
      setErrorMessage(false)
    } else setErrorMessage(true)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${search}`);
    setSearch("");
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
            <form className="tooltip-form" onSubmit={onLoggingHandler}>
              <input
                className="tooltip-input"
                type="text"
                placeholder="Username"
                value={userName}
                onChange={userHandler}
                required
              />
              <input
                className="tooltip-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={passwordHandler}
                required
              />
              {errorMessage ? <p style={{color: 'red'}}>Invalid Username or Password</p> : null}
              <button className="tooltip-button" type="submit">
                Login
              </button>
            </form>
          ) : null}

          <FaRegUserCircle size={40} onClick={() => setShow((prev) => !prev)} />
        </div>
        <span
          className="hamburger"
          onClick={() => setMenuShow((prev) => !prev)}
        >
          {menuShow ? <FaTimes size={30} /> : <FaBars size={30} />}
        </span>
        <div className={`navbar-wrapper ${menuShow ? "active" : null}`}>
          <ul
            className="navbar-list"
            
          >
            {location.pathname === "/" ? null : (
              <Link to="/">
                <li className="navbar-list__item">Home</li>
              </Link>
            )}
            {status ? (
              <Link to={`/mymeal/`}>
                <li className="navbar-list__item">My meals</li>
              </Link>
            ) : null}

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
