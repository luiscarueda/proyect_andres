import React from 'react'
import './feature.css'


const Feature = ({title,text,description}) => {
  return (
    <div className='feature'>
      <div className='feature__title h__text' >
         <div></div>
         <h2>{title}</h2>
      </div>
     <div className='feature__text '>
      <h3 className='h__text'>{text}</h3>
      <p className='p__text'>{description}</p>
     </div>     
    </div>
  )
}

export default Feature




