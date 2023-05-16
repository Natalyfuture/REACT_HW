import React, { useState }  from 'react';
import Menu from './Menu';
import Header from './Header';
import Filter from './Filter';
import AllItems  from './AllItems';
import '../css/main.css';
import { filterList } from './Filter';
import {allItems} from './allItemsConst';
import GoBackButton from './GoBackButton';

const BaseHome = () => {
    const [activeItem, setActiveItem] = useState([0]);
    const [sortedItem, setSortedItem] = useState ([]);
    
    const [chosenItem, setChosenItem] = useState([{
        id: '',
        title: '',
        text: '',
        price: '',
        src: null,

    }]);

    console.log('chosenItem', chosenItem)

    const addChosenItem = (item) => { 

        setChosenItem((prevChosenItems) => [...prevChosenItems, item]);
    }

    const deleteChosenItem = (item) => {
        setChosenItem((prevChosenItems) => prevChosenItems.filter((chosenItem) => chosenItem.id !== item.id));
        }

    const click = (item) => {
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
            <div className='routerHeader'>
                <GoBackButton />
            </div>
                <div className="menu">
                    <Menu />
                </div>
                <div className="lucknow_content">
                    <Header chosenItem={chosenItem}/>
                    <Filter activeItem={activeItem} click={click}/>
                    <AllItems 
                    sortedItem={sortedItem} 
                    addChosenItem={addChosenItem} 
                    deleteChosenItem={deleteChosenItem}
                    setChosenItem={setChosenItem}  
                    chosenItem={chosenItem} 
                    />
                </div>
            </div>
        </section>
        
    )
}
export default BaseHome;
