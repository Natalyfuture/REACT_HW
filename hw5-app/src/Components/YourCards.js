import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { MyCard } from './CreateCard';
import { CardForm } from './CardForm';
import '../App.css'

export const YourCards = ({newCard}) => {
    console.log(newCard)
    const [cards, setCards] = useState([]);
   /*  const location = useLocation();
    const formData = location.state?.data ?? []; */
    

    useEffect(() =>{
        if (cards.length !== 0 && newCard.length !== 0) {
            setCards(prevCards => [...prevCards, newCard])
            console.log(cards)
            return;
          } else {
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
        });
        }
    }, [])

    if (cards.length === 0) {
        return <div>Loading...</div>;
      }
      console.log(cards)
      const localCards = cards;
      console.log(localCards)
      const {user_name, data} = localCards;
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

