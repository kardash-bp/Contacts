import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { allContacts, deleteContacts } from '../../redux/actions'
import Contact from './Contact'

import './contact.css'
import Sidebar from '../parts/Sidebar'
class Contacts extends Component {
  state = {
    term: ''
  }
  componentDidMount() {
    this.props.allContacts()
  }
  handleSearch = (term) => {
    this.setState({ term: term.toLowerCase() })
  }
  render() {
    const { contacts } = this.props
    const contactsList =
      this.state.term === ''
        ? [...contacts]
        : contacts.filter((c) => c.name.toLowerCase().includes(this.state.term))
    return (
      <div className='row'>
        <div className='col-md-8'>
          <h1 className='display-4 my-3'>Contact List</h1>
          {contactsList.map((con) => (
            <Contact
              key={con.id}
              contact={con}
              del={() => this.props.deleteContacts(con.id)}
            />
          ))}
        </div>
        <div className='col-md-4'>
          <Sidebar findContact={this.handleSearch} />
        </div>
      </div>
    )
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContacts: PropTypes.func.isRequired,
  allContacts: PropTypes.func.isRequired
}

const mapState = (state) => ({
  contacts: state.contacts
})
export default connect(mapState, { allContacts, deleteContacts })(Contacts)
