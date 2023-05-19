import React, { useState, useEffect } from 'react';
import Face from '../assets/images/drooling-face-emoji.png';
import Search from '../assets/icons/search.svg';
import Shop from '../assets/icons/shop.svg';
import { Basket } from './Basket';
import '../css/main.css';
import { WaitingOder } from './WaitingOder';


const Header = ({ showWaitingOrder, setShowWaitingOrder, chosenItem }) => {
  const[activeShopping, setActiveShopping] = useState(false);


  const handleShopClick = () => {
    if (!activeShopping) {
      setActiveShopping(true);
    }
  };

  useEffect(() => {
    if (showWaitingOrder) {
      const timeoutId = setTimeout(() => {
        setShowWaitingOrder(false) ;
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showWaitingOrder, setShowWaitingOrder]);

    return(
        <div className="lucknow_content-header">
              <div className="lucknow_content-title">
                <p className="lucknow_content-text">Welcome To 
                  Lucknow
                </p>
                <div className="img_smile">
                  <img src={Face} />
                </div>
              </div>
              <div className="icons">
                <img src={Search} />
                <img src={Shop} onClick={handleShopClick}/>
              </div>
              {activeShopping && !showWaitingOrder 
              ? <Basket 
              chosenItem={chosenItem}  
              setShowWaitingOrder={setShowWaitingOrder}
              setActiveShopping={setActiveShopping}
              showWaitingOrder={showWaitingOrder}
              /> 
              :(showWaitingOrder && <WaitingOder />
              )}
        </div>
    )
}

export default Header;
