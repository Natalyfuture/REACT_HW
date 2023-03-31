import React from 'react';

export class AlbumList extends React.Component {

   
    render() {
        console.log(this.props)
     const { newAlbums } = this.props; 
      
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