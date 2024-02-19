import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSlack } from '@fortawesome/free-brands-svg-icons'


import './Navbar.css'



function Navbar() {

  const [click, setClick] = useState(!false)
  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)
  const [button , setButton] = useState(true)

  const showButton = ()=> {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  useEffect(()=>{
    showButton()
  },[])

  window.addEventListener('resize' , showButton);


  return (
    <>
      <div className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <FontAwesomeIcon className={'fa-typo3'} icon={faSlack}></FontAwesomeIcon>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} style={{ color: "white", }} ></FontAwesomeIcon>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'><Link to="/" className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
            </Link>
            </li>
            <li className='nav-item'>
              <Link to='/signUp' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign UP
            </Link>
            </li>
          </ul>
          {button && <Button buttonStyle={'btn--outline'}>SIGN UP</Button>}

        </div>
      </div>
    </>
  )
}

export default Navbar
