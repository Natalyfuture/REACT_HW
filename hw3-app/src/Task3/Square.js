import React from 'react';

export const Square = () => {
   const squareRef = React.createRef();

   React.useEffect(() => {
    const timeOutId = setTimeout(() => {
        squareRef.current.style.transform = 'translateX(200px)';
    }, 2000)
    return () => clearTimeout(timeOutId);
    
    })

    return (
        <>
        <h1>TASK3</h1>
        <h3>PART1</h3>
        <div style={{width: '100px', height: '100px', backgroundColor: 'blue'}} ref={squareRef}></div>
        </>
        
    )
  
}
    