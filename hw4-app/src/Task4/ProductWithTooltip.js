import React from 'react';

const ProductWithTooltip = ({ tooltipX, tooltipY, name, price, rating}) => {
  console.log(tooltipX, tooltipY)
  console.log(name, price, rating)

    return(
      <div className='content' style={{left: tooltipX, top: tooltipY, zIndex: 2}}> 
        <h3>{name}</h3>
        <p>{`Price: ${price}`}</p>
        <p>{`Rating: ${rating}`}</p>
    </div>
    ) 
  }
  
  export default ProductWithTooltip;
