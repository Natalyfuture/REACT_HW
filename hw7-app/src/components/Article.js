import React from 'react';
import FreezeChicken from '../assets/images/freeze-chicken.png';
import Ellips12 from '../assets/images/Ellipse 12.png';
import Ellips13 from '../assets/images/Ellipse 13.png';
import OK from '../assets/images/OK.png';
import MaskedSmile from '../assets/images/maskedSmiley.png';
import Cookie from '../assets/images/cookie.png';
import PizzaEmoji from '../assets/images/favorite-pizza-emoji.png';



const Article = () => {
    return(
        <div className="article">
                <div className="article_flex">
                  <h1>Article</h1>
                  <div className="article_box">
                    <div className="know-more_arrow">
                      <div className="dash"></div>
                      <p>></p>
                    </div>
                  </div>
                </div>
                <div className="article_container">
                  <div className="article_icon article_icon-yellow">
                    <img className="article_img_icon" src={FreezeChicken} alt="" />
                  </div>
                  <div className="article_content">
                    <p className="article_content-text">How to cook turkey
                      on Natural Gas 
                    </p>
                        <div className="img_wrapper">
                            <img className="article_content-members_1" src={Ellips12} alt="" />
                        </div>
                        <div className="img_wrapper">
                            <img className="article_content-members_2" src={Ellips13} alt="" />   
                        </div>
                        <div className="article_content-grade"> 
                            <img className="ok_icon" src={OK} alt="OK" />
                            <div className="article_content-mark">28+</div>
                        </div>
                  </div>
                  
                </div>
                <div className="article_container">
                  <div className="article_icon article_icon-blue">
                    <img  className="article_img_icon" src={MaskedSmile} alt="" />
                  </div>
                  <div className="article_content">
                    <p className="article_content-text">Corona virus update:
                        3,43,287+ cases
                    </p>
                        <div className="img_wrapper">
                            <img className="article_content-members_1" src={Ellips12} alt="" />
                        </div>
                        <div className="img_wrapper">
                            <img className="article_content-members_2" src={Ellips13} alt="" />   
                        </div>
                        <div className="article_content-grade"> 
                            <img className="ok_icon" src={OK} alt="OK" />
                            <div className="article_content-mark">28+</div>
                        </div>
                  </div>
                  
                </div>
                <div className="article_container">
                  <div className="article_icon article_icon-pink">
                    <img  className="article_img_icon" src={Cookie} alt="" />
                  </div>
                  <div className="article_content">
                    <p className="article_content-text">Tasty chunk donutes
                        with chocolate 
                    </p>
                        <div className="img_wrapper">
                            <img className="article_content-members_1" src={Ellips12} alt="" />
                        </div>
                        <div className="img_wrapper">
                            <img className="article_content-members_2" src={Ellips13} alt="" />   
                        </div>
                        <div className="article_content-grade"> 
                            <img className="ok_icon" src={OK} alt="OK" />
                            <div className="article_content-mark">28+</div>
                        </div>
                  </div>
                  
                </div>
                <div className="article_container">
                  <div className="article_icon article_icon-green">
                    <img  className="article_img_icon" src={PizzaEmoji} alt="" />
                  </div>
                  <div className="article_content">
                    <p className="article_content-text">Home made double cheez
                        with popcorn respies
                    </p>
                        <div className="img_wrapper">
                            <img className="article_content-members_1" src={Ellips12} alt="" />
                        </div>
                        <div className="img_wrapper">
                            <img className="article_content-members_2" src={Ellips13} alt="" />   
                        </div>
                        <div className="article_content-grade"> 
                            <img className="ok_icon" src={OK} alt="OK" />
                            <div className="article_content-mark">28+</div>
                        </div>
                  </div>
                  
                </div>
              </div>
    )
}

export default Article;
