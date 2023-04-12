import React, { useState } from 'react';

const Tooltip = ({renderTooltip, content}) => {

  const [position, setPosition] = useState({x: 0, y: 0});

  const [isTooltipShow, setIsTooltipShow] = useState(false);

  const toggleTooltip = () =>  setIsTooltipShow(prev => !prev);

  const handleMouseMove = (event) => {
    setPosition( {x: event.clientX, y: event.clientY})
    console.log(position)
        
  }
    
    return (
      <>
      {renderTooltip(toggleTooltip, handleMouseMove)}
      {isTooltipShow && (
        <div className='content' style={{left: position.x , top: position.y }}> 
            {content}
        </div>)
      
    }
      </>
      
        
    ) 
}  
export default Tooltip
