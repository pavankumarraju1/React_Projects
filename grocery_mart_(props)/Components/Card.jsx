import React from "react";

function Card(props) {
    return (
        <div >
            <img src={props.img} alt="vegetable image" className="img"></img>
            <div className="details">
            <p>{props.name}</p>
            <p>{props.price}</p>
            </div>
            
        </div>
    )
}

export default Card;