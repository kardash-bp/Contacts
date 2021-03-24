import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSortDown,
  faSortUp,
  faTimes,
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons'
import './contact.css'
import { Link } from 'react-router-dom'
class Contact extends Component {
  state = { toggleData: false }
  onShowClick = () => {
    this.setState({ toggleData: !this.state.toggleData })
  }

  render() {
    const { name, email, phone, id } = this.props.contact

    return (
      <div className='contact mt-2 p-2 border border-aqua rounded'>
        <div className='d-flex justify-content-between align-items-center'>
          <h4>
            {name} &nbsp;
            {this.state.toggleData ? (
              <FontAwesomeIcon icon={faSortUp} onClick={this.onShowClick} />
            ) : (
              <FontAwesomeIcon icon={faSortDown} onClick={this.onShowClick} />
            )}
          </h4>
          <span>
            <Link to={`/edit/${id}`}>
              {' '}
              <FontAwesomeIcon className='edit-icon' icon={faPencilAlt} />
            </Link>
            <FontAwesomeIcon
              icon={faTimes}
              className='delete ml-3'
              onClick={this.props.del}
            />
          </span>
        </div>

        <ul className={this.state.toggleData ? 'list-group mb-2 ' : 'hide'}>
          <li className='list-group-item'>Email: {email}</li>
          <li className='list-group-item'>Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}
export default Contact
