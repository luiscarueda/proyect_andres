import React from 'react'
import './navbar.css'
import logo from '../../assets/3.png'
 

const Menu = () => {
  return (
    <>
    
{['ACADEMY','DIRECTOR','SCHEDULE','GALLERY'].map((item) =>(
               <li key={`link-${item}`}>
                <div></div>
                <a href={`#${item}`}>{item}</a>
               </li>
        ))}
    </>
  )
}
  

const Navbar = () => {
  return (
    <>
      <nav className='navbar initial '>
          <div className='navbar__logo'>
            <img src={logo} alt="borealis" />
          </div>
        <ul className='navbar__links'>        
          <Menu/>                                           
        </ul> 
                
      </nav>
    </>
  )
 }

export default Navbar