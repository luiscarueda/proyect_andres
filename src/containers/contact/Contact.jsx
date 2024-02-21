import React from 'react'
import './contact.css'
import {BsFacebook,BsInstagram,BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
  return (
    <section className='cta  section__padding initial' id='CONTACT'>
      <div className=' cta__form p__text'>
        <h2>CONTACT <span>Me</span></h2>
        <form action="https://formspree.io/f/xyyqlvze" method='POST'>
          <div className="cta__form-input">
            <input type='text' placeholder='Full Name'name ='Name'required/>
            <input type='email' placeholder='Email Address'name='Email'required/>
          </div>
          <div className="cta__form-input">
            <input type='number' placeholder='Mobile Number'name='Mobile'required/>
            <input type='text' placeholder='Email Subject' name='subject'required/>
          </div>
          <textarea name='message' id='message' cols='30' rows='10' placeholder='Your Message'></textarea>
          <button className='btn'type='submit'>SEND MESSAGE</button>
        </form>

      </div>
      <div className="cta__content">
        <p>quieres conocer mas de mi academia?</p>
        <h3>SIGUEME EN MIS REDES SOCIALES.</h3>
      </div>
     <div className='cta__icons'>
     <a href='https://www.facebook.com/borealislatindance?locale=es_LA' target='_blank' rel="noreferrer">
          <BsFacebook fontSize={40}/>
     </a>
     <a href='https://www.instagram.com/borealislatindance/' target='_blank' rel="noreferrer">
      <BsInstagram  fontSize={40}/>
     </a>
     <a href='https://wa.me/15875660135?text=Hola BOREALIS tengo dudas y quiero mas informacion de la academia' target= '_blank' rel="noreferrer">
      <BsWhatsapp fontSize={40}  />
     </a>  
     </div>     
    </section>
  )
}

  
export default Contact;