import React from 'react';

export default function InputProvider () {
  const handleInput = (props) => {
    const data = document.getElementById('input');
    const n = data.value;
    props.onDataUpdate(n) 
    
  }

    return(
        <div>
        <input id='input' placeholder='Enter number n you need'/>
        <button onClick={handleInput}>ENTER</button>
      </div>
    )
}