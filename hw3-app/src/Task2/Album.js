import React from 'react';
import { AlbumList } from '../Task2/AlbumsFx';
import { DataContextFunc } from '../Task2/ContexFx';
import  InputField  from './InputFx';


function Albums() {

  const context = React.useContext(DataContextFunc);

  const { newAlbums, handleDataUpdate, albums, n} = context || {};

  return (
    <div>
        <h1>Task2</h1>
        <h2>Albums</h2>
        <DataContextFunc.Consumer>
          {value => (
            <>
            <InputField onDataUpdate={handleDataUpdate} albums={albums} n={n}/>
            <AlbumList newAlbums={newAlbums} />
            </>
          )}
        </DataContextFunc.Consumer>
    </div> 
  );
}

export default Albums;