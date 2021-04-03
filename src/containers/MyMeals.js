import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/UI/Card/Card'


const RANDOM = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'

const MyMeals = () => {
    const [myMeals,setMyMeals] = useState([])
    console.log(myMeals)

    useEffect(()=>{
        const randomMeals = async () => {
            const {data} = await axios.get(RANDOM)
            setMyMeals(data.meals)
        }
        randomMeals()

    },[])

    const mealsList = () => {
        return myMeals.map(item => (
        <Card
          key={item.idMeal}
          route="meal"
          name={item.strMeal}
          img={item.strMealThumb}
          id={item.idMeal}
        />
        )
        )
    }

    return (
        <div className='mymeal-container'>
            {mealsList()}
        </div>
    )
}

export default MyMeals
