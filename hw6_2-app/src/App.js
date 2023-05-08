
import './App.css';
import Form from '../src/components/Form';
import MyFilms from '../src/components/MyFilms';
import CinemaFilms from '../src/components/CinemaFilms';

function App() {
  return (
        <div className='container'>
                <Form />
            <div className='content'>
                <div className='col'>
                    <h1 className='title'>Мій список фільмів до перегляду :</h1>
                    <MyFilms />
                </div>
               { <div className='col'>
                    <h1 className='title'>Що цікавого в CinemaCity:</h1>
                    <CinemaFilms />
                </div>}
            </div>
        </div>
  );
}

export default App;
