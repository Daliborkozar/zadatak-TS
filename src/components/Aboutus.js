import React from "react";
import aboutimg from "../assets/aboutus.jpg";

const Aboutus = () => {
  return (
    <div className="aboutus-wrapper">
      <div className="aboutus-content">
        <div>
        <h2>About us</h2>
        </div>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage.
        </p>
      </div>
      <img className="aboutus-image" src={aboutimg} alt="aboutus" />
    </div>
  );
};

export default Aboutus;
