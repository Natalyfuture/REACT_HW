import { useState, useEffect} from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => {
            if(res.ok){
                return res.json()
            }
            throw new Error({message: 'Something went wrong.'})
        })
        .then(json => setData(json))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    }, [url])

    return {data, loading, error}
}