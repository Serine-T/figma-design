import React from 'react'
import CardItem from '../../../common/CardItem'

const ClientCard = ({user, company, description, image}) => {
  return (
    <CardItem background='black'>
          <p style={{color: '#fff'}}>{description}</p>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{height: '40px', width: '40px'}} >
                <img src={image} alt={image} style={{height: '100%', width: '100%', objectFit: 'cover', borderRadius:'50%'}} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                <p  style={{color: '#fff'}}>{user}</p>
                <p  style={{color: '#fff'}}>{company}</p>
            </div>
          </div>
    </CardItem>
  )
}

export default ClientCard