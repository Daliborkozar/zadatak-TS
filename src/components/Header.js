import React, { useState } from "react";
import Headerpic from "../assets/headerpic.jpg";
import Categories from "../components/Categories";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Header = () => {
  const [showCat, setShowCat] = useState(false);

  return (
    <>
      <div className="header-wrapper">
        <div className="header-content">
          <h1>Food Recipies</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aspernatur distinctio laudantium dolores. Nulla
            quibusdam reprehenderit eum sit minus aliquid!
          </p>
          <button
            className="btn-category"
            onClick={() => setShowCat((prev) => !prev)}
          >
            Categories
            <span className="btn-category__chevron">
              {showCat ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
        </div>
        <div>
          <img className="header-image" src={Headerpic} alt="njami" />
        </div>
      </div>
      {showCat ? <Categories /> : null}
    </>
  );
};

export default Header;
