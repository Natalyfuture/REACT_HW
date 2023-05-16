import React from 'react';
import '../css/main.css';

export const Item = ({item}) => {
    return (
        <div className="allItems_block">
        <div className="allItems_content">
          <h4 className="allItem_title" >{item.title}</h4>
          <p className="allItem_text">{item.text}
          </p>
          <p className="allItem_price">{item.price}</p>
          <div className="img_box">
            <img className="img_top" src={item.src} />
          </div>
        </div> 
        <div className="circle">
        <span className="plus">+</span>
      </div>
    </div>
    )
}