import React from 'react';

import "./main.scss";
import PizzasItems from "../../components/main/pizzas-items/PizzasItems";

const Main = () => {
    return (
        <div className="main">
            <h1 className="main__title">
                    All pizzas
                </h1>
            <PizzasItems/>
        </div>
    );
}

export default Main;
