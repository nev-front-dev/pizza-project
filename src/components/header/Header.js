import React from 'react';
import "./header.scss";

import {Button, Logo, Category} from "../../components"

const Header = () => {
    const items = [
        "Meat",
        "Vegetarian", 
        "Grill", 
        "Chilli", 
        "Closing"
    ]
    return (
        <div className="header">
            <div className="header__inner">
                <Logo/>
                <Button/>
            </div>
            <Category 
                items={items}
                onClickItem={(item)=>console.log(item)}
             />
        </div>
    );
}

export default Header;
