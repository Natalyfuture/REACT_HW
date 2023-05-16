import React, {useState} from 'react';
import Arrow from '../assets/icons/arrow.svg';

export const Basket = ({chosenItem}) => {
    console.log(chosenItem)

    const [count, setCount] = useState([
        chosenItem.map((item) => ({
            id: item.id,
            count: 0,
          }))
    ]);

    const handleMinusClick = (id) => {
        setCount((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) - 1,
          }));
      
    };
      
    
    const handlePlusClick = (id) => {
        setCount((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1,
          }));
    };


    const handlePrice = (price, count) => {
        if (price) {
        const priceNumber = parseInt(price.replace(/\D/g, ''));
        let totalAmount = priceNumber * count;
        return totalAmount;
        }
        return 0;
        
    }
      
    const calculateTotalPrice = () => {
        return chosenItem.reduce((total, item) => {
          const itemPrice = handlePrice(item.price, count[item.id] || 0);
          return total + itemPrice;
        }, 0);
    };

    return(
        <div className='basket basket-container'>
            <div className='basket-header'>
                <h1 className='basket-header-title'>Basket</h1>
                <div className='basket-header_arrow-container'>
                    <img className='basket-header_arrow-img' src={Arrow}/>
                </div>
            </div>
            {chosenItem.map((item, index) => (
                index === 0 ? null : (
                <div className='basket_content' key={item.id}>
                <div className='basket_wrapper-img'>
                   {<img className='basket-img' src={item.src}/>}
                </div>
                <div className='basket_description'>
                    <p className='basket_description-title'>{item.title}</p>
                    <p className='basket_description-text'>{item.text}</p>
                </div>
                <span className='basket_minus' onClick={() => handleMinusClick(item.id)}>-</span>
                <span className='basket_plus'onClick={() => handlePlusClick(item.id)}>+</span>
                <span className='basket_quantity'>{count[item.id] || 0}</span>
                <span className='basket_price'>${handlePrice(item.price, count[item.id] || 0)}</span>
            </div>
                )
            ))}
             {chosenItem.length === 0 && (
                <p>No items in the basket</p> 
    )}
                
                <div className='basket_container-button'>
                    <button className='button'>Order -${calculateTotalPrice()} </button>
                </div>
        </div>
    )
}