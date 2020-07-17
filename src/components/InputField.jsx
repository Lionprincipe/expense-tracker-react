import React from 'react'

const InputField = ({ label, type, name, placeholder, onChange, value }) => {
  return (
    <label className='edit-form__field'>
      <div>{label}</div>
      <input
        type={type || 'text'}
        placeholder={placeholder || 'enter value'}
        name={name || 'input'}
        onChange={onChange}
        value={value}
      />
    </label>
  )
}

export default React.memo(InputField)
