import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Consumer } from '../../Context'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp, faTimes } from '@fortawesome/free-solid-svg-icons'
import './contact.css'
class Contact extends Component {
  state = { toggleData: false }
  onShowClick = () => {
    this.setState({ toggleData: !this.state.toggleData })
  }
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }
  render() {
    const { name, email, phone, _id } = this.props.contact
    return (
      <Consumer>
        {(value) => {
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

                <FontAwesomeIcon
                  icon={faTimes}
                  className='delete'
                  onClick={this.onDeleteClick.bind(this, _id, value.dispatch)}
                />
              </div>

              <ul className={this.state.toggleData ? 'list-group mb-2 ' : 'hide'}>
                <li className='list-group-item'>Email: {email}</li>
                <li className='list-group-item'>Phone: {phone}</li>
              </ul>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}
export default Contact
