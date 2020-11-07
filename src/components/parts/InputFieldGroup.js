import React from 'react'
import PropTypes from 'prop-types'

export const InputFieldGroup = ({
  label,
  name,
  type,
  value,
  handleChange,
  error
}) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className={
          error
            ? 'form-control form-control-md is-invalid'
            : 'form-control form-control-md'
        }
      />
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}
InputFieldGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}
InputFieldGroup.defaultProps = {
  type: 'text'
}
