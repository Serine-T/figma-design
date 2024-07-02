import React from 'react'

const Section = ({children}) => {
  return (
    <section style={{ width: '100%', maxWidth: '1440px', display: 'flex', margin:'0 auto',  justifyContent: 'center', padding: '50px'}}>
        {children}
    </section>
  )
}

export default Section