import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../../redux/actions'
import { nanoid } from 'nanoid'
import { InputFieldGroup } from '../parts/InputFieldGroup'

class FormContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
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
    this.props.addContact({ _id: nanoid(), ...this.state })
    if (localStorage.hasOwnProperty('contacts')) {
      const data = [
        { id: nanoid(), name: name, email: email, phone: phone },
        ...JSON.parse(localStorage.getItem('contacts'))
      ]
      localStorage.setItem('contacts', JSON.stringify(data))
    }
    // after submit clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: { name: '', email: '', phone: '' }
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
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>
          <form onSubmit={this.handleSubmit}>
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
              value='Add Contact'
            />
          </form>
        </div>
      </div>
    )
  }
}
export default connect(null, { addContact })(FormContact)
