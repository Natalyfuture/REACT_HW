import { useEffect, useState }  from 'react';

export const withFetchingData = (WrappedComponent) => {
    return (props) => {
    const [data , setData] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);

        useEffect (() => {
            setIsLoading(true)
            fetch(props.url)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
        }, [])

        return <WrappedComponent {...props} data={data} isLoading={isLoading} error={error}/>;
    }  
}