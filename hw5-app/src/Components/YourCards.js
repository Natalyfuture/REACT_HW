import React from 'react';
import { MyCard } from './CreateCard';
import '../App.css'

export const YourCards = ({cards}) => {
    const renderCard = (cardData, user_name) => {
        return (
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
        );
    };

    if (cards.length === 0) {
        return <div>Loading...</div>;
    };

    return(
        <div>
            {cards.map(({user_name, data})  => {
               
                 return data.map((cardData) => (
                         renderCard(cardData, user_name)
                     )) 
            }
            )} 
        </div>
    )

}

