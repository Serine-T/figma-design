import React from 'react'

const Button = ({name, width}) => {
  return (
    <button style={{borderRadius: '40px', border: '1px solid black', outline: 'none', width: width || 'auto', padding: '15px 24px'}}>{name}</button>
  )
}

export default Button