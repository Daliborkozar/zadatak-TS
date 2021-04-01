import React from "react";
import Headerpic from "../assets/headerpic.jpg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <h1>Food Recipies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem aspernatur distinctio laudantium dolores. Nulla
          quibusdam reprehenderit eum sit minus aliquid!
        </p>
        <button className="btn-category">Categories</button>
      </div>
      <div>
        <img className="header-image" src={Headerpic} alt="njami" />
      </div>
      
    </div>
  );
};

export default Header;
