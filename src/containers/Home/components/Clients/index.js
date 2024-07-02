import React from 'react'
import SectionAbove from '../../../common/SectionAbove'
import Section from '../../../common/Sections'
import { data } from './data'

import SectionContainer from '../../../common/SectionContainer'
import ClientCard from './ClientCard'

const Clients = () => {
  return (
    <>
        <SectionAbove
            title="What Our Clients Say"
            description="Discover what our clients say about their experiences working with us, highlighting our dedication to quality, professionalism, and exceptional results." 
        />
        <Section>
            <SectionContainer>
                {data.map((item)=> (
                    <ClientCard key={item.id} {...item} />
                ))}
            </SectionContainer>
        </Section>
    </>
  )
}

export default Clients