import React from 'react'
import EduCard from '../educationaldetailsfiles/EduCard'
import Details from '../educationaldetailsfiles/edudetails'

function EduDetails() {
  return (
    <div className='edudetailstotal'>
      {
        Details.map(
          (val)=>
            <EduCard 
              key = {val.id}
              image = {val.img}
              type = {val.type}
              name = {val.name}
              gpa = {val.gpa}
            />
        )
      }
    </div>
  )
}

export default EduDetails