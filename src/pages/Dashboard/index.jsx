import { useState } from "react";
import React from "react";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { TotalMoney } from "../../components/TotalMoney";
import { List } from "../../components/List";
import { Card } from "../../components/Card";
import "../Dashboard/index.css";

export const Dashboard = () => {
  const [list, setList] = useState({ })

  return (
    <div>
      <Header />
      <main className="main">
        <div>
          <section>
            <Form />
            <TotalMoney />
          </section>
          <List />
        </div>
        <Card />
      </main>
    </div>
  );
};
