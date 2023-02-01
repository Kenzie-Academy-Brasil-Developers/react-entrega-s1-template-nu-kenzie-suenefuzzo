import React from "react";
import "../TotalMoney/index.css";

export const TotalMoney = ({ list }) => {
  const transaction = list.reduce(
    (total, card) =>
      card.type === "saida"
        ? total - Number(card.value)
        : total + Number(card.value),
    0
  );

  return (
    <div className="container__totalValue">
      <div className="totalValue">
        <h2>Valor total:</h2>
        <p>R$ {transaction} </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};
