import React, { useState } from 'react';
import ProductWithTooltip from './ProductWithTooltip';


export const MouseTracker = ({render}) =>{
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

const Tooltip = ({renderTooltip, content}) => {
 
    const [isTooltipShow, setIsTooltipShow] = useState(false);
   

    const toggleTooltip = () =>  setIsTooltipShow(prev => !prev);

   
    return (
      <div onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
        {renderTooltip(toggleTooltip)}
      
        {isTooltipShow && (
        <MouseTracker 
          render={(position) => 
          (<ProductWithTooltip mouse={{ position }} name={content.name} price={content.price} rating={content.rating} />)} 
        />)}
      </div>
)}  
export default Tooltip
