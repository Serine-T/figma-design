import React from 'react'
import SectionAbove from '../../../common/SectionAbove'
import Section from '../../../common/Sections'
import { data } from './data'

import SectionContainer from '../../../common/SectionContainer'
import ExpertiseCard from '../Expertise/ExpertiseCard'

const Projects = () => {
  return (
    <>
        <SectionAbove
            title="Our Projects"
            description="Explore our portfolio of completed projects, showcasing our commitment to excellence, precision, and quality across a diverse range of successful construction endeavors." 
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

export default Projects