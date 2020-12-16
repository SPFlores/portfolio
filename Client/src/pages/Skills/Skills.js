import React from 'react'
import skills from './skillsArr'
import SkillsCard from '../../components/SkillCard'
import './index.css'

const Skills = _ => {
  console.log(skills)
  return (
    <div className='section' id='skills'>
      <div id="skills__cards">
        {skills.map(skill => {
          return <SkillsCard skill={skill} />
        })}
      </div>
    </div>
  )
}

export default Skills
