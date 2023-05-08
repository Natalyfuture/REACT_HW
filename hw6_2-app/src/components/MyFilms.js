import Film from './Film';
import { useSelector } from 'react-redux';

const MyFilms = () => {
    const films = useSelector(state => state.films.films);

    if(!films.length){
        return <div>Поки що нічого не хочу дивитись.</div>
    }

    return (
        <div>
            {films.map(film => ( 
                <Film key={film.id} film={film} />
            ))}
        </div>
    )
}

export default MyFilms;