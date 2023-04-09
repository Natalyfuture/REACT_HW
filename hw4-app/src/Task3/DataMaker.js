import { useState, useEffect } from 'react';

export const DataMaker = ({url, renderDataUrl}) => {

    const[posts, setPosts] = useState([]);

        useEffect(() => {
            fetch(url)
            .then(response => {
                if (!response.ok) {
                  throw new Error('Something went wrong!');
                }
                return response.json();
            })
            .then(data => setPosts(data))
            .catch((error) => {
                console.log(error)
            })
        }, [url])

        return <div>{renderDataUrl(posts)}</div>
 
}