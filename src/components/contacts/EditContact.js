import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editContact } from '../../redux/actions'

import { InputFieldGroup } from '../parts/InputFieldGroup'

class EditContact extends Component {
  state = {
    id: '',
    name: '',
    email: '',
    phone: '',
    errors: {}
  }
  componentDidMount() {
    console.log(this.props.match.params.id)
    const { name, email, phone, id } = this.props.contact
    this.setState({ name, email, phone, id })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //* errors check
    const { name, email, phone } = this.state
    if (name === '') {
      this.setState({ errors: { name: 'Name is required!' } })
      return
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required!' } })
      return
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required!' } })
      return
    }
    this.props.editContact({ ...this.state })
    // after submit clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })
    this.props.history.push('/')
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    const { name, email, phone, errors } = this.state
    return (
      <div className='card mb-3'>
        <div className='card-header'>Edit Contact</div>
        <div className='card-body'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <InputFieldGroup
              label='Name'
              name='name'
              type='text'
              value={name}
              handleChange={this.handleChange}
              error={errors.name}
            />
            <InputFieldGroup
              label='Email'
              name='email'
              type='email'
              value={email}
              handleChange={this.handleChange}
              error={errors.email}
            />
            <InputFieldGroup
              label='Phone'
              name='phone'
              type='text'
              value={phone}
              handleChange={this.handleChange}
              error={errors.phone}
            />

            <input
              type='submit'
              className='btn btn-light btn-block'
              value='Update Contact'
            />
          </form>
        </div>
      </div>
    )
  }
}
EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  editContact: PropTypes.func.isRequired
}
const mapState = (state, ownProps) => ({
  contact: state.contacts.find((c) => c.id.toString() === ownProps.match.params.id)
})
export default connect(mapState, { editContact })(EditContact)
