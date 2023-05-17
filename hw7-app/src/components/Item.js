import React, { useState } from 'react';
import ActivePlus from '../assets/icons/active_plus.svg';
import Plus from '../assets/icons/plus .svg';
import '../css/main.css';

export const Item = ({item, addChosenItem,/*  setChosenItem, chosenItem, */ deleteChosenItem}) => {
  const [activeSpan, setActiveSpan] = useState(false);

  const click = () => {

    setActiveSpan(prev => !prev);

    if(!activeSpan){

      addChosenItem(item)

    }else {

      deleteChosenItem(item)

    }
  }

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
        <div 
        onClick={click}
        className="circle"
        >
        {activeSpan 
        ? <img className="plus" src={ActivePlus} />
        : <img className="plus" src={Plus} />
      } 
        
      </div>
    </div>
    )
}
