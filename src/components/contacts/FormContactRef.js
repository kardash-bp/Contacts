import React, { Component } from 'react'

class FormContact extends Component {
  constructor() {
    super()
    this.inputName = React.createRef()
    this.inputEmail = React.createRef()
    this.inputPhone = React.createRef()
  }
  static defaultProps = {
    name: 'Mile',
    email: 'mile@kitic.con',
    phone: '1111111'
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.inputName.current.value)
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    const { name, email, phone } = this.props
    return (
      <div className='card mb-3'>
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name1'>Name</label>
              <input
                id='name1'
                name='name'
                type='text'
                defaultValue={name}
                className='form-control form-control-md'
                ref={this.inputName}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='em'>Email</label>
              <input
                id='em'
                name='email'
                type='email'
                defaultValue={email}
                className='form-control form-control-md'
                ref={this.inputEmail}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='ph'>Phone</label>
              <input
                id='ph'
                name='phone'
                type='text'
                defaultValue={this.props.phone}
                className='form-control form-control-md'
                ref={this.inputPhone}
              />
            </div>
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

export default FormContact
