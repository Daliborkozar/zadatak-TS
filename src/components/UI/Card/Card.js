import React from "react";

const Card = ({img,id,name}) => {
  return (
    <div className="card" key={id}>
      <img className='card__img' src={img} alt={name} />
      <h3 className='card__name'>{name}</h3>
    </div>
  );
};

export default Card;
