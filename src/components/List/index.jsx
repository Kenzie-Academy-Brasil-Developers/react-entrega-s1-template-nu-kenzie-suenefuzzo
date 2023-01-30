import React from "react"
import "../List/index.css"

export const List = () => {
  return (
    <section className="container__financialSummary">
        <h2>Resumo financeiro</h2>
        <p>Você ainda não possui nenhum lançamento</p>
        <img className="noCardImagem" src="./NoCard.svg" alt="" />
        <ul className="container__cards">
        </ul>
    </section>
  )
}


