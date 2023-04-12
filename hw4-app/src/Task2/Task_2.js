import AlbumList from './AlbumList';
import UserList from './UserList';

const ALBUMS_BASE_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10';
const User_BASE_URL = 'https://jsonplaceholder.typicode.com/users?_limit=10';

export const Task_2 = () => {
    return(
        <div className='wrapper'>
            <h1>TASK 2</h1>
            <AlbumList url={ALBUMS_BASE_URL} />
            <UserList url={User_BASE_URL} />
            <hr></hr>
        </div>
    )
}