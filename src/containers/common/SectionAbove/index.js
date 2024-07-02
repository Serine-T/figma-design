import React from 'react'
import SectionTitle from '../SectionTitle'
import SectionDescription from '../SectionDescription'

const SectionAbove = ({title, description}) => {
  return (
    <>
    <SectionTitle title={title}/>
     <SectionDescription description={description}/>
     </>
  )
}

export default SectionAbove