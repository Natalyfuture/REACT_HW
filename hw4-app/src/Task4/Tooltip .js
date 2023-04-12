import React, { useState } from 'react';
import ProductWithTooltip from './ProductWithTooltip';




const Tooltip = ({renderTooltip, content}) => {
 
    const [isTooltipShow, setIsTooltipShow] = useState(false);
   

    const toggleTooltip = () =>  setIsTooltipShow(prev => !prev);

    
    return (
      <div onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
        {renderTooltip(toggleTooltip)}
      </div>
)}  
export default Tooltip
