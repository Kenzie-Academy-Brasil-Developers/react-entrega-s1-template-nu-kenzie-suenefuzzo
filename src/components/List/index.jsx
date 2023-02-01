import React from "react"
import "../List/index.css"
import { Card } from "../Card/index"

export const List = ({list, removeFromList}) => {
  return (
    <section className="container__financialSummary">
        <h2>Resumo financeiro</h2> 
        <ul className="container__cards">
          {list.length > 0 ? (
            <>
              {list.map((card, index) => (
                <Card key={index} card={card} removeFromList={removeFromList}/>
              ))}               
            </>
            ) : (
            <>
              <p>Você ainda não possui nenhum lançamento</p>
              <img className="noCardImagem" src="./NoCard.svg" alt="" />
            </>
            )}         
        </ul>
    </section>
  )
}


