import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Loader from "./UI/Loader/Loader";
import Card from '../components/UI/Card/Card'

const CATEGORIES = "https://www.themealdb.com/api/json/v1/1/categories.php";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recipeCategory = async () => {
      const { data } = await axios.get(CATEGORIES);
      setCategory(data.categories);
      setLoading(false);
    };

    recipeCategory();
  }, []);

  let loadHndler = null;

  loadHndler = loading ? (
    <Loader />
  ) : (
    category.map(({idCategory,strCategoryThumb,strCategory}) => (
        <Card img={strCategoryThumb} id={idCategory} name={strCategory}/>
      // <div className="card" key={idCategory}>
      //   <img src={strCategoryThumb} alt={strCategory} />
      //   <h3>{strCategory}</h3>
      // </div>
    ))
  );

  return (
    <div className="container">
      <Header />
      <div className="recipe-category">
        {loadHndler}
      </div>
    </div>
  );
};

export default Categories;
