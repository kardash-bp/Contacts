import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Consumer } from '../../Context'
import Contact from './Contact'
import './contact.css'
class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className='row'>
              <div className='col-md-9'>
                {value.contacts.map((con) => (
                  <Contact key={con._id} contact={con} />
                ))}
              </div>
              <div className='col-md-3'>sidebar</div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

// Contacts.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// }
export default Contacts
