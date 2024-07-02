import React from 'react'

const SectionContainer = ({children}) => {
  return (
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap'}}>{children}</div>
  )
}

export default SectionContainer