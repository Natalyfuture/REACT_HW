import React, { useRef } from 'react';


export default function InputField (props) {
  const ref = useRef();

  const handleInput = () => {
    const res = ref.current.value;
    return res;
  }

  const dataInput = () => {
    if (props.onDataUpdate) {
      const res = ref.current.value;
      props.onDataUpdate({
        albums: props.albums.slice(0, res),
        n: res
      });
    }
  }

    return(
      <div>
        <input id='input' placeholder='Enter number n you need' ref={ref}/>
        <button onClick={dataInput}>ENTER</button>
      </div>
    )
}