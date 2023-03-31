import React, { useState, useEffect } from 'react';
import { InputContext } from './ContextFunc';
import { InputProvider } from './ContextFunc'

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [n, setN] = useState(0);

  const context = React.useContext(InputContext);

  console.log(context)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.log(error));
  }, []);

  const changeNewAlbums = (albums, n) => {
    const newAlbums = albums.slice(0, n);
    setNewAlbums(newAlbums);
  }

  useEffect(() => {
    changeNewAlbums(albums, n);
  }, [n, albums]);

  return (
    <div>
        <h1>Task2</h1>
        <InputProvider>
          <input id='input' placeholder='Enter number n you need' onChange={(e) => setN(parseInt(e.target.value))} />
          <button onClick={() => changeNewAlbums(albums, n)}>ENTER</button>
        </InputProvider>
      <h2>Albums</h2>
      <div>
        {albums.map ((album, index) => (
          <div key={album.id}> <h3>{album.id} - {index} - {album.title}</h3></div>
        ))}
      </div>
    </div>
  );
}

export default Albums;