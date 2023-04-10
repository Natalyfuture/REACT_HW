import React, { useState } from 'react';
import ProductWithTooltip from './ProductWithTooltip';

const Tooltip = ({renderTooltip, content}) => {
 
    const [isTooltipShow, setIsTooltipShow] = useState(false);
    const [position, setPosition] = useState({tooltipX: 0, tooltipY: 0});

    const toggleTooltip = () => {
        setIsTooltipShow(!isTooltipShow);
        console.log(isTooltipShow)
    }
    
    const MouseTracker = () =>{
      const handleMouseMove = (event) => {
        console.log(event.clientX)
          setPosition( {tooltipX: event.clientX, tooltipY: event.clientY})
      }
      <div className={'container'} onMouseMove={handleMouseMove}>
          <ProductWithTooltip mouse={position} name={content.name} price={content.price} rating={content.rating} />
         </div>
    }

    return (
        <div onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
          {renderTooltip(toggleTooltip, MouseTracker)}
          {isTooltipShow && (<MouseTracker />)
            
          }
        </div>
      );
    };
    
    export default Tooltip;