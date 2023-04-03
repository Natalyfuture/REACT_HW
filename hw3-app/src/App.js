import './App.css';
import { AlbumsClass } from './Task1/AlbumsClass';
import Albums from './Task2/Album';
import { Square } from './Task3/Square';
import { VideoPlayer } from './Task3/Video';
import { DataProvider } from './Task1/Context';
import { DataProviderFunc } from './Task2/ContexFx';

function App() {
  return (
    <div className="App">
       <DataProvider>
       <AlbumsClass />
       </DataProvider>
       <DataProviderFunc>
      <Albums /> 
      </DataProviderFunc>
      <Square />
      <VideoPlayer />
    </div>
  );
}

export default App;
