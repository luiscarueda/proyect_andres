import React from 'react'
import './programming.css'
import Feature from '../../components/feature/Feature'

const headerdata = [
  {
    title: 'BACHATA',
    text: 'LEVEL 1 2 3',
    description :'Tuesdays 8 100 CAD ',
  }
  ,
  {
    title: 'SALSA',
    text: 'LEVEL 1 2 3',
    description :'Tuesdays 9 100 CAD',
  }
  ,
  {
    title: 'COLOMBIAN SALSA',
    text: 'LEVEL 1 2 3',
    description :'Tuesdays 10 100 CAD ',
  }


]  


const Programming = () => {
  return (
    <div className='section__padding programming initial'id="SCHEDULE">
       {headerdata.map((item, index) => (
        <Feature title={item.title} text={item.text} description={item.description} key={item.title + index} />
      
        ))} 
        
    
    </div>
  )
}

export default Programming