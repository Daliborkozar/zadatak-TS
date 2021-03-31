import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const SINGLE_MEAL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const SingleMealPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});

  useEffect(() => {
    const single = async () => {
      const { data } = await axios.get(SINGLE_MEAL + id);
      console.log(data.meals[0]);
      setMeal(data.meals[0]);
    };

    single();
  }, []);

  //OMG
    const ingredients = (bla) => {
    let arr = [];
    for (const [key, value] of Object.entries(bla)) {
      if (value !== "" && key.includes("strIngredient")) {
        let obj = { key, value };
        arr.push(obj);
      }
    }
    return arr;
  };

  console.log(ingredients(meal));

  return (
    <div>
      <div className="container">
        <div>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h4>Category: {meal.strCategory}</h4>
          <h4>Country: {meal.strArea}</h4>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMealPage;
