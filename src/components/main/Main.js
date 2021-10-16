import React from 'react';

import "./main.scss";
import PizzasItems from "../../components/main/pizzas-items/PizzasItems";
import {Category} from "../../components"

const Main = () => {
  const items = [
    "Meat",
    "Vegetarian", 
    "Grill", 
    "Chilli", 
    "Closing"
]
    return (
        <div className="main">
        <Category 
          items={items}
          onClickItem={(item)=>console.log(item)}
        />
            <h1 className="main__title">
              All pizzas
            </h1>
            <PizzasItems/>
        </div>
    );
}

export default Main;
