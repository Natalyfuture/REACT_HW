import React from 'react';
import InputProvider from '../Input';

export const DataContext = React.createContext();

class AlbumList extends React.Component {
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

export class DataProvider extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      albums: [],
      newAlbums: [],
      n : props || 0,
    };
  } 
  handleDataUpdate = (data) => {
    this.setState({ n: data });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albums => this.setState({ 
        albums: albums,
        newAlbums: albums.slice(),
        n : albums.length,
      }));
    }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.n !== this.props.n) {
      const { albums } = this.state;
      const newAlbums = albums.slice(0, this.props.n);
      this.setState({ newAlbums });
    }
  }  
 
  render() {
    
    return (
      <DataContext.Provider value={this.state}>
        <InputProvider onDataUpdate={this.handleDataUpdate} />
        <AlbumList />
      </DataContext.Provider>
    );
  }
}


 


 


