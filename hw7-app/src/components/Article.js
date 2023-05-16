import React from 'react';
import FreezeChicken from '../assets/images/freeze-chicken.png';
import MaskedSmile from '../assets/images/maskedSmiley.png';
import Cookie from '../assets/images/cookie.png';
import PizzaEmoji from '../assets/images/favorite-pizza-emoji.png';
import { ArticleItem } from './ArticleItem';
import '../css/main.css';

const articleItems = [
  {
    id: 100,
    src: FreezeChicken,
    text: 'How to cook turkey on Natural Gas',
    color: 'yellow', 
  },
  {
    id: 101,
    src: MaskedSmile,
    text: 'Corona virus update: 3,43,287+ cases',
    color: 'blue', 
  },
  {
    id: 102,
    src: Cookie,
    text: 'Tasty chunk donutes with chocolate ',
    color: 'pink', 
  },
  {
    id: 103,
    src: PizzaEmoji,
    text: 'Home made double cheese with popcorn respies',
    color: 'green', 
  }
]


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
                {articleItems.map((item) => (
                  <div key={item.id} className="article_container">
                  <ArticleItem item={item} />
                  </div>
                ) )}
        </div>
        
    )
}

export default Article;
