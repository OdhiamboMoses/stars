import React from "react";
import './Card.css';
import Car from './Car.jpg';

function Card(props){
    return(
        <>
           <div className="card-body">
                <div className="card">
                    <div className="card-image">
                        <img src={props.image} />
                    </div>
                    <h3>{props.title}</h3>
                    <p>
                        {props.content}
                    </p>
                    <div className="card-footer">
                        <h4>Ksh. {props.price}</h4>
                        <button className="card-btn">Book</button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Card;