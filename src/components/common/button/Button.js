import React from 'react';
import "./Button.scss"
import Cart from "../../../assets/img/shopping-cart.svg";

import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div className="button">
            <Link to={"/cart"}>
              <button className="button__inner">
                  <span className="button__summa">24 </span>
                  <span className="button__currency"> $</span> | 
                  <span>
                      <img className="button__img" src={Cart} alt="cart"/>
                  </span>
                  <span className="button__number"> 3</span>
              </button>
            </Link>
        </div>
    );
}

export default Button;
