import React from 'react';

const ProductWithTooltip = ({ mouse, name, price, rating}) => {
  
  console.log(mouse)
  console.log(name, price, rating)

    return(
      <div className='content' style={{position: 'zIndex: 2;',  left: mouse.x , top: mouse.y}}> 
        <h3>{name}</h3>
        <p>{`Price: ${price}`}</p>
        <p>{`Rating: ${rating}`}</p>
    </div>
    ) 
  }
  
  export default ProductWithTooltip;

  
