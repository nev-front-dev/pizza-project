import React from 'react';

import "./category.scss";
import Sort from '../../sort/Sort';

const Category = ({items}) => {
  const sortItems = [
    "popular",
    "coast",
    "alphabet"
  ]
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
            <Sort sortItems={sortItems}/>
        </nav>
    );
}

export default Category;
