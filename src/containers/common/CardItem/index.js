import React from 'react'

const CardItem = ({children, ...props}) => {
    console.log({props})
  return (
    <div style={{
        width: '386px',
        margin: '10px',
        padding: '36px', 
        border: '1px solid black',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...props
    }}>{children}</div>
  )
}

export default CardItem