import React, { Component } from 'react'
import { Consumer } from '../../Context'
import { nanoid } from 'nanoid'
import { InputFieldGroup } from '../parts/InputFieldGroup'
class FormContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }
  handleSubmit = (dispatch, e) => {
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
    dispatch({ type: 'ADD_CONTACT', payload: { _id: nanoid(), ...this.state } })
    // after submit clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    const { name, email, phone, errors } = this.state
    return (
      <Consumer>
        {(value) => {
          return (
            <div className='card mb-3'>
              <div className='card-header'>Add Contact</div>
              <div className='card-body'>
                <form onSubmit={this.handleSubmit.bind(this, value.dispatch)}>
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
        }}
      </Consumer>
    )
  }
}

export default FormContact
