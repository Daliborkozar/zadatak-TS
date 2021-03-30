import React from "react";
import Aboutus from "../components/Aboutus";
import Contact from "../components/Contact";
import Categories from "../components/Categories";


const HomePage = () => {
  return (
    <div>
      <Categories />
      <Aboutus />
      <Contact />
    </div>
  );
};

export default HomePage;
