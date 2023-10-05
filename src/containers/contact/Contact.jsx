import React from 'react'
import './contact.css'
import {BsFacebook,BsInstagram,BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
  return (
    <section className='cta  section__padding' id='CONTACT'>
      <div className="cta__content">
        <p>quieres conocer mas de mi academia?</p>
        <h3>SIGUEME EN MIS REDES SOCIALES.</h3>
      </div>
     <div className='cta__icons'>
     <a href='https://www.facebook.com/borealislatindance?locale=es_LA' target='_blank' rel="noreferrer">
          <BsFacebook fontSize={40}/>
     </a>
     <a href='https://www.instagram.com/borealislatindance/' target='_blank' rel="noreferrer">
      <BsInstagram fontSize={40}/>
     </a>
     <a href='https://wa.me/573006179301?text=Hola quiero informacion de su negocio' target= '_blank' rel="noreferrer">
      <BsWhatsapp fontSize={40} />
     </a>
     

     </div>
     
    </section>
  )
}

  
export default Contact;