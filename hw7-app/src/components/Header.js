import React, { useState } from 'react';
import Face from '../assets/images/drooling-face-emoji.png';
import Search from '../assets/icons/search.svg';
import Shop from '../assets/icons/shop.svg';
import { Basket } from './Basket';
import '../css/main.css';


const Header = ({chosenItem}) => {
  const[activeShopping, setActiveShopping] = useState(false);

  const handleShopClick = () => {
    if (!activeShopping) {
      setActiveShopping(true);
    }
  };

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
              {activeShopping ? <Basket chosenItem={chosenItem}/> : null}
        </div>
    )
}

export default Header;
