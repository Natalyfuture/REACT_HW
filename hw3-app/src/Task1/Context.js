import React from 'react';

export const DataContext = React.createContext();

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
      .catch(error => {
        if (!error.response.ok){
          console.log(error)
        }
      })
    }
  
  handleDataUpdate = (data) => {
    const { albums } = this.state;
    const newAlbums = albums.slice(0, data);

    this.setState({ 
      newAlbums,
      n: data });
  }
 
  render() {
    return (
      <DataContext.Provider value={{...this.state, handleDataUpdate: this.handleDataUpdate}}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}


 


 


