import React from 'react';
import All from '../assets/images/grilled-chicken.png';
import Burger from '../assets/images/cartoon-burger.png';
import Pizza from '../assets/images/pizza 1.png';
import Salads from '../assets/images/fresh-salad.png';
import Donut from '../assets/images/delicious-donut.png';
import Drinks from '../assets/images/drinks.png';
import '../css/main.css';
import Discount from './Discount';
import { sortingItems } from './sortingItems';


export const filterList = [
    {
        id: 1,
        title: 'All',
        src: All,
    },
    {
        id: 2,
        title: 'Burger',
        src: Burger,
    },
    {
        id: 3,
        title: 'Pizza',
        src: Pizza,
    },
    {
        id: 4,
        title: 'Salads',
        src: Salads,
    },
    {
        id: 5,
        title: 'Donut',
        src: Donut,
    },
    {
        id: 6,
        title: 'Drinks',
        src: Drinks,
    },

]

const Filter = ({activeItem, click}) => {
    return(
        <div className="navigation">
              <ul className="navigation_fastfood">
                {filterList.map(({id, title, src}) => (
                     <li 
                     key={id} 
                     className={activeItem.title === title ? "navigation_fastfood-item navigation_fastfood-item--active" : "navigation_fastfood-item"}
                     onClick={() => click(title)}
                     >
                     <div className="img_container">
                       <img className="navigation_fastfood-item_img" src={src} />
                       <p className="navigation_fastfood-item_text">{title}</p>
                     </div>
                   </li>
                ))}
               </ul>
               <Discount />
        </div>
    )
}

export default Filter;
