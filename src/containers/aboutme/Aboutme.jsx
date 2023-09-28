import React from 'react'
import './aboutme.css'
import image from '../../assets/gallery03.jpg'
import Feature from '../../components/feature/Feature'
import { images } from '../../constants'

const aboutmedata = [
  {
    title: 'CARLOS RUEDA',
    text: 'INCREIBLE BAILARIN ',
    description :'UNA GRAN PERSONA',
  }
]  


const Aboutme = () => {
  return (
    <>
    <div className =' aboutme flex__center ' id = "DIRECTOR ">
      <div className='aboutme__content '>
          {aboutmedata.map((item, index) => (
            <Feature title={item.title} text={item.text} description={item.description} key={item.title + index} />
        ))}       
      </div>
      <div className='aboutme__image'>
        <img src={image} alt="photocarlos" />
      </div>      
    </div>
    </>  
   )
}

export default Aboutme