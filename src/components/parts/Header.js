import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons'
import './header.css'
export const Header = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark  navbar-custom'>
      <h4 className='navbar-brand mx-5'>Contacts</h4>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              <FontAwesomeIcon icon={faHome} />
              &nbsp; Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/add'>
              <FontAwesomeIcon icon={faPlus} />
              &nbsp; Add Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>
              <FontAwesomeIcon icon={faQuestion} />
              &nbsp; About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
