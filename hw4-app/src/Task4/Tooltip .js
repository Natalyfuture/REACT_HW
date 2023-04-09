import React, { useState } from 'react';
import ProductWithTooltip from './ProductWithTooltip';

const Tooltip = ({renderTooltip, content}) => {
 
    const [isTooltipShown, setIsTooltipShown] = useState(true);

    const toggleTooltip = () => {
        setIsTooltipShown(!isTooltipShown);
        console.log(isTooltipShown)
    }

    const MouseTracker = ( {render} ) => {
      const [tooltipX, setTooltipX] = useState(0);
      const [tooltipY, setTooltipY] = useState(0);
    
      const handleMouseMove = (event) => {
        console.log(event.clientX)
        return (
          setTooltipX( event.clientX),
          setTooltipY(event.clientY)
        )
       
      };
    
        return(
          <div className={'container'} onMouseMove={handleMouseMove}>
           {render(tooltipX, tooltipY)}
          </div>
        )
    };

    return (
        <div onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
          {renderTooltip(toggleTooltip, MouseTracker)}
          {isTooltipShown && (
            <MouseTracker render={(tooltipX, tooltipY) => <ProductWithTooltip tooltipX={tooltipX} tooltipY={tooltipY} name={content.name} price={content.price} rating={content.rating}/>} />
          )}
        </div>
      );
    };
    
    export default Tooltip;