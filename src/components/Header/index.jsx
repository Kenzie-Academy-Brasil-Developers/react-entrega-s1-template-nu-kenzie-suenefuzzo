import React from "react";
import "../Header/index.css";

export const Header = ({setLogin}) => {
  return (
    <header className="header">
      <div className="container__header">
        <div>
          <img src="./NuKenzieLogo.svg" alt="Logo" />
        </div>
        <div>
          <button onClick={() => setLogin(false)} className="toHomeButton" type="button">Início</button>
        </div>
      </div>
    </header>
  );
};
