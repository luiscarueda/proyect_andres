import React , {useState} from 'react'
import './navbar.css'
import logo from '../../assets/3.png'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';

 

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

  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <>
      <nav className='navbar  '>
          <div className='navbar__logo'>
            <img src={logo} alt="borealis" />
          </div>
        <ul className='navbar__links'>        
          <Menu/>                                           
        </ul> 
         <div className='navbar__menu'>
          {toggleMenu
             ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
             : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
               
               {toggleMenu && (
        <div className='navbar__menu-container scale-up-center'>
          <div className='navbar__menu-container-links'>
            <Menu/>
          </div>
        </div>
        )}       

          </div>       
      </nav>
    </>
  )
 }

export default Navbar