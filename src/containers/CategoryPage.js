import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/UI/Card/Card";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const SEARCH_RECIPE = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const CategoryPage = (s) => {
  const { cat } = useParams();
  const [recipeList, setRecipeList] = useState([]);
  const [recommended, setRecommended] = useState({});
  const [search, setSearch] = useState("");
 

  useEffect(() => {
    const recipies = async () => {
      const { data } = await axios.get(SEARCH_RECIPE + cat);
      setRecipeList(data.meals);
      setRecommended(data.meals[Math.floor(Math.random() * data.meals.length)]);
    };
    recipies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recomMeal = () => {
    const { strMeal, strMealThumb, idMeal } = recommended;
    return <Card route="meal" name={strMeal} img={strMealThumb} id={idMeal} />;
  };
  //TODO Debouncing/throttling if time
  const filterHandler = () => {
    return recipeList
      .filter((item) => {
        return item.strMeal.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })
      .map((item) => (
        <Card
          key={item.idMeal}
          route="meal"
          name={item.strMeal}
          img={item.strMealThumb}
          id={item.idMeal}
        />
      ));
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="recommendation-container">
        <div className="recomendation-wrapper">
          <h1>{cat}</h1>
          <h3>Our recommendation</h3>
          {recomMeal()}
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
      <div className="meal-list">{filterHandler()}</div>
    </div>
  );
};

export default CategoryPage;
