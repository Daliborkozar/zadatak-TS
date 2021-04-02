import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/UI/Loader/Loader";
import Card from "../components/UI/Card/Card";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const SEARCH_RECIPE = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const CategoryPage = (props) => {
  const { cat } = useParams();
  const [loading, setLoading] = useState(true);
  const [recipeList, setRecipeList] = useState([]);
  const [recommended, setRecommended] = useState({});

  const [search, setSearch] = useState("");

  useEffect(() => {
    const recipies = async () => {
      const { data } = await axios.get(SEARCH_RECIPE + cat);
      setRecipeList(data.meals);
      console.log(data.meals);
      setRecommended(data.meals[Math.floor(Math.random() * data.meals.length)]);

      setLoading(false);
    };
    recipies();
  }, []);

  const { strMeal, strMealThumb, idMeal } = recommended;

  let recom = recommended ? (
    <Card route="meal" name={strMeal} img={strMealThumb} id={idMeal} />
  ) : (
    <Loader />
  );

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  //

  let mealList = null;

  loading ? (
    <Loader />
  ) : (
    (mealList = recipeList.map(({ strMeal, strMealThumb, idMeal }) => (
      <Card
        route="meal"
        key={idMeal}
        img={strMealThumb}
        id={idMeal}
        name={strMeal}
      />
    )))
  );

  return (
    <div>
      <div className="recommendation-container">
        <div className="recomendation-wrapper">
          <h1>{cat}</h1>
          <h3>Our recommendation</h3>
          {recom}
        </div>
        <div className="form-wrapper">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={searchHandler}
          />
          <span className="search-icon">
            <FaSearch />
          </span>
        </div>
      </div>
      <div className="meal-list">{mealList}</div>
    </div>
  );
};

export default CategoryPage;
