import React from 'react';
import { DataContext } from './Context';
import InputField  from '../Input';
import { AlbumList } from './AlbumList'

export class AlbumsClass extends React.Component { 
  
    render() {
      return(
        <div>
          <h1>Task1</h1>
          <DataContext.Consumer>
            
            {(context) => {
              const { newAlbums, handleDataUpdate} = context;
              return(
                <>
                  <InputField onDataUpdate={handleDataUpdate} />
                  <AlbumList  newAlbums={newAlbums}/>
                  
                </>
              )
             
              }
            }
            
          </DataContext.Consumer>
        </div>
      )
    }
}