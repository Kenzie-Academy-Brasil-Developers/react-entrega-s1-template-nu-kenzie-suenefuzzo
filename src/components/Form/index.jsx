import React from "react";
import { useState } from "react";
import {TotalMoney} from "../TotalMoney"
import "../Form/index.css";

export const Form = ({ addCardToList, list}) => {
  const [listTransactions, setListTransactions] = useState(
    {
      description: "",
      value: "",
      type: "entrada",
    },
  );

  
  const submit = (event) => {
    event.preventDefault();
    if (listTransactions.description !== "" && listTransactions.value !== "") {
      addCardToList(listTransactions);
    } else {
      alert("Por favor, preencha os campos");
    }

    setListTransactions({
      description: "",
      value: "",
      type: "entrada"
    })
  };

  return (
    <>
    <div className="container__form">
      <form onSubmit={submit} className="form" noValidate>
        <fieldset className="container__descriptionInput">
          <label className="title">Descrição</label>
          <input
            value={listTransactions.description}
            onChange={(event) =>
              setListTransactions({
                ...listTransactions,
                description: event.target.value,
              })
            }
            className="generalInput"
            type="text"
            placeholder="Digite aqui sua descrição"
          />
          <small>Ex: Compra de roupas</small>
        </fieldset>
        <div className="container__inputAndSelect">
          <fieldset className="container__inputValue">
            <label className="value" htmlFor="">
              Valor
            </label>
            <input
            value={listTransactions.value}
              onChange={(event) =>
                setListTransactions({
                  ...listTransactions,
                  value: event.target.value,
                })
              }
              className="generalInput"
              type="number"
              placeholder="0 R$"
            />
          </fieldset>
          <fieldset className="container__select">
            <label className="tipeOfValue" htmlFor="">
              Tipo de valor
            </label>
            <select
            value={listTransactions.type}
              onChange={(event) =>
                setListTransactions({
                  ...listTransactions,
                  type: event.target.value,
                })
              }
              id="select"
            >
              <option value="entrada">Entrada</option>
              <option value="saida">Despesa</option>
            </select>
          </fieldset>
        </div>
        <button className="formButton" type="submit">
          Inserir valor
        </button>
      </form>
    </div>
    <TotalMoney list={list}/>

    </>
    
  );
};
