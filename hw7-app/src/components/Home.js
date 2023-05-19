import React, { useState }  from 'react';
import Menu from './Menu';
import Header from './Header';
import Filter from './Filter';
import AllItems  from './AllItems';
import '../css/main.css';

const BaseHome = () => {
    const [showWaitingOrder, setShowWaitingOrder] = useState(false)

    const [chosenItem, setChosenItem] = useState([{
        id: '',
        title: '',
        text: '',
        price: '',
        src: null,

    }]);
  
    return( 
        <section className="lucknow">
            <div className="container">
                <div className="menu">
                    <Menu />
                </div>
                <div className="lucknow_content">
                    <Header 
                    chosenItem={chosenItem}
                    setChosenItem={setChosenItem}
                    showWaitingOrder={showWaitingOrder}
                    setShowWaitingOrder={setShowWaitingOrder}
                    />
                    <Filter />
                    <AllItems 
                    showWaitingOrder={showWaitingOrder}
                    setChosenItem={setChosenItem}  
                    chosenItem={chosenItem} 
                    />
                </div>
            </div>
        </section> 
    )
}
export default BaseHome;
