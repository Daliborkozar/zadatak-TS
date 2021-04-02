import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/UI/Card/Card";
import { FaSearch } from "react-icons/fa";
import Loader from "../components/UI/Loader/Loader";
import { useParams } from "react-router";

const RANDOM = "https://www.themealdb.com/api/json/v1/1/random.php";
const SEARCH_REC = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const CATEGORY_LIST = "https://www.themealdb.com/api/json/v1/1/categories.php";

const SearchPage = () => {
  const [random, setRandom] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchList, setSearchList] = useState([]);
  const [category, setCategory] = useState([]);
  const { recpie } = useParams();
  const [selection, setSelection] = useState()

  console.log(searchList);
  console.log(category)
  

  useEffect(() => {
    const random = async () => {
      const { data } = await axios.get(RANDOM);
      setRandom(data.meals[0]);
    };
    random();

    const searchRec = async () => {
      const { data } = await axios.get(SEARCH_REC + `${recpie}`);
      setSearchList(data.meals);
    };

    searchRec();

    const cat = async () => {
      const { data } = await axios.get(CATEGORY_LIST);
      setCategory(data.categories);
    };

    cat();

  }, []);

  let randomRec = null;

  randomRec = (
    <Card
      route={"meal"}
      name={random.strMeal}
      img={random.strMealThumb}
      id={random.idMeal}
    />
  );

  const onSelectionHandler = (e) => {
    setSelection(e.target.value)
  }

  return (
    <div>
      <div className="recommendation-container">
        <div className="recomendation-wrapper">
          <h1>Search </h1>
          <h3>Our recommendation</h3>
          {randomRec}
          <div>
          <p>Category: {random.strCategory}</p>
          <p>Country: {random.strArea} </p>
          </div>
        </div>
        <div className="form-wrapper">
          <select value={selection} onChange={onSelectionHandler} >
           <option selected value="category">Category</option>
            {category.map((item => (
             <option value={item.strCategory}>{item.strCategory}</option> 
            )))}
          </select>
        </div>
      
      </div>
      <div className="meal-list"></div>
    </div>
  );
};

export default SearchPage;
