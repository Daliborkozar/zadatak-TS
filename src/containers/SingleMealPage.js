import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Card from "../components/UI/Card/Card";

const SINGLE_MEAL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const SAME_CAT_MEALS = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const SingleMealPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [similarList, setSimilarList] = useState([]);

  console.log(meal)

  // const similar = (data) => {
  //   data.sort(() => Math.random() - Math.random())
  //     .slice(0, 3)
  // }

  useEffect(() => {
    const single = async() => {
      const { data } = await axios.get(SINGLE_MEAL + id);
        console.log(meal)
      setMeal(data.meals[0]);
    };

    const meals = async() => {
      const { data } = await axios.get(SAME_CAT_MEALS + `${meal.strCategory}`)
      console.log(data.meals)
      // setSimilarList(similar(data.meals));
    };

    single();
    meals();
  }, []);


  
  // TODO function for this
  let ingredients = [];
  for (const [ingr, val] of Object.entries(meal)) {
    if (val !== "" && ingr.includes("strIngredient")) {
      let ingred = { ingr, val };
      ingredients.push(ingred);
    }
  }

  let measures = [];
  for (const [mes, val] of Object.entries(meal)) {
    if (val !== "" && mes.includes("strMeasure")) {
      let meas = { mes, val };
      measures.push(meas);
    }
  }

  return (
    <div>
      <div className="single-container">
        <div className="single-header">
          <div className='single-img-wrapper'>
            <img
              className="single-img"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>
          <div className="single-header__right">
            <h4 ><strong>Category:</strong> {meal.strCategory}</h4>
            <h4 ><strong>Country:</strong> {meal.strArea}</h4>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
        <div className="ingredient-list">
          <div className="ingredient-list__wrapper">
            <h4>Igredients</h4>
            <ol>
              {ingredients.map((item) => (
                <li>{item.val}</li>
              ))}
            </ol>
          </div>
          <div className="ingredient-list__wrapper">
            <h4>Measures</h4>
            <ol>
              {measures.map((item) => (
                <li>{item.val}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="similar-meals">
          <h2>Similar meals</h2>
          <div className="similar-meal__list">
            {similarList ?
              similarList.map(({ strMeal, strMealThumb, idMeal }) => (
                  <Card
                    route="meal"
                    name={strMeal}
                    img={strMealThumb}
                    id={idMeal}
                  />
                )) : "error"
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMealPage;
