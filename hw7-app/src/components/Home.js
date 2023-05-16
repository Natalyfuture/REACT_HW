import React, { useState }  from 'react';
import Menu from './Menu';
import Header from './Header';
import Filter from './Filter';
import AllItems  from './AllItems';
import '../css/main.css';
import { filterList } from './Filter';
import {allItems} from './allItemsConst';

const BaseHome = () => {
    const [activeItem, setActiveItem] = useState([0]);
    const [sortedItem, setSortedItem] = useState ([]);
    console.log(activeItem)
    console.log(sortedItem)

    const click = (item) => {
        console.log(item)
        setActiveItem(filterList.find((x) => x.title === item));

        sortingItems( item );
       
    }

        function sortingItems (title) {

            if(title === 'All'){
                setSortedItem(allItems)
            }else{
                const filteredItems = allItems.filter((item) => item.sort === title);
                setSortedItem(filteredItems);
            }
           
        }
   
       
    return(
        
        <section className="lucknow">
            <div className="container">
                <div className="menu">
                    <Menu />
                </div>
                <div className="lucknow_content">
                    <Header />
                    <Filter activeItem={activeItem} click={click}/>
                    <AllItems sortedItem={sortedItem}/>
                </div>
            </div>
        </section>
        
    )
}
export default BaseHome;