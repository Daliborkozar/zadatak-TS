import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from '../components/UI/Card/Card'
import Loader from '../components/UI/Loader/Loader'

const RANDOM = "https://www.themealdb.com/api/json/v1/1/random.php";
const SEARCH_REC = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const SearchPage = () => {
  const [random, setRandom] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(random);

  useEffect(() => {
    const random = async () => {
      const { data } = await axios.get(RANDOM);
      setRandom(data.meals);
      setLoading(false)
    };
    random();
  }, []);



  
  let randomRec = null

  loading ?
  randomRec = <Loader />
  :
    randomRec = <Card />


  return (
    <div>
      <div>
        <div>
          <h1>Search </h1>
          <h3>Our recommendation</h3>
          <Card />
          <p>Category:</p>
          <p>Country: </p>
        </div>
        <div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
