export const User = ({id, name, email, street, suite, city, phone, companyName }) => {
    console.log(street, suite, city)
    return(
        <div>
            <h3>{name} ({email}) :</h3>
            <p>Address: {city}, {street}, {suite}  </p>
            <p>Phone: {phone} </p>
            <p>Company name: {companyName}</p>
        </div>
        
    )
}