import React from "react";
import "../Homepage/index.css";

export const Homepage = ({setLogin}) => {
  return (
    <div className="container__homePage">
      <div className="container">
        <div className="container__button">
          <img className="logo" src="./NuKenzie.svg" alt="Logo" />
          <h1 className="slogan">Centralize o controle das suas finanças</h1>
          <small>de forma rápida e segura</small>
          <button onClick={() => setLogin(true)} className="homeButton" type="button">Iniciar</button>
        </div>
        <div className="container__image">
          <img className="illustrationImage" src="./Illustration.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
