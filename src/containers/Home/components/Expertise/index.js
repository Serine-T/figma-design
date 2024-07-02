import React from 'react'
import SectionAbove from '../../../common/SectionAbove'
import Section from '../../../common/Sections'
import { data } from './data'
import ExpertiseCard from './ExpertiseCard'
import SectionContainer from '../../../common/SectionContainer'

const Expertise = () => {
  return (
    <>
        <SectionAbove
            title="Our Expertise"
            description="Explore our expertise in Design Build, Structural Concrete, and Pre-Construction, where we bring exceptional skill and precision to every phase of your project." 
        />
        <Section>
            <SectionContainer>
                {data.map((item)=> (
                    <ExpertiseCard key={item.id} {...item} />
                ))}
            </SectionContainer>
        </Section>
    </>
  )
}

export default Expertise