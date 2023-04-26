import React, { useState, useEffect} from 'react';
import { MyCard } from './CreateCard';
import '../App.css'

export const YourCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch('https://my.api.mockaroo.com/cards/123.json?key=778301b0')
        .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                } return response.json()
            })
        .then(res => {
            setCards(res);
        console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    if (cards.length === 0) {
        return <div>Loading...</div>;
      }
      const {user_name, data} = cards;
    return(
        <div>
            {data.map((cardData) => (
                <div key={cardData.id}> 
                    <MyCard 
                        numberCard={cardData.card.numbers} 
                        fullName={user_name} 
                        logo={cardData.card.type} 
                        id={cardData.id}
                        dataValid={cardData.card.expiry_date}
                        cvv={cardData.card.cvv}
                        dataStatistic={cardData.statistic}
                    />  
                </div> 
            ))}    
        </div>
    )

}

