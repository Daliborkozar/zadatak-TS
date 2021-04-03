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
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [status,setStatus]= useState(false)

  console.log(status)

  const users = [
    { id:'1',
      username: 'dalibor',
      password: '123456'
    },
    { id:'2',
      username: 'milan',
      password: '123456'
    },
  ]

  const userCheck = () => {
    return users.filter(item => userName === users.username || password === users.password)
  }

  const onLoggingHandler = (e) => {
    e.preventDefault()
   if(userCheck){
     setStatus(true)
     setShow(false)
     setUserName('')
     setPassword('')
   }

  }

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
            <form className="tooltip-form" onSubmit={onLoggingHandler}>
              <input
                className="tooltip-input"
                type="text"
                placeholder="Username"
                value={userName}  
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                className="tooltip-input"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="tooltip-button">Login</button>
            </form>
          ) : null}

          <FaRegUserCircle size={40} onClick={() => setShow((prev) => !prev)} />
        </div>
        <div className="hamburger" onClick={()=> setMenuShow(prev => !prev)}>
          {menuShow ? <FaTimes size={30}/> : <FaBars size={30} />}
        </div>
        <div className={`navbar-wrapper ${menuShow ? 'active' : null }`} onClick={()=> setMenuShow(prev => !prev)} >
          <ul className="navbar-list" >
            {location.pathname === "/" ? null : (
              <Link to="/">
                <li className="navbar-list__item">Home</li>
              </Link>
            )}
            {status ?  (
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
