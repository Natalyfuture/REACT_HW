import User from './User';
import { userData }  from './Data/UserData';
import { albumData } from './Data/AlbumData';
import  Album  from './Album';

export const Task_1 = () => {

    return userData.name && (
        <div>
        <User 
        name={userData.name}
        email={userData.email}
        city={userData.address.city}
        street={userData.address.street}
        suite={userData.address.suite}
        phone={userData.phone}
        companyName={userData.company.name}
        />
        <Album title={albumData.title} url={albumData.url} />
        </div>
        
    )
}