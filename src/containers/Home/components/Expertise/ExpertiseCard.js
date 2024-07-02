import React from 'react'
import CardItem from '../../../common/CardItem'
import Button from '../../../common/Button'

const ExpertiseCard = ({title, description, image}) => {
  return (
    <CardItem>
        <div style={{height: '172px', width: '172px'}} >
            <img src={image} alt={image} style={{height: '100%', width: '100%', objectFit: 'cover', borderRadius: '50%',}} />
        </div>
     
        <h6>{title}</h6>
        <p>{description}</p>
        <Button name="Learn more" width="100%"/>
    </CardItem>
  )
}

export default ExpertiseCard