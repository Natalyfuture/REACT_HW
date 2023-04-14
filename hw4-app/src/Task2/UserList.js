import { User } from './User';
import { withFetchingData } from './withFetchingData';

const UserList = ({data: users, isLoading, error }) => {
    
    return(
        <div>
            <h1>USERS</h1>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {users && users.map(user => (
                <User
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
export default withFetchingData(UserList)