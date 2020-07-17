import React from 'react'

const Button = ({ children, type, className, onClick }) => {
  return (
    <button onClick={onClick} type={type || 'button'} className={className}>
      {children}
    </button>
  )
}

export default Button
