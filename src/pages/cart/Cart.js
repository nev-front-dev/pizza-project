import React from 'react';
import "./cart.scss";

import CartIcon from "../../assets/img/shopping-cart_icon.svg";
import TrashIcon from "../../assets/img/trash_icon.svg";
import PizzaItem from "../../assets/img/cheeses-chicken.png";
import BackArrow from "../../assets/img/back-arrow.svg";

export default function Cart() {
  return (
    <div className="cart__page">
      <div className="cart__header">
        <h2 className="cart__title">
          <img
            className="cart__img" 
            src={CartIcon} 
            alt="cart-img"
          />
          <span className="cart__text">Cart</span>
        </h2>
        <button className="cart__clear-btn">
        <img 
          className="cart__clear-img" 
          src={TrashIcon}
          alt="cart-img"
        />
          Clear cart
        </button>
      </div>
      <ul className="cart__items">

        <li className="cart__item">

          <div className="cart__item-inner">
            <img 
              className="cart__item-image" 
              src={PizzaItem}
              alt="pizza"
            />
            <div className="cart__item-descr">
              <div className="cart__item-name">
                Сырный цыпленок
              </div>
              <div className="cart__item-property">
                <span>thin</span>crust,
                 <span>26</span>cm.
              </div>
            </div>
          </div>

          <div className="cart__quantity">
              <button className="cart__quantity-minus">-</button>
              <span className="cart__quantity-number">2</span>
              <button className="cart__quantity-plus">+</button>
          </div>

          <div className="cart__item-summa">
            <span className="cart__item">32</span>
            <span> $</span>
          </div>

          <button className="cart__item-delete" type="button">
            x
          </button>
          
        </li>

        <li className="cart__item">

          <div className="cart__item-inner">
            <img 
              className="cart__item-image" 
              src={PizzaItem}
              alt="pizza"
            />
            <div className="cart__item-descr">
              <div className="cart__item-name">
                Сырный цыпленок
              </div>
              <div className="cart__item-property">
                <span>thin</span>crust,
                 <span>26</span>cm.
              </div>
            </div>
          </div>

          <div className="cart__quantity">
              <button className="cart__quantity-minus">-</button>
              <span className="cart__quantity-number">2</span>
              <button className="cart__quantity-plus">+</button>
          </div>

          <div className="cart__item-summa">
            <span className="cart__item">32</span>
            <span> $</span>
          </div>

          <button className="cart__item-delete" type="button">
            x
          </button>
          
        </li>

        <li className="cart__item">

          <div className="cart__item-inner">
            <img 
              className="cart__item-image" 
              src={PizzaItem}
              alt="pizza"
            />
            <div className="cart__item-descr">
              <div className="cart__item-name">
                Сырный цыпленок
              </div>
              <div className="cart__item-property">
                <span>thin</span>crust,
                 <span>26</span>cm.
              </div>
            </div>
          </div>

          <div className="cart__quantity">
              <button className="cart__quantity-minus">-</button>
              <span className="cart__quantity-number">2</span>
              <button className="cart__quantity-plus">+</button>
          </div>

          <div className="cart__item-summa">
            <span className="cart__item">32</span>
            <span> $</span>
          </div>

          <button className="cart__item-delete" type="button">
            x
          </button>
          
        </li>

      </ul>

      <div className="cart__top-items">
        <p>Total of pizzas: <span>4 </span> st</p>
        <p>Summa of order: <span>15 </span> $</p>
      </div>

      <div className="cart__top-buttons">
        <button className="cart__back-btn">
          <img
            className="cart__top-buttons_back-img" 
            src={BackArrow} 
            alt="back-arrow"
          />
          Back
        </button>
        <button className="cart__buy-btn">Buy Now</button>
      </div>

    </div>
  )
}
