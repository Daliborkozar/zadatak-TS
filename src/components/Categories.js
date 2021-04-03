import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./UI/Loader/Loader";
import Card from "../components/UI/Card/Card";

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

  loading ? 
  loadHndler = <Loader /> 
  :
    loadHndler = category.map(
      ({ idCategory, strCategoryThumb, strCategory }) => (
        <Card
          route="category"
          key={idCategory}
          img={strCategoryThumb}
          name={strCategory}
        />
      )
    );
  

  return (
    <div className="container">
    
      <div className="recipe-category">{loadHndler}</div>
    </div>
  );
};

export default Categories;
