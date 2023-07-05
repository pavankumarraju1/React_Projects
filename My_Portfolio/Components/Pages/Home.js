import React from 'react'
import { Carousel } from 'react-bootstrap'


const Home = () =>{
  return (
   <div>
      <div className='profile'>
        <img src='./assests/background.jpg' alt='backgroung image' className='backimg'/>
        <div className='txt'>
          <i>
            An enthusiastic person with
            High optimism and patience
            Pursuing bachelors of engineering degree in computer science.Eager to learn and implement new technologies.Also A sport enthusiast of having lot of intrest in playing cricket.
          </i>
        </div>
      </div>

      <Carousel className='carousel'>
        <Carousel.Item>
          <h3 className='item1'>My achievements</h3>
        </Carousel.Item>

        <Carousel.Item className='item2'>
          <img src='./assests/districtlevel.jpg' className='item2' />
          <Carousel.Caption>
            <h3 style={{color:"black"}}>my district level inspire award certificate</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='item2'>
          <img src='./assests/statelevel.jpg' className='item2' />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>my state level inspire award certificate</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='item2'>
          <img src='./assests/nationallevel.jpg' className='item2' />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>my national level inspire award certificate</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item className='item2'>
          <img src='./assests/cm.jpg' className='item2' />
          <Carousel.Caption>
            <h3 style={{ color: "black"}}>my pic with the former chief minister</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   </div>
  )
}

export default Home