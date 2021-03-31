import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/UI/Loader/Loader";
import Card from "../components/UI/Card/Card";
import axios from "axios";

const SEARCH_RECIPE = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const CategoryPage = (props) => {
  const { cat } = useParams();

  const [loading, setLoading] = useState(true);
  const [recipeList, setRecipeList] = useState([]);
  const [recommended, setRecommended] = useState({});

  useEffect(() => {
    const recipies = async () => {
      const { data } = await axios.get(SEARCH_RECIPE + cat);
      setRecipeList(data.meals);
      setRecommended(data.meals[Math.floor(Math.random() * data.meals.length)]);
      setLoading(false);
    };

    recipies();
  }, [cat]);

  const { strMeal, strMealThumb, idMeal } = recommended;

  let recom = recommended ? (
    <Card route="meal" name={strMeal} img={strMealThumb} id={idMeal} />
  ) : (
    <Loader />
  );

    const handleSearch = (e) => {
       

    }

  let mealList = null;

  mealList = loading ? (
    <Loader />
  ) : (
    recipeList.map(({ strMeal, strMealThumb, idMeal }) => (
      <Card
        route="meal"
        key={idMeal}
        img={strMealThumb}
        id={idMeal}
        name={strMeal}
      />
    ))
  );

  return (
    <div>
      <div className="recommendation-header">
        <div>
          <h1>{cat}</h1>
          <p>Our recommendation</p>
          {recom}
        </div>
        <div>
          <input type="text" placeholder="Search..."  onChange={handleSearch}/>
        </div>
      </div>
      <div className="meal-list">{mealList}</div>
    </div>
  );
};

export default CategoryPage;
