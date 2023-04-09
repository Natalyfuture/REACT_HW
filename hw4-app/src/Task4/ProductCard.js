import React from 'react';
import Tooltip  from './Tooltip ';


export const ProductCard = ({id, name, description, image, category, price, rating}) => {
    const content = { name, price, rating };

        return (
            <div className='product-card'>
                <div className='product-img'>    
                    <div className='product-details' style={{position: 'relative' , zIndex: 0}}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>{category}</p>
                    </div>
                </div>
                <Tooltip content = {content}
                    renderTooltip={(toggleTooltip, handleMouseMove) => (
                       
                    <div onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip} onMouseMove={handleMouseMove}>
                        <img 
                        src={image}
                        alt={name} 
                        onMouseMove={handleMouseMove} 
                        onMouseEnter={toggleTooltip} 
                        onMouseLeave={toggleTooltip}
                        />
                    </div>
                    )}
                   
                />
               
            </div>
        );
}

    
           
        
        
       
   

