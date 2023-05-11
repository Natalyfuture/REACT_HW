import React from 'react';
import Menu from './Menu';
import Header from './Header';
import Filter from './Filter';
import AllItems  from './AllItems';
import '../css/main.css';

const Base = () => {
    return(
        
        <section className="lucknow">
            <div className="container">
                <div className="menu">
                    <Menu />
                </div>
                <div className="lucknow_content">
                    <Header />
                    <Filter />
                    <AllItems />
                </div>
            </div>
        </section>
        
    )
}
export default Base;