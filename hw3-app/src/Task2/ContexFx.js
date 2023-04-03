import React, {useState, useEffect} from 'react';

export const DataContextFunc = React.createContext();


export const DataProviderFunc = (props) => {
    const [albums, setAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [n, setN] = useState(0);
    
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        if(!response.ok) {
          throw new Error ('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
      setAlbums(data);
      setNewAlbums(data.slice());
      setN(data.length)
     
    })
      .catch(error => {
        console.log(error) 
      })
    }, []);

    const handleDataUpdate = ({albums: newAlbums, n}) => {
      setNewAlbums(newAlbums.slice(0, n));
      setN(n);
   }

    useEffect(() => {
        handleDataUpdate({albums, n});
    }, [n, albums]) 
 
        return(
            <DataContextFunc.Provider value={{ newAlbums, handleDataUpdate, albums, n}}>
              {props.children}
            </DataContextFunc.Provider>
        );

}
    