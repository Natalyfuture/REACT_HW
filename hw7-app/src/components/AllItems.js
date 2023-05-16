import React from 'react';
import Filter from '../assets/icons/filter.svg';
import '../css/main.css';
import Article from './Article';
import { Item } from './Item';

const AllItems = ({sortedItem, addChosenItem, setChosenItem, chosenItem, deleteChosenItem}) => {
    
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
                       <Item 
                       item={item} 
                       addChosenItem={addChosenItem} 
                       setChosenItem={setChosenItem} 
                       chosenItem={chosenItem} 
                       deleteChosenItem={deleteChosenItem}
                       />
                      </div>
                  ))}
               </div>
            </div>
            <Article />
        </div>
    )
}

export default AllItems;
