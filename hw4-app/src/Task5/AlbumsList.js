import { useFetch } from './useFetch';
import { Album2 } from './Album2';

const ALBUMS_BASE_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10';

export const AlbumList = () => {
    const {data: albums, error, loading} = useFetch(ALBUMS_BASE_URL)
    return(
        <div>
            <h1>Part 2</h1>
            <h1>ALBUMS</h1>
            {loading && <div>Loading...</div>}
            {(error && !loading) && <div>Error: {error}</div>}
            {(!error && !loading) && albums && albums?.map(album => (
                <Album2
                id={album.id}
                title={album.title}
                key={album.id}
                />
            ))}
        </div>

    )
}