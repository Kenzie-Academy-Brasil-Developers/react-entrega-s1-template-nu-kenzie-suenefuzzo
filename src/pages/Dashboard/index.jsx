import { useState } from "react";
import React from "react";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
// import { TotalMoney } from "../../components/TotalMoney";
import { List } from "../../components/List";
import "../Dashboard/index.css";
import { v4 as uuidv4 } from "uuid";

export const Dashboard = ({ setLogin }) => {
  const [list, setList] = useState([]);

  // const [listTransactions, setListTransactions] = useState(
  //   {
  //     description: "",
  //     value: "",
  //     type: "entrada",
  //   },
  // );


  const addCardToList = (card) => {
    const newCard = { ...card, id: uuidv4() };
    setList([...list, newCard]);
  };

  const removeFromList = (cardId) => {
    const newList = list.filter((card) => card.id !== cardId);
    setList(newList);
  };

  return (
    <div>
      <Header setLogin={setLogin} />
      <main className="main">
        <div>
          <section>
            <Form
              addCardToList={addCardToList}
              list={list}
              // listTransactions={listTransactions}
              // setListTransactions={setListTransactions}
            />
            {/* <TotalMoney listTransactions={listTransactions} /> */}
          </section>
          <List
            list={list}
            removeFromList={removeFromList}
            
          />
        </div>
      </main>
    </div>
  );
};
