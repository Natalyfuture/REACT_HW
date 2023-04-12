import { useToggler } from './Toggler';
import { userData } from '../Task1/Data/UserData';

export const User = () => {
    const {name, email, address, phone, company} = userData

    const {toggled, changeToggler} = useToggler(false)
   
   return(
        <div>
            <h1>Part 1</h1>
            <h3>{name} ({email}) :</h3>
            {toggled && <>
                <p>Address: {address.city}, {address.street}, {address.suite}  </p>
                <p>Phone: {phone} </p>
                <p>Company name: {company.name}</p>
                </>}
            <button onClick={changeToggler}>{toggled ? 'Hide details' : 'See details' }</button>
            <hr></hr>
        </div>  
    )  
}
