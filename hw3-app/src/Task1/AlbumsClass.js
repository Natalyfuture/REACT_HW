import React from 'react';
import { DataContext } from './Context';
import { DataProvider} from './Context';



export class AlbumsClass extends React.Component { 
  
    render() {
      return(
        <div>
          <h1>Task1</h1>
          <DataProvider>
          <DataContext />
          </DataProvider> 
        </div>
      )
      }
}