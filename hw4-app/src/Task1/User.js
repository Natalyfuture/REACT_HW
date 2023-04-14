import React from 'react';
import { withToggle } from './withToggle';

const User = ({name, email, city, street, suite, phone, companyName, toggled, changeToggle}) => {

    
        return(
            <div>
                <h1>TASK 1</h1>
                <h3>{name} ({email}) :</h3>
                {toggled && 
                    <>
                        <p>Address: {city}, {street}, {suite}  </p>
                        <p>Phone: {phone} </p>
                        <p>Company name: {companyName}</p>
                    </>
                }
                <button onClick={changeToggle}>{toggled ? 'Hide details' : 'See details' }</button>
            </div>  
        )  
   
}
   

export default withToggle(User);