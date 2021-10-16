import React from 'react'
import "./sort.scss";

import SortArrow from "../../assets/img/sort-arrow.svg";

export default function Sort({sortItems}) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const toggleVisiblePopup = ()=> {
    setVisiblePopup(!visiblePopup)
  }

  return (
    <div className="header__sort">
      <img 
        className={visiblePopup ? "active__popup" : ""} 
        src={SortArrow}
        alt="sort-arrow"
      />
      <span className="sort__label">Sort by : </span>
      <span className="sort__selected"  onClick={toggleVisiblePopup}> popular</span>
      {visiblePopup && <div className="sort__popup">
        <ul className="sort__list">
        {
          sortItems.map(
            (item, idx) => <li className="sort__item" onClick={()=>{console.log(`${item}_${idx}`)}} key={`${item}_${idx}`}>{item}</li>
          )
        } 
        </ul>
      </div>}
    </div>
  )
}
