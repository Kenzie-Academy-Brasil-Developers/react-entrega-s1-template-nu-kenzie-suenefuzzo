// import { useState } from "react";
import React from "react";
import "../Card/index.css";

export const Card = ({card, removeFromList}) => {


  return (
    <li className={
      card.type === "entrada" ? "cardEntrada card" : "cardSaida card"
    }>
      <div className="container__descriptionAndAmount">
        <h3>{card.description}</h3>
        <p>{card.value}</p> 
      </div>
      <div className="container__typeAndButton">
        <span>{card.type}</span>
        <button onClick={() => removeFromList(card.id)} className="deleteButton"></button>
      </div>
    </li>
  );
};
