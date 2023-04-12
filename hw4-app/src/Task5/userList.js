import { User1 } from './User1';
import { useFetch } from './useFetch';

const User_BASE_URL = 'https://jsonplaceholder.typicode.com/users?_limit=10';

export const UserList = () => {
    const {data: users, error, loading} = useFetch(User_BASE_URL)
    
    return(
        <div>
            <h1>USERS</h1>
            {loading && <div>Loading...</div>}
            {(error && !loading) && <div>Error: {error}</div>}
            {(!error && !loading) && users && users?.map(user => (
                <User1
                id={user.id}
                name={user.name}
                email={user.email}
                street={user.address.street}
                suite={user.address.suite}
                city={user.address.city}
                phone={user.phone}
                companyName={user.company.name}
                key={user.id}
                />
            ))}
        </div>

    )
}