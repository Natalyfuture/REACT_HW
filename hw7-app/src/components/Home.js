import React, { useState }  from 'react';
import Menu from './Menu';
import Header from './Header';
import Filter from './Filter';
import AllItems  from './AllItems';
import '../css/main.css';
/* import { filterList } from './Filter';
 */
import GoBackButton from './GoBackButton';

const BaseHome = () => {
   /*  const [activeItem, setActiveItem] = useState([0]); */
   /*  const [sortedItem, setSortedItem] = useState ([]); */

    const [chosenItem, setChosenItem] = useState([{
        id: '',
        title: '',
        text: '',
        price: '',
        src: null,

    }]);

    const addChosenItem = (item) => { 

        setChosenItem((prevChosenItems) => [...prevChosenItems, item]);
    }

    const deleteChosenItem = (item) => {
        setChosenItem((prevChosenItems) => prevChosenItems.filter((chosenItem) => chosenItem.id !== item.id));
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
                    <Header 
                    chosenItem={chosenItem}
                   /*  showWaitingOrder={showWaitingOrder}
                    setShowWaitingOrder={setShowWaitingOrder} */
                    />
                    <Filter /* activeItem={activeItem} */ />
                    <AllItems 
                    /* sortedItem={sortedItem}  */
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
