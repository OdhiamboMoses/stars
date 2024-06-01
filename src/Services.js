import React from "react";
import './Services.css';
import Card from "./Card";
import Car from './Car.jpg';
import logo from './logo.jpg'

function Services(){
    return(
        <>
            <div className="services-cont">
                <h2>Our Services</h2>
                <div className="cards">
                    <Card image={Car} title="Card 1" content="We offer the best of the best foodie products i town. We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.We offer the best of the best foodie products i town." price="350.00"/>
                    <Card image={logo}  title="Card 2" content="We offer the best of the best foodie products i town. We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.We offer the best of the best foodie products i town." price="470.00"/>
                    <Card image={Car}  title="Card 3" content="We offer the best of the best foodie products i town. We offer the best of the best foodie products i town.We offer the best of the best foodie products i town.We offer the best of the best foodie products i town." price="540.00"/>
                </div>
            </div>
        </>
    )
}

export default Services;