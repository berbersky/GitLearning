import React from "react";
import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card monster={monster} name={props.name} set ={props.set}  key={monster.id} />
      ))}
    </div>
  );
};

export default CardList;
