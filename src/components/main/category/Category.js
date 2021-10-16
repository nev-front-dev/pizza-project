import React from 'react';

import "./category.scss";
import SortArrow from "../../../assets/img/sort-arrow.svg";

const Category = ({items}) => {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (idx) => {
        setActiveItem(idx)
    }

    return (
        <nav className="header__nav">
            <ul className="header__list">
                <li 
                    className={activeItem === null ? "active__item" : ""}
                    onClick={()=>onSelectItem(null)}>
                    All
                </li>
                {
                    items && items.map((item, idx) => <li 
                    className={activeItem === idx ? "active__item" : ""} 
                    key={`${item}_${idx}`}
                    onClick={()=>onSelectItem(idx)}
                    >{item}</li>
                )}
            </ul>
            <div className="header__sort">
                <img 
                    className="header__sort-img" 
                    src={SortArrow}
                    alt="sort-arrow"
                />
                    Sort by: <span>popular</span>
            </div>
        </nav>
    );
}

export default Category;
