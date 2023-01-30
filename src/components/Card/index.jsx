import React from "react";
import "../Card/index.css";

export const Card = () => {
  return (
    <li className="card">
      <div className="container__descriptionAndAmount">
        <h3>Salário - Dezembro</h3>
        <p>R$ 6.600</p>
      </div>
      <div className="container__typeAndButton">
        <span>Entrada</span>
        <button className="deleteButton"></button>
      </div>
    </li>
  );
};
