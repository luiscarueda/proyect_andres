import React from 'react'
import './aboutme.css'
import image from '../../assets/gallery03.jpg'
import Feature from '../../components/feature/Feature'

const aboutmedata = [
  {
    title: 'CARLOS RUEDA',
    text: 'BAILARIN PROFESIONAL',
    description :'Colombiano presentando su academia de baile en Canada',
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