import React from 'react'
import Card from '../skillsfiles/Card.js'
import Myskillsdetails from '../skillsfiles/Myskillsdetails.js'

const Skills = () =>{
  return (
    <div className='skillstotal'>
      {
        Myskillsdetails.map(
          (val)=> 
            <Card 
              key={val.id}
              img={val.img}
              name={val.name}
              proficiency={val.proficiency}
              rating={val.rating}
            />
          
        )
      }
    </div>
    
  )
}

export default Skills