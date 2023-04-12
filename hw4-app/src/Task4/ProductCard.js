import React, {useState} from 'react';
import Tooltip from './Tooltip ';
import ProductWithTooltip from './ProductWithTooltip';



export const ProductCard = ({name, description, image, category, price, rating, isTooltipShow}) => {
    const content = { name, price, rating };

    const MouseTracker = ({render}) =>{
        const [position, setPosition] = useState({x: 0, y: 0});
       
        const handleMouseMove = (event) => {
          setPosition( {x: event.clientX, y: event.clientY})
            
        }
      console.log(position)
        return(
          <div className='container' onMouseMove={handleMouseMove}>
          {render(position)}
         </div>
        )
         
      };
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
                       
                        <MouseTracker render={(position) => (
                            <>
                             <img 
                         src={image}
                         alt={name} 
                         onMouseEnter={toggleTooltip} 
                         onMouseLeave={toggleTooltip} 
                         onMouseMove={handleMouseMove}
                         />
                         (isTooltipShow && 
                         <ProductWithTooltip mouse={ position } name={content.name} price={content.price} rating={content.rating} />)
                            </>
                        
                        )} />
                    </div>
                    )}
                />   
            </div> 
        );
}


    
           
        
        
       
   

