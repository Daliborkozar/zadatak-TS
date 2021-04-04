import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Card from "../components/UI/Card/Card";

const SINGLE_MEAL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const SAME_CAT_MEALS = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const SingleMealPage = (props) => {
  const params = useParams();
  const [meal, setMeal] = useState({ strCategory: "Dessert" });
  const [similarList, setSimilarList] = useState([]);
 
  useEffect(() => {
    const single = async () => {
      const { data } = await axios.get(SINGLE_MEAL + params.id);
      console.log(data.meals[0]);
      setMeal(data.meals[0]);
    };
    single();

    const meals = async () => {
      const { data } = await axios.get(SAME_CAT_MEALS + `${meal.strCategory}`);
      setSimilarList(data.meals);
    };
    meals();
  }, [meal.strCategory, params.id]);

  // prvo resenje
  // let ingredients = [];
  // for (const [ingr, val] of Object.entries(meal)) {
  //   if (val !== "" && ingr.includes("strIngredient")) {
  //     let ingred = { ingr, val };
  //     ingredients.push(ingred);
  //   }
  // }

  // let measures = [];
  // for (const [mes, val] of Object.entries(meal)) {
  //   if (val !== "" && mes.includes("strMeasure")) {
  //     let meas = { mes, val };
  //     measures.push(meas);
  //   }
  // }

  //Resenje br2 nije najsrecnije resenje TODO - efikasnije resenje
  const recipeData = (list, word) => {
    const result = Object.entries(list).filter(
      ([key, value]) => value !== "" && key.includes(word)
    );

    return result.map((item, i) => <li key={i}>{item[1]}</li>);
  };

  const similar = () => {
    return similarList
      .sort(() => Math.random() - Math.random())
      .slice(0, 3)
      .map(({ strMeal, strMealThumb, idMeal }) => (
        <Card
          key={idMeal}
          route="meal"
          name={strMeal}
          img={strMealThumb}
          id={idMeal}
        />
      ));
  };

  return (
    <div>
      <div className="single-container">
        <div className="single-header">
          <div className="single-img-wrapper">
            <img
              className="single-img"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>
          <div className="single-header__right">
            <h4>
              <strong>Category:</strong> {meal.strCategory}
            </h4>
            <h4>
              <strong>Country:</strong> {meal.strArea}
            </h4>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
        <div className="ingredient-list">
          <div className="ingredient-list__wrapper">
            <h4>Igredients</h4>
            <ol>{recipeData(meal, "strIngredient")}</ol>
          </div>
          <div className="ingredient-list__wrapper">
            <h4>Measures</h4>
            <ol>{recipeData(meal, "strMeasure")}</ol>
          </div>
        </div>
        <div className="similar-meals">
          <h2>Similar meals</h2>
          <div className="similar-meal__list">{similar()}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleMealPage;
