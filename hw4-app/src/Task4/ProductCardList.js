import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
    const [productsList, setProductsList] = useState([]);
    const { name, description, image, category, price, rating} = productsList;
   
    const COFFEE_BASE_URL= ' https://my.api.mockaroo.com/coffee.json?key=778301b0';
    const CLOTHE_BASE_URL = 'https://fakestoreapi.com/products';

    useEffect(() => { 
        fetch(COFFEE_BASE_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            return response.json();
        })
        .then(json => setProductsList(json))
        .catch((error) => {
            console.log(error)
        })
        
    }, []) 
    
 
     return(
        <div>
            {productsList.map(({ id, title, description, image, category, price, rating }) => <ProductCard  key={id} 
                    name={title} 
                    description={description} 
                    image={image} 
                    category={category} 
                    price={price} 
                    rating={rating} />)}
        </div> 
    ) 
} 
