import React from 'react';

export default function InputProvider (props) {
  const handleInput = () => {
    const data = document.getElementById('input');
    const res = data.value;
    return res;
  }

  const dataInput = (n) => {
    n = handleInput();
    props.onDataUpdate(n);
  }

    return(
        <div>
        <input id='input' placeholder='Enter number n you need' />
        <button onClick={dataInput}>ENTER</button>
      </div>
    )
}