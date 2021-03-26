import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default class Sidebar extends Component {
  handleChange = (e) => {
    this.props.findContact(e.target.value)
  }
  render() {
    return (
      <form className='my-2 my-lg-0 pt-4'>
        <input
          className='form-control '
          type='search'
          placeholder='Search'
          aria-label='Search'
          onChange={this.handleChange}
        />{' '}
      </form>
    )
  }
}
