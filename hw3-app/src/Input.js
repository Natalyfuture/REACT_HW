import React, { useRef } from 'react';


export default function InputField (props) {
  const ref = useRef();

  const handleInput = () => {
    const res = ref.current.value;
    return res;
  }

  const dataInput = (n) => {
    n = handleInput();
    props.onDataUpdate(n);
  }

    return(
      <div>
        <input id='input' placeholder='Enter number n you need' ref={ref}/>
        <button onClick={dataInput}>ENTER</button>
      </div>
    )
}