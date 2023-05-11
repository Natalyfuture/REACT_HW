import React from 'react';
import homeIcon from '../assets/icons/home.svg';
import menuIcon from '../assets/icons/menu.svg';
import trendingIcon from '../assets/icons/trending.svg';
import settingIcon from '../assets/icons/setting.svg';
import managerIcon from '../assets/images/manager.png'; 
import deliveryRuns from '../assets/images/delivery-man-runs.png';
import '../css/main.css'

const menuList = [
    {
        id: 1,
        title: 'Home',
        src: homeIcon,
    },
    {
        id: 2,
        title: 'Menu',
        src: menuIcon,
    },
    {
        id: 3,
        title: 'Trending',
        src: trendingIcon,
    },
    {
        id: 4,
        title: 'Setting',
        src: settingIcon,
    }
]
const Menu = () => {
    return(
        <>
            <div className="menu_manager">
              <img className="menu_manager_img" src={managerIcon} alt=''/>
            </div>
            <nav className="menu_nav">
                <ul className="menu_list">
                    {menuList.map((item) => (
                    <li key={item.id} className="menu_item menu_item--active">
                        <div className="menu_icon">
                            <img src={item.src} />
                        </div>
                        <span className="menu_title">{item.title}</span>
                    </li>
                    ))}
                </ul>
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