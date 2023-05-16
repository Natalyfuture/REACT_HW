import React from 'react';
import Filter from '../assets/icons/filter.svg';
import { allItems } from './allItemsConst';
import '../css/main.css';
import Article from './Article';
import { Item } from './Item';
import { sortingItems } from './sortingItems';

const AllItems = ({sortedItem}) => {
    console.log(sortedItem)
    
    return(
        <div className="allItems">
            <div className="allItems_container-one">
              <div className="allItems_title">
                <h1>All Items</h1>
                <img src={Filter} alt="Filter" />
              </div> 
              <div className="allItems_flex">
                  {sortedItem.map((item) => (
                      <div key={item.id} className="allItems_item">
                       <Item item={item}/>
                      </div>
                  ))}
               </div>
            </div>
            <Article />
        </div>
    )
}

export default AllItems;