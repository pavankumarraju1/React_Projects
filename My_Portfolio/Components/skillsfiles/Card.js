import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='top'>
                <img src={props.img} alt='image' className='image'></img>
            </div>
            <div className='bottom'>
                <h3>{props.name}</h3>
                <p>{props.proficiency}</p>
                <p>{props.rating}</p>
            </div>
        </div>

    )
}

export default Card