import React from 'react';
import logo from "../../../assets/img/logo.png";
import "./logo.scss";

import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className="header__logo">
            
              <div className="logo__image">
                <Link to={"/"}>
                  <img
                    className="logo__img"
                    src={logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="logo__text">
                  <div className="logo__title">PIZZA</div>
                  <div className="logo__description">Very good pizza</div>
              </div>
            
        </div>
    );
}

export default Logo;
