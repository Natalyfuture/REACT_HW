import React from 'react';
import '../css/main.css';



export const Input = ({name, value, handleChange}) => {
    return (
        <label > {name.toUpperCase()}
            <input className='input'
            name={name}
            placeholder={`Your ${name}`}
            value={value.name}
            onChange={handleChange}
            type={name}
            />
         </label>
    )
       
       
}