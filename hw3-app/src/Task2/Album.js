import React, { useState, useEffect } from 'react';

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
        <h1>Task2</h1>
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