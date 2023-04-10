import React from 'react';

const ProductWithTooltip = ({ mouse, name, price, rating}) => {
  console.log(mouse)
  console.log(name, price, rating)

    return(
      <div className='content' style={{left: mouse.tooltipX, top: mouse.tooltipY, zIndex: 2}}> 
        <h3>{name}</h3>
        <p>{`Price: ${price}`}</p>
        <p>{`Rating: ${rating}`}</p>
    </div>
    ) 
  }
  
  export default ProductWithTooltip;
