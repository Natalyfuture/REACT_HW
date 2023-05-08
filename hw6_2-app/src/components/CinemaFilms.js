import FilmCards from './FilmCards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../redux/reducers/fetchFilms';

const CinemaFilms = () => {
    const { fetchedFilms: films, isLoading, error } = useSelector(state => state.films);
    const dispatch = useDispatch()
    if(isLoading)return <p>Loading...</p>
    if(error)return <p>ERROR</p>

    if(!films.length) {
        return <div>
            <h2>Ви ще не завантажили розклад</h2>
            <button onClick={() => dispatch(fetchFilms())}>Завантажити</button>
        </div>
    }

    return (
        <div>
            {films && films.map(film => (
                <FilmCards key={film.id} film={film} />
            ))}
        </div>
    )
}

export default CinemaFilms;