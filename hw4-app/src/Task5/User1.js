export const User1 = ({id, name, email, street, suite, city, phone, companyName }) => {
    
    return(
        <div>
            <h3>{name} ({email}) :</h3>
            <p>Address: {city}, {street}, {suite}  </p>
            <p>Phone: {phone} </p>
            <p>Company name: {companyName}</p>
        </div>
        
    )
}