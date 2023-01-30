import React from "react";
import "../Form/index.css"

export const Form = () => {
  return (
    <div className="container__form">
      <h2 className="title">Descrição</h2>
      <form className="form">
        <div className="container__descriptionInput">
          <input className="generalInput" type="text" placeholder="Digite aqui sua descrição" />
          <small>Ex: Compra de roupas</small>
        </div>
        <div className="container__inputAndSelect">
            <div className="container__inputValue">
                <label className="value" htmlFor="">Valor</label>
                <input className="generalInput" type="number" placeholder="1"/>
            </div>
            <div className="container__select">
                <label className="tipeOfValue" htmlFor="">Tipo de valor</label>
                <select id="select">
                    <option value="entrada">Entrada</option>
                    <option value="despesa">Despesa</option>
                </select>
            </div>
        </div>
        <button className="formButton" type="submit">Inserir valor</button>
      </form>
    </div>
  );
};
