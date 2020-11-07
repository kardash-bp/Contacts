import React from 'react'
import { Link } from 'react-router-dom'
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
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          {/* <li className='nav-item'>
            <Link className='nav-link' to='/add'>
              Add Contact
            </Link>
          </li> */}
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}
