import React from 'react'
import './calendar.css'
import Feature from '../../components/feature/Feature'
import {GrDocumentPdf} from 'react-icons/gr'
import pdf from '../../assets/november.pdf'


const calendardata = [
    {
      title: 'CALENDARIO',
      text: 'MANTENTE ACTUALIZADO',
      description :'ESTA ES LA PROGRAMACION DEL MES',
    }
  ]  

const Calendar = () => {
  return (
    <section className='flex__center section__padding 'id='CALENDAR'>
       <div className="calendar__data">
       {calendardata.map((item, index) => (
        <Feature title={item.title} text={item.text} description={item.description} key={item.title + index}/>
       ))}
       </div>
       <div className="calendar__pdf">
         <a href = {pdf} download target='_blank' rel="noreferrer"><GrDocumentPdf fontSize={80}/></a>
       </div>
    </section>
  )
}

export default Calendar