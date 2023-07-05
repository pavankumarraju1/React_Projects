import React from 'react'

const EduCard = (props) => {
    return (
        <div className="educard">
            <div className='left'>
                <img src={props.image} alt="Image" />
            </div>
            <div className="right">
                <h2>{props.type}</h2>
                <p>{props.name}</p>
                <p>CGPA:{props.gpa} </p>
            </div>
        </div>
    )
}

export default EduCard