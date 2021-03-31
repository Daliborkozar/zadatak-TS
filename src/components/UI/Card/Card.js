import React from "react";
import {Link} from 'react-router-dom'

const Card = ({img,id,name,route}) => {
  
  return (
    <div className="card"  >
      <Link to={`/${route}/${id? id : name}`}>
      <img className='card__img' src={img} alt={name} />
      <h3 className='card__name'>{name}</h3>
      </Link>
    </div>
  );
};

export default Card;
