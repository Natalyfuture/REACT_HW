import React from 'react';
import { DataContext } from './Context';
import InputField  from '../Input';
import { AlbumList } from './AlbumList'




export class AlbumsClass extends React.Component { 
  
    render() {
      return(
        <div>
          <h1>Task1</h1>
          <DataContext.Context>
            console.log(value)
            {(newAlbums) => {
              return <AlbumList  newAlbums={newAlbums}/>}
            }
            <InputField onDataUpdate={this.handleDataUpdate} />
          </DataContext.Context>
        </div>
      )
      }
}