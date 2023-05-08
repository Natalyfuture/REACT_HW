import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { createFilm } from '../redux/reducers/filmsSlice';

const Form = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        title: ''
    });

    const onSubmit = (event) => {
        event.preventDefault()

        const { title } = input;

        if(!title.trim()) {
            return
        }

        const newFilm = {
            title,
            id: Date.now().toString()
        };

        dispatch(createFilm(newFilm))

        setInput({ title: ''})
    }

    const inputHandler = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }


    return(
        <form onSubmit={onSubmit}>
            <h2>Мій список фільмів до перегляду:</h2>
            <input
                type='text'
                placeholder='Введіть назву'
                name='title'
                key='title'
                value={input.title}
                onChange={inputHandler}
            />
            <button type="submit">Додати фільм</button>
        </form>
    )
}

export default Form;