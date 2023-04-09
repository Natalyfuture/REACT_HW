import { Album } from './Album';
import { withFetchingData } from './withFetchingData'

const AlbumList = ({data: albums, isLoading, error }) => {
    return(
        <div>
            <h1>ALBUMS</h1>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {albums && albums.map(album => (
                <Album
                id={album.id}
                title={album.title}
                key={album.id}
                />
            ))}
        </div>

    )
}
export default withFetchingData(AlbumList)