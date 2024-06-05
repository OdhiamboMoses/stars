import React, { useEffect, useState } from "react";
import './Test.css';
import Car from './Car.jpg';
import logo from './logo.jpg'

function Test(){
    const [cardList, setCard] = useState([]);
    useEffect(() => {
        const fetchedCards = async() => {
            const fetchedCards = [
                {
                    id: 1, title: 'Card 1', content: 'We offer the best of the best foodie products i town. We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.', price: 450.00, Image:Car
                },
                {
                    id: 2, title: 'Card 2', content: 'We offer the best of the best foodie products i town. We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.', price: 550.00, Image:Car
                },
                {
                    id: 3, title: 'Card 3', content: 'We offer the best of the best foodie products i town. We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.', price: 250.00, Image:logo
                },
                {
                    id: 4, title: 'Card 4', content: 'We offer the best of the best foodie products i town. We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.', price: 250.00, Image:logo
                },
                {
                    id: 5, title: 'Card 5', content: 'We offer the best of the best foodie products i town. We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.', price: 250.00, Image:logo
                },
                {
                    id: 6, title: 'Card 6', content: 'We offer the best of the best foodie products i town. We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.', price: 250.00, Image:logo
                }
            ];
            setCard(fetchedCards);
        };
        fetchedCards();
    }, []);
    
    return(
        <>
            <div className="test-cont" id="test-cnt">
                <h2>Use Effect Test Practice</h2>
                <div className="caboo">
                    {cardList.map(card => (
                        <div key={card.id} className="test-cards">
                            <div className="foocards">
                                <img src={card.Image} />
                                <h3>{card.title}</h3>
                                <p>{card.content}</p>
                                <div className="card-foot">
                                    <h4>Ksh. {card.price}</h4>
                                    <button className="card-btn">Book</button>
                                </div>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Test;