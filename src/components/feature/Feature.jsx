import React from 'react'
import './feature.css'


const Feature = ({title,text,description}) => {
  return (
    <div className='feature'>
      <div className='feature__title' >
         <h2>{title}</h2>
      </div>
     <div className='feature__text'>
      <h3>{text}</h3>
      <p>{description}</p>
     </div>
      
    </div>
  )
}

export default Feature




