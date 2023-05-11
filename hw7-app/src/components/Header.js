import React from 'react';
import Face from '../assets/images/drooling-face-emoji.png';
import Search from '../assets/icons/search.svg';
import Shop from '../assets/icons/shop.svg';
import '../css/main.css';


const Header = () => {
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
                <img src={Shop} />
              </div>
        </div>
    )
}

export default Header;
