import React, { useState } from 'react';

export const InputContext = React.createContext();

export const InputProvider = (props) =>{
  const [inputValue, setInputValue] = useState('')

    const handleInput = () => {
        const data = document.getElementById('input');
        if(data) {
          const res = data.value;
        
        setInputValue(res)
        console.log(res)
        }
      }

        return(
            <InputContext.Provider value={inputValue}>
            <div>
            <input id='input' placeholder='Enter number n you need' />
            <button onClick={handleInput}>ENTER</button>
            </div>
            </InputContext.Provider>
        )
}