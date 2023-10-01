import React from 'react'
import './programming.css'
import Feature from '../../components/feature/Feature'

const headerdata = [
  {
    title: 'BACHATA',
    text: 'LEVEL 1',
    description :'Tuesdays 8 ',
  }
  ,
  {
    title: 'SALSA',
    text: 'LEVEL 2',
    description :'Tuesdays 9 ',
  }
  ,
  {
    title: 'SALSA',
    text: 'LEVEL 3',
    description :'Tuesdays 10 ',
  }


]  


const Programming = () => {
  return (
    <div className=' section__padding programming  '>
       {headerdata.map((item, index) => (
        <Feature title={item.title} text={item.text} description={item.description} key={item.title + index} />
      
        ))} 
        
    
    </div>
  )
}

export default Programming