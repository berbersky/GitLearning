import React from "react";
import "./card.style.css";

const Card = (props) => {
  //set2
  return (
    <div className="card-container">
      <img
        alt={props.set.categoryName}
        src={`http://robohash.org/${props.name}${props.monster.id}?set=${props.set.set}&size=180x180`}
      />
      <h1>{props.monster.name}</h1>
      <h2>{props.monster.email}</h2>
    </div>
  );
};

export default Card;
