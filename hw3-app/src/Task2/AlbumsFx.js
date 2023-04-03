import React from 'react';

export const AlbumList = (props) => {
  const { newAlbums } = props;
        
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
 