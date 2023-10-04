  import React from 'react'
  import './header.css'
  import Feature from '../../components/feature/Feature'
  import image1 from  '../../assets/1.png'

  const headerdata = [
    {
      title: 'BOREALIS',
      text: 'LATIN DANCE STUDIO',
      description :'DANCE ACADEMY IN KELOWNA CA ',
    }
  ]  

 const Header = () => {
   return (
    <>
    <div className='header__content section__padding flex__center' id='ACADEMY'>
      <div className='header__content-image '>
        <img src={image1} alt="logo" />
      </div> 

      <div className='header__content-feature '>
          {headerdata.map((item, index) => (
          <Feature title={item.title} text={item.text} description={item.description} key={item.title + index} />
          ))}       
      </div>
   </div> 
   </>  
   )
 }
 

 export default Header
 
 
