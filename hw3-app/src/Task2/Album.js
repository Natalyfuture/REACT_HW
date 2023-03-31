import React from 'react';
import { DataContext } from '../Task1/Context';
import { AlbumList } from '../Task1/AlbumList';

function Albums() {

  const context = React.useContext(DataContext);

  const { newAlbums } = context;

  return (
    <div>
        <h1>Task2</h1>
        <h2>Albums</h2>
        <AlbumList newAlbums={newAlbums}/>
    </div> 
  );
}

export default Albums;