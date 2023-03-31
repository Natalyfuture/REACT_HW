import React from 'react';

export const DataContext = React.createContext();

/* export class AlbumList extends React.Component {
  static contextType = DataContext;
 
  render() {
  
   const { newAlbums } = this.context; 
    
    return (
     
      <div>
      {newAlbums.map((album, index) => (
        <div key={album.id}>
          <h3>{album.id} - {index} - {album.title}</h3>
        </div>
      ))}
    </div>
    );
  }
}
 */

export class DataProvider extends React.Component {
    state = {
      albums: [],
      newAlbums: [],
      n : 0,
    };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albums => this.setState({ 
        albums: albums,
        newAlbums: albums.slice(),
        n : albums.length,
      }))
      .catch(error => console.log(error));
    }
  
  handleDataUpdate = (data) => {
    const { albums } = this.state;
    const newAlbums = albums.slice(0, data);

    this.setState({ 
      newAlbums,
      n: data });
  }
 
  render() {
    console.log(this.state)
    return (
      <DataContext.Provider value={{...this.state, handleDataUpdate: this.handleDataUpdate}}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}


 


 


