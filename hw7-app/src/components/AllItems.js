import React from 'react';
import Filter from '../assets/icons/filter.svg';
import { allItems } from './allItemsConst';
import '../css/main.css';
import Article from './Article';

const AllItems = () => {
    return(
        <div className="allItems">
            <div className="allItems_container-one">
              <div className="allItems_title">
                <h1>All Items</h1>
                <img src={Filter} alt="Filter" />
              </div> 
           
              <div className="allItems_flex">
                  {allItems.map((item) => (
                      <div key={item.id} className="allItems_item">
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
                      </div>
                  ))}
               </div>
            </div>
            <Article />
        </div>
    )
}

export default AllItems;