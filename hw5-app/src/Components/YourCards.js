import React, { useState } from 'react';
/* import { useLocation } from 'react-router-dom'; */
import { MyCard } from './CreateCard';
/* import { CardForm } from './CardForm'; */
import '../App.css'

export const YourCards = ({cards}) => {
    console.log(cards)
    const renderCard = (cardData, user_name) => {
        console.log(cardData)
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

