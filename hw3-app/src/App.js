import './App.css';
import { AlbumsClass } from './Task1/AlbumsClass';
import Albums from './Task2/Album';
/* import InputProvider from './Input'; */




function App() {
  return (
    <div className="App">
     {/*  <InputProvider /> */}
      <AlbumsClass />
      <Albums />
    </div>
  );
}

export default App;
