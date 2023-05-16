import React, { useState } from 'react';

import managerIcon from '../assets/images/manager.png'; 
import deliveryRuns from '../assets/images/delivery-man-runs.png';
import { menuList } from './menuList';
import { Icon } from './Icon';
import '../css/main.css';


const Menu = () => {
    const [active, setActive] = useState(menuList[0]);

    const click = (item) => {
        setActive(menuList.find((x) => x.name === item));
        
    }

    return(
        <>
            <div className="menu_manager">
              <img className="menu_manager_img" src={managerIcon} alt=''/>
            </div>
            <nav className="menu_nav">
                <div className="menu_list">
                    {menuList.map(({ name, svgName }) => (
                    <div 
                    key={name} 
                    className={active.name === name ? 'menu_item menu_item--active' : 'menu_item'}
                    onClick={() => click(name)}
                    >
                        <div className="menu_item_icon">
                            <Icon name={svgName} />
                        </div>
                        <span className="menu_title">{name.toUpperCase()}</span>
                    </div>
                    ))}
                </div>
            </nav>
            <div className="faster_delivery">
                <div className="delivery">
                    <img className="delivery_img" src={deliveryRuns} alt="deliveryRuns" />
                </div>
                <div className="square">
                    <div className="square_content">
                        <p className="square_title">Faster delivery!</p>
                        <div className="know-more">
                            <p className="know-more_text">Know More</p>
                            <div className="know-more_arrow">
                                <div className="dash"></div>
                                <p>></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
             
    )
}
export default Menu