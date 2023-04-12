import React from 'react';
import Tooltip from './Tooltip ';
import '../App.css'

export const ProductCard = ({name, description, image, category, price, rating, isTooltipShow}) => {  
        return (
            <div className='product-card'>
                <div className='product-img'>    
                    <div className='product-details' style={{position: 'relative' , zIndex: 0}}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>{category}</p>
                       
                    </div>
                </div>
                
                <Tooltip content = {
                    <>
                        <h3>{name}</h3>
                        <p>{`Price: ${price}`}</p>
                        <p>{`Rating: ${rating}`}</p>
                    </>
                }
                
                   renderTooltip={(toggleTooltip, handleMouseMove) => (  
                             <img 
                             className='img-things'
                         src={image}
                         alt={name} 
                         onMouseEnter={toggleTooltip} 
                         onMouseLeave={toggleTooltip} 
                         onMouseMove={handleMouseMove}
                         />
                    )}
                   
                />   
            </div> 
        );
}


    
           
        
        
       
   

